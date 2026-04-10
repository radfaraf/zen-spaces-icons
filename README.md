# Spaces Icons

Spaces Icons is a Zen Browser workspace-icon mod. It adds two settings for the
workspace switcher icons shown in the browser UI:

- a size preset
- an active-space highlight color preset

## What The Mod Changes

- only the workspace switcher icons are resized
- only the active workspace gets the colored highlight box
- the current-workspace label, tabs, and other toolbar icons are left alone

## Available Settings

### Space icon size

Choose one of these presets:

- 100%
- 125%
- 150%
- 200%
- 250%

### Active space highlight color

Choose one of these preset colors:

- Blue
- Sky
- Cyan
- Teal
- Mint
- Green
- Lime
- Yellow
- Amber
- Orange
- Coral
- Red
- Rose
- Pink
- Fuchsia
- Purple
- Violet
- Indigo
- Slate
- Silver

## Usage Notes

- The color setting uses a dropdown so it works cleanly with Zen's documented
  mod preference UI.
- Larger size presets increase the icon size while keeping the highlight aligned.
- The default highlight color is Blue.

## Troubleshooting

- If the icon size changes but the settings do not appear in Zen, load the mod
  through a Zen mod workflow that reads `preferences.json`.
- If a future Zen update changes the workspace DOM, the CSS selectors may need
  to be refreshed.
