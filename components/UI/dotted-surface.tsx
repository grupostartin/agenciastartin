'use client';
import { cn } from '@/lib/utils';
import { useTheme } from 'next-themes';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

type DottedSurfaceProps = Omit<React.ComponentProps<'div'>, 'ref'>;

export function DottedSurface({ className, children, ...props }: DottedSurfaceProps) {
    const { theme } = useTheme();

    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<{
        scene: THREE.Scene;
        camera: THREE.PerspectiveCamera;
        renderer: THREE.WebGLRenderer;
        particles: THREE.Points[];
        animationId: number;
        count: number;
    } | null>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const SEPARATION = 150;
        const AMOUNTX = 40;
        const AMOUNTY = 60;

        // Scene setup
        const scene = new THREE.Scene();
        scene.fog = new THREE.Fog(0x000000, 2000, 10000);

        const camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            1,
            10000,
        );
        camera.position.set(0, 155, 800);

        const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
        });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);

        containerRef.current.appendChild(renderer.domElement);

        // Create particles
        const positions: number[] = [];
        const colors: number[] = [];

        // Create geometry for all particles
        const geometry = new THREE.BufferGeometry();

        const currentTheme = theme || 'dark';

        for (let ix = 0; ix < AMOUNTX; ix++) {
            for (let iy = 0; iy < AMOUNTY; iy++) {
                const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
                const y = 0; // Will be animated
                const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

                positions.push(x, y, z);
                if (currentTheme === 'dark') {
                    colors.push(1, 1, 1);
                } else {
                    colors.push(0, 0, 0);
                }
            }
        }

        geometry.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(positions, 3),
        );
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        // Create material
        const material = new THREE.PointsMaterial({
            size: 15,
            vertexColors: true,
            transparent: true,
            opacity: 1.0,
            sizeAttenuation: true,
        });

        // Create points object
        const points = new THREE.Points(geometry, material);
        scene.add(points);

        // Animation logic
        let count = 0;
        let animationId: number;

        const animate = () => {
            animationId = requestAnimationFrame(animate);

            const positions = geometry.attributes.position.array as Float32Array;

            let i = 0;
            for (let ix = 0; ix < AMOUNTX; ix++) {
                for (let iy = 0; iy < AMOUNTY; iy++) {
                    const index = i * 3;

                    // More dramatic wave calculation
                    positions[index + 1] =
                        Math.sin((ix + count) * 0.3) * 100 +
                        Math.sin((iy + count) * 0.5) * 100;

                    i++;
                }
            }

            geometry.attributes.position.needsUpdate = true;
            renderer.render(scene, camera);
            count += 0.15;
        };

        // Handle window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        animate();

        // Store references for cleanup
        sceneRef.current = {
            scene,
            camera,
            renderer,
            particles: [points],
            animationId,
            count,
        };

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);

            if (sceneRef.current) {
                cancelAnimationFrame(sceneRef.current.animationId);

                // Clean up Three.js objects
                sceneRef.current.scene.traverse((object) => {
                    if (object instanceof THREE.Points) {
                        object.geometry.dispose();
                        if (Array.isArray(object.material)) {
                            object.material.forEach((material) => material.dispose());
                        } else {
                            object.material.dispose();
                        }
                    }
                });

                sceneRef.current.renderer.dispose();

                if (containerRef.current && sceneRef.current.renderer.domElement) {
                    containerRef.current.removeChild(
                        sceneRef.current.renderer.domElement,
                    );
                }
            }
        };
    }, [theme]);

    return (
        <div
            ref={containerRef}
            className={cn('pointer-events-none fixed inset-0 z-0', className)}
            {...props}
        >
            {children}
        </div>
    );
}
