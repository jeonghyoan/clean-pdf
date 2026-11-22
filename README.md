# clean-pdf

A small PDF viewer for the browser. No ads, no sign-up, no uploads.

Pick a PDF from your device and it opens right there. The file is read inside the browser and is not sent anywhere.

## Features

- Files stay local. Nothing is uploaded.
- Text search with a match count, previous and next navigation, and a highlight on the page.
- Zoom in, zoom out, reset.
- Dark mode, remembered per browser.
- Jump to a page by number; the last page read is remembered per file.
- Only the visible pages are drawn, so long documents scroll without lag.
- Can be installed to the home screen when served over https.

## Install

Nothing to build. Use it in one of two ways.

Use it in the browser:

- Open https://jeonghyoan.github.io/clean-pdf/
- Or download the files and open index.html directly. All features work this way, but browsers do not allow the home screen install for local files.

Install it on an Android phone:

1. Open the https address in Chrome or Samsung Internet.
2. Open the browser menu and choose Install app, or Add to Home screen.
3. Launch it from the home screen. It opens without the address bar.

## Usage

1. Tap Open and pick a PDF.
2. Use the magnifier to search. The counter shows the current match and the total, and the arrows move between matches.
3. Use the minus and plus buttons to zoom, the sun button for dark mode, and the page field at the bottom to jump.

## Deploy

Any static host works. There is no build step.

- GitHub Pages: push this folder, then choose the branch in Settings > Pages.
- Cloudflare Pages or Netlify: upload the folder as is.

## Files

- index.html - the viewer
- manifest.json - app name, icons, install settings
- sw.js - caches files for offline use
- pdf.min.js, pdf.worker.min.js - PDF.js engine
- icon-192.png, icon-512.png, icon-maskable-*.png - app icons

## Privacy

PDFs and search terms stay in the browser. Only the theme and the last page read are stored, in localStorage.

## License

PDF.js is by Mozilla, licensed Apache-2.0. The rest is free to use.
