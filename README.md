# css-grid

Functional CSS for grid

## Filesize

| File | Size |
|------|------|
| `dist/grid.css` | 1 bytes |
| `dist/grid.min.css` | 0 bytes (20 Gzipped) |

## Install

```sh
npm install css-grid
```

## Usage

### Import

```css
@import "css-grid";
```

### CDN

```html
<link rel="stylesheet" href="https://unpkg.com/css-grid/dist/grid.min.css">
```

### Direct

```html
<link rel="stylesheet" href="path/to/css-grid/dist/grid.min.css">
```

## Classes

| Class   | Value                    |
|---------|--------------------------|


### Responsive

Responsive variants are available for each class with the following suffixes:

| Suffix | Media Query              |
|--------|--------------------------|
| `-s`   | `min-width: 32em`        |
| `-m`   | `min-width: 48em`        |
| `-l`   | `min-width: 96em`        |

Example: `.example-m` applies the property at the medium breakpoint and above.

## Building

```sh
npm run build
```

Processes `src/grid.css` with [Lightning CSS](https://lightningcss.dev) and outputs to `dist/`.

- `dist/grid.css` — formatted
- `dist/grid.min.css` — minified

## License

MIT
