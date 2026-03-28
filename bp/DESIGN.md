# Design System Document: The High-End Editorial Portfolio

## 1. Overview & Creative North Star
**Creative North Star: The Silent Curator**
This design system is built for a high-end digital studio where the work is the protagonist and the interface is the gallery. It rejects the "template" aesthetic of modern SaaS in favor of a bespoke, Scandinavian editorial feel. The core philosophy is **Restraint as Power**. By using a monochromatic palette, a rigid 5-column grid, and sharp 0px corners, we create a sense of architectural permanence and intellectual rigor.

The system breaks standard digital conventions through **Intentional Asymmetry**. We utilize a 5-column vertical grid to create "unbalanced" layouts that feel more like a printed monograph than a website. High-contrast typography scales—mixing the romanticism of serifs with the technical precision of mono-spaced fonts—provide the visual "soul" of the experience.

---

## 2. Colors & Texture
The palette is deeply rooted in earth tones and charcoal blacks, avoiding the sterile "pure black" of standard dark modes.

*   **Background (`#0C0C0C`):** The canvas. A deep, ink-like black.
*   **Surface (`#161616`):** Used for elevated containers and section shifts.
*   **Text/On-Surface (`#F5F5F0`):** An off-white "parchment" tone to reduce eye strain and feel premium.
*   **Accent/Primary (`#E8E4DD`):** A soft limestone for high-priority UI elements.
*   **Highlight/Secondary (`#C4A882`):** A muted gold/wheat tone for interactive moments and CTA emphasis.

### The "No-Line" Rule
To maintain an editorial feel, **prohibit 1px solid borders for sectioning.** Boundaries must be defined solely through background color shifts. For example, a `surface-container-low` section should sit directly against the `background` to create a natural horizon line without a stroke.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the `surface-container` tiers to create depth:
*   **Layer 0:** `surface_container_lowest` (#000000) for deep backgrounds.
*   **Layer 1:** `surface` (#0E0E0E) for the primary body.
*   **Layer 2:** `surface_container` (#191A1A) for cards or navigation overlays.
Each inner container must use a slightly different tier to define its importance, mimicking stacked sheets of fine, heavy-weight paper.

### Signature Texture: The Grain
Apply a global `3-5% opacity` noise overlay across the entire viewport. This breaks the digital smoothness, giving the site a tactile, film-grain quality that aligns with Scandinavian minimalism.

---

## 3. Typography
Typography is the primary vehicle for brand expression in this system. We use three distinct voices to create a hierarchy of "The Artist," "The Narrator," and "The Engineer."

*   **The Artist (DM Serif Display):** Used for Headlines and Display styles. **Rule:** Designers should frequently mix `Regular` and `Italic` weights within the same sentence to emphasize specific words, creating a custom editorial rhythm.
*   **The Narrator (DM Sans):** Used for body copy and navigation. It provides a clean, neutral balance to the expressive serif.
*   **The Engineer (JetBrains Mono):** Used for labels, metadata, and accents. This font should always be in uppercase or small-caps to denote technical precision and studio "specs."

**Scale Highlight:**
*   **Display-LG:** `3.5rem` / DM Serif Display. Tight kerning (-2%).
*   **Label-MD:** `0.75rem` / JetBrains Mono. Wide tracking (+10%).

---

## 4. Elevation & Depth
We reject traditional shadows. Elevation is achieved through **Tonal Layering**.

*   **The Layering Principle:** Place a `surface-container-high` card on a `surface` background to create a soft, natural lift. 
*   **Ambient Shadows:** If a "floating" effect is absolutely necessary (e.g., a modal), use an extra-diffused shadow: `box-shadow: 0 20px 80px rgba(0, 0, 0, 0.4)`. The shadow color must be a tinted version of the background, never a generic grey.
*   **Glassmorphism:** For the navigation bar or floating "Quick Action" buttons, use `surface` at 80% opacity with a `20px backdrop-filter: blur()`. This allows the work/imagery to bleed through the UI, making the layout feel integrated.

---

## 5. Components

### Buttons
*   **Primary:** Background: `secondary` (#B59A75), Text: `on_secondary` (#2D1D03). **Shape:** 0px radius (Sharp).
*   **Tertiary (Link):** DM Sans, Bold, with a 1px underline that sits 4px below the baseline. On hover, the underline should shift color to `highlight`.

### 5-Column Grid Elements
Layouts must align to the 5 vertical grid lines. 
*   **The "Power Asymmetry":** An image might span columns 1–3, while the descriptive text sits in column 5. Column 4 remains empty as intentional "negative space" to create breathing room.

### Inputs & Fields
*   **Style:** No box. Only a bottom-border using `outline_variant` at 20% opacity. 
*   **Focus State:** The bottom border animates to 100% opacity of the `primary` token.
*   **Labels:** Always JetBrains Mono, All-Caps, `label-sm`.

### Cards & Lists
*   **Rule:** Forbid divider lines. Separate list items using the spacing scale (e.g., `spacing-8` or `2.75rem`). Use background color shifts on hover (e.g., transitioning from `surface` to `surface_bright`) to indicate interactivity.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace White Space:** If a section feels "full," remove an element. Scandinavian design is defined by what is left out.
*   **Use the Italic Mix:** Use DM Serif Italic for "action verbs" or "key adjectives" in hero statements.
*   **Align to the Grid:** Every element must snap to one of the 5 vertical lines.

### Don't:
*   **No Rounded Corners:** `Border-radius` must remain `0px` everywhere. No exceptions for buttons, cards, or images.
*   **No Purple/Blue/Neon:** If an status color is needed (e.g., Error), use the `error` (#ED7F64) token which is a muted terracotta, keeping with the earthy palette.
*   **No Standard Icons:** Avoid "Material" or "Lucide" icons where possible. Use text-based triggers (JetBrains Mono) or custom, ultra-thin (1px stroke) SVG iconography.