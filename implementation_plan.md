# Theme Refactoring: Light Theme & Green Accent

This plan outlines the steps to refactor the current dark theme of the Kandonga admin dashboard to match the light theme shown in the provided screenshots, and to update the primary accent color.

## User Review Required

> [!WARNING]
> This is a major visual overhaul. I will modify the global CSS variables and specific component styles to transition from the current dark mode to a clean, modern light mode.
> 
> The new primary color will be **`#07d403`** (Green) as requested, completely replacing the blue/purple accents.

## Proposed Changes

### 1. Global CSS Variables (`src/index.css`)
I will update the `:root` variables to reflect a light theme:
- `--bg-body`: `#f4f6f8` (Soft light gray for the app background)
- `--bg-sidebar`: `#ffffff` (White background for the sidebar)
- `--bg-surface`: `#ffffff` (White background for all cards and panels)
- `--border`: `#e5e7eb` (Very subtle light gray borders)
- `--text-primary`: `#1f2937` (Dark gray/almost black for headings and primary text)
- `--text-secondary`: `#6b7280` (Medium gray for descriptions)
- `--text-tertiary`: `#9ca3af` (Lighter gray for small labels)
- `--brand-blue`: Will be renamed to `--brand-primary` and set to `#07d403`
- `--brand-primary-hover`: Darker shade of green for hover states

### 2. Component Styling Updates (`src/index.css`)
- **Cards and Panels:** Add soft shadows (`box-shadow: 0 4px 16px rgba(0,0,0,0.04)`) and ensure they use the white background with the new border color.
- **Sidebar & Topbar:** Update hover states to use a light gray or subtle green background instead of dark gray. Update icon colors to match the new text colors.
- **Buttons:** Update the primary buttons to use the new `#07d403` background with white text. Update secondary buttons to have light borders and dark text.
- **Data Table:** Update row hover effects, header text colors, and cell borders to fit the light theme.
- **Score Gauges & Badges:** Ensure the colors for success/warning/error states (admitido, pendente, negado) still look good and legible on white backgrounds.
- **Inputs:** Update the search bar and any inputs to have a white background, dark text, and subtle borders.

## Verification Plan

### Automated/Manual Verification
- Run the Vite development server.
- Manually check the Dashboard, Créditos, and Details Modal views.
- Ensure all text is highly readable with adequate contrast against the light backgrounds.
- Verify that the new primary green color (`#07d403`) is applied consistently to buttons, active states, and highlights.
