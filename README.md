SPACES ICONS MANUAL

Overview

Spaces Icons is a Zen Browser workspace-icon mod. It adds two settings for the
workspace switcher icons shown in the browser UI:

- a size preset
- an active-space highlight color

What The Mod Changes

- only the workspace switcher icons are resized
- only the active workspace gets the colored outline ring
- the current-workspace label, tabs, and other toolbar icons are left alone

Available Settings

1. Space icon size
   Choose one of these presets:
   - 100%
   - 125%
   - 150%
   - 200%
   - 250%

2. Active space highlight color
   Enter a valid CSS color value such as:
   - #4f8cff
   - rgb(79 140 255)
   - dodgerblue

Usage Notes

- The color field is a text value because Zen's documented mod preference types
  support dropdown, checkbox, and string inputs.
- If the color value is invalid, the active-space ring will not render until
  the value is corrected.
- Larger size presets increase both the icon size and the button size so the
  icon is less likely to clip.

Troubleshooting

- If the icon size changes but the settings do not appear in Zen, load the mod
  through a Zen mod workflow that reads preferences.json.
- If the highlight color does not appear, test with a simple hex value such as
  #4f8cff first.
- If a future Zen update changes the workspace DOM, the CSS selectors may need
  to be refreshed.
