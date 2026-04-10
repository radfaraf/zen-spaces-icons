# Spaces Icons

`Spaces Icons` is a Zen Browser mod that makes the workspace switcher icons
easier to see and easier to customize.

## What It Does

- adds a size preset for workspace icons: `100%`, `125%`, `150%`, `200%`, `250%`
- adds a configurable outline ring for the active workspace icon
- keeps the scope limited to the workspace switcher instead of restyling the
  rest of the sidebar

## Files

- `theme.json`: mod metadata
- `preferences.json`: Zen mod settings definitions
- `userChrome.css`: browser UI styling for the workspace icons
- `docs/manuals/spaces_icons_manual.txt`: basic user manual
- `docs/requirements/spaces_icons_requirements.md`: current intended behavior

## Settings

### Space icon size

Uses a Zen `dropdown` preference with these presets:

- `100%`
- `125%`
- `150%`
- `200%`
- `250%`

### Active space highlight color

Uses a Zen `string` preference. Enter any valid CSS color value, such as:

- `#4f8cff`
- `rgb(79 140 255)`
- `dodgerblue`

If the value is not a valid CSS color, Zen drops the color-dependent ring
styling and the rest of the mod continues to work.

## Notes

- The preference wiring follows Zen's documented `preferences.json` model for
  `dropdown` and `string` values.
- For full settings support, load this as a Zen mod package that reads
  `preferences.json`.
- For quick CSS experimentation, you can still test the styling in Zen's
  `userChrome.css` live-editing workflow.
