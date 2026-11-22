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

## Install on Android

Open the deployed https address in Chrome or Samsung Internet, then open the browser menu and choose Install app or Add to Home screen.

Opening the file straight from storage works as well, but browsers do not offer the home screen install for local files.

## Live

https://jeonghyoan.github.io/clean-pdf/

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
