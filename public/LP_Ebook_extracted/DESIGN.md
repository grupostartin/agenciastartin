# Design System Document: The Authoritative Calm

## 1. Overview & Creative North Star
**Creative North Star: "The Editorial Architect"**
The objective of this design system is to transition the user from a state of social hesitation to one of structured confidence. We move away from the "cluttered self-help" aesthetic into a high-end editorial experience. This is achieved through **The Editorial Architect** approach: a layout that feels built, intentional, and spacious. 

We break the "template" look by utilizing intentional asymmetry—where headlines may bleed into margins or overlap subtly with imagery—and high-contrast typography scales that command attention. This system avoids the rigid "box-on-box" grid, favoring a fluid, layered composition that feels more like a premium digital monograph than a standard landing page.

---

## 2. Colors & Surface Philosophy
The palette is rooted in a deep, nocturnal foundation, allowing our "Coral Signal" and "Gold Accent" to vibrate with purpose.

### Surface Hierarchy & Nesting
Instead of using lines to separate ideas, we use **Tonal Layering**. The UI should be treated as physical layers of matte glass.
- **Base Layer:** `surface` (#111415) - The infinite canvas.
- **Sectioning:** Use `surface_container_low` (#191C1D) for large structural blocks.
- **Focus Containers:** Use `surface_container` (#1D2021) or `surface_container_high` (#282A2B) to "lift" content toward the user.

### The "No-Line" Rule
**Explicit Instruction:** Prohibit 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts or ample whitespace. A transition from `surface` to `surface_container_low` provides all the edge definition a modern eye requires.

### The "Glass & Gradient" Rule
To avoid a flat, "web 1.0" feel, use **Glassmorphism** for floating headers or navigation bars. 
- **Recipe:** `surface` color at 70% opacity + 20px `backdrop-blur`.
- **Signature Textures:** Apply a linear gradient to Primary CTAs transitioning from `primary` (#FFB2B7) to `primary_container` (#41000E) at a 135-degree angle. This adds "soul" and a tactile, curved appearance to flat buttons.

---

## 3. Typography
Typography is our primary tool for authority. We pair the geometric precision of **Plus Jakarta Sans** for high-impact moments with the utilitarian clarity of **Inter** for long-form persuasion.

*   **Display (Plus Jakarta Sans):** Used for the "Value Prop." `display-lg` (3.5rem) should be used with `tight` letter-spacing (-0.02em) to create a "wall of authority."
*   **Headlines (Plus Jakarta Sans):** `headline-lg` through `md`. These are your anchors. Use `on_surface` for standard text and `primary` for "Power Words."
*   **Body (Inter):** `body-lg` (1rem/16px) is the minimum for readability. Use `on_surface_variant` (#C8C5CD) for secondary descriptions to maintain a clear visual hierarchy against the primary white text.
*   **Labels (Inter):** `label-md` should be used in ALL CAPS with a +0.05em letter spacing for small metadata or overlines, signaling a "curated" editorial feel.

---

## 4. Elevation & Depth
In this system, depth is a psychological cue for "substance."

### The Layering Principle
Achieve depth by stacking surface tiers. Place a `surface_container_highest` card on top of a `surface_container_low` section. This creates a soft, natural lift without the "dirty" look of heavy shadows.

### Ambient Shadows
Shadows are only permitted on floating elements (e.g., a "Success Story" card that overlaps two sections).
- **Spec:** Blur: 60px | Spread: -10px | Opacity: 8% | Color: `surface_container_lowest` (#0C0F10). 
- **The "Ghost Border" Fallback:** If a container lacks contrast against a specific background, use a 1px border of `outline_variant` (#47464C) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Buttons (The "Action Signals")
- **Primary:** Background: Gradient (`primary` to `on_primary_container`). Shape: `xl` (3rem) roundedness. Text: `label-md` (Bold).
- **Secondary:** Background: Transparent. Border: `outline` at 20% opacity. Text: `on_surface`.
- **Interaction:** On hover, the primary button should "glow" via a subtle outer shadow of the `primary` color at 20% opacity.

### Cards & Content Blocks
- **Constraint:** No dividers. Use `md` (1.5rem) or `lg` (2rem) vertical spacing to separate headlines from body copy.
- **Edge Treatment:** All cards must use `lg` (2rem) or `xl` (3rem) corner radius to soften the "Authoritative" tone with "Empathy."

### Signature Component: The "Growth Path" List
Instead of standard bullet points, use a vertical list where the "Leading Element" is a `tertiary` (#FFB955) gold dot. Use `surface_container_high` as a subtle background hover state for each list item to make the content feel interactive.

### Input Fields
- **Style:** Underlined or "Soft Box." Use `surface_container_highest` as the fill. 
- **States:** Focus state uses a 2px bottom-border of `tertiary` (Gold) to signify the "premium" nature of the input.

---

## 6. Do's and Don'ts

### Do:
- **Do** use asymmetrical layouts. Let an image be 60% width and the text 40%, then flip it in the next section.
- **Do** use `tertiary` (Gold) sparingly. It is a spice, not a main ingredient. Use it for icons or single-word highlights.
- **Do** lean into "Breathing Room." If you think there is enough margin, add 24px more.

### Don't:
- **Don't** use pure black (#000000). Always use `surface` (#111415) to maintain the deep navy professional undertone.
- **Don't** use standard 1px dividers. If you need to separate content, use a background shift or a 32px height spacer.
- **Don't** use sharp corners. The "Anti-Timid" brand must feel accessible; sharp corners feel aggressive, while our `xl` roundedness feels welcoming.
- **Don't** use high-saturation red for backgrounds. The `primary` coral/red is a high-contrast tool for the eye—use it only for what must be clicked or remembered.