'use client';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type DottedSurfaceProps = Omit<React.ComponentProps<'div'>, 'ref'>;

// Creates a soft circular sprite texture using a canvas
function createCircleTexture(): THREE.Texture {
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;

    const gradient = ctx.createRadialGradient(
        size / 2, size / 2, 0,
        size / 2, size / 2, size / 2,
    );
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.4, 'rgba(255,255,255,0.9)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.fill();

    return new THREE.CanvasTexture(canvas);
}

export function DottedSurface({ className, children, ...props }: DottedSurfaceProps) {
    const { theme } = useTheme();

    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<{
        scene: THREE.Scene;
        camera: THREE.PerspectiveCamera;
        renderer: THREE.WebGLRenderer;
        animationId: number;
    } | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const SEPARATION = 80;  // Tighter grid
        const AMOUNTX = 80;     // More particles
        const AMOUNTY = 80;     // More particles

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
            85,
            window.innerWidth / window.innerHeight,
            1,
            10000,
        );
        // Close camera angle to fill frame like in the reference image
        camera.position.set(0, 120, 550);
        camera.lookAt(new THREE.Vector3(0, -100, 0));

        const renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: false,
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 1);

        const canvas = renderer.domElement;
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100vw';
        canvas.style.height = '100vh';
        canvas.style.zIndex = '0';

        containerRef.current.appendChild(canvas);

        // Setup particles
        const numParticles = AMOUNTX * AMOUNTY;
        const positions = new Float32Array(numParticles * 3);
        const geometry = new THREE.BufferGeometry();

        let i = 0;
        for (let ix = 0; ix < AMOUNTX; ix++) {
            for (let iy = 0; iy < AMOUNTY; iy++) {
                positions[i * 3] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
                positions[i * 3 + 1] = 0;
                positions[i * 3 + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
                i++;
            }
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        // Use circular sprite texture for round dots
        const circleTexture = createCircleTexture();

        const material = new THREE.PointsMaterial({
            size: 6,
            color: 0xffffff,
            map: circleTexture,
            transparent: true,
            alphaTest: 0.01,
            depthWrite: false,
            sizeAttenuation: true,
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        // Animation using clock for stable timing
        const clock = new THREE.Clock();
        let animationId: number;

        const animate = () => {
            animationId = requestAnimationFrame(animate);

            const t = clock.getElapsedTime();
            const posAttr = geometry.attributes.position;
            const arr = posAttr.array as Float32Array;

            let i = 0;
            for (let ix = 0; ix < AMOUNTX; ix++) {
                for (let iy = 0; iy < AMOUNTY; iy++) {
                    // Wave formula matching the original shadcn demo
                    arr[i * 3 + 1] =
                        Math.sin((ix + t * 2) * 0.3) * 50 +
                        Math.sin((iy + t * 2) * 0.5) * 50;
                    i++;
                }
            }

            posAttr.needsUpdate = true;
            renderer.render(scene, camera);
        };

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        animate();

        sceneRef.current = { scene, camera, renderer, animationId };

        return () => {
            window.removeEventListener('resize', handleResize);
            if (sceneRef.current) {
                cancelAnimationFrame(sceneRef.current.animationId);
                geometry.dispose();
                material.dispose();
                circleTexture.dispose();
                renderer.dispose();
                if (containerRef.current?.contains(canvas)) {
                    containerRef.current.removeChild(canvas);
                }
            }
        };
    }, [theme]);

    return (
        <div
            ref={containerRef}
            className={cn('relative w-full h-full overflow-hidden', className)}
            {...props}
        >
            <div className="relative z-10 w-full h-full">
                {children}
            </div>
        </div>
    );
}
