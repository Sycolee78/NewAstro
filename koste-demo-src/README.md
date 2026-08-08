# Koste interactive demo — source

These are the source files for the interactive Koste UI demo embedded on the
`/projects/koste` page. The built output lives in `public/koste-demo/` and is
served as a static asset (rendered inside an iframe on the project page).

## Files
- `tokens.jsx` — design tokens, `Phone` frame, `Avatar`, `TabBar`
- `ios-frame.jsx` — `IOSStatusBar` and related iOS chrome
- `screens-a.jsx` / `screens-b.jsx` — the eight Koste screens
- `entry-head.jsx` — React imports (bundled in)
- `entry-app.jsx` — the interactive navigator (`KosteDemo`) + mount

The screens reference `React.*` and shared components as globals, so the files
are concatenated in order and bundled as one module.

## Rebuild
React is bundled in (no CDN). With `react`, `react-dom`, and `esbuild`
available:

```sh
cat entry-head.jsx tokens.jsx ios-frame.jsx screens-a.jsx screens-b.jsx entry-app.jsx > entry.jsx
esbuild entry.jsx --bundle --minify --format=iife --target=es2019 \
  --jsx=transform --loader:.jsx=jsx --outfile=../public/koste-demo/app.js
```

`public/koste-demo/index.html` is the shell (fonts + keyframes + `#root` + app.js).
