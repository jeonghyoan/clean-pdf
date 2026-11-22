# clean-pdf

A small PDF viewer for the browser. No ads, no sign-up, no uploads.

Pick a PDF from your device and it opens right there. The file is read inside the browser and is not sent anywhere.

## Features

- Files stay local. Nothing is uploaded.
- Opens on a menu of tools. The home button returns to it, keeping the current PDF loaded.
- Continuous scroll or one page at a time.
- Table of contents and page thumbnails.
- Text search with a match count, previous and next navigation, and a highlight on the page.
- Select and copy text from a page.
- Zoom in, zoom out, pinch on touch screens, double tap to zoom.
- Page rotation and fullscreen.
- Jump to a page by number; the last page read is remembered per file.
- Recent files up to 30 MB each are kept in the browser's IndexedDB (five at most) and reopen from the home menu without picking the file again. Larger files are listed by name only.
- Dark mode, remembered per browser.
- Keyboard: arrow keys and PageUp/PageDown for pages, Home/End for first and last, + and - for zoom, 0 to reset.
- Images to PDF: pick any number of images, reorder them, save one PDF.
- PDF to images: save the current page or a single page as PNG, or all pages in one ZIP.
- Merge several PDFs into one.
- Extract pages into a new PDF, for example 1-3, 5, 8-10.
- Export all text as a .txt file.
- Organize pages: reorder or remove pages and save a new PDF.
- Compress: render pages as JPEG at normal or light quality.
- Page numbers at the top or bottom, as 1 or 1 / N.
- Watermark text, Korean included, with adjustable opacity.
- Sign or draw on the current page with a pen, highlighter and eraser.
- Sticky notes: tap a page to pin a note at that spot, in yellow, blue or pink. Notes are kept per file in the browser and come back at the same place, and "save with notes" writes them into a new PDF.
- Open a password-protected PDF and save an unlocked copy. The unlocked copy is made of page images, so its text is not selectable.
- Only the visible pages are drawn, so long documents scroll without lag.
- Can be installed to the home screen when served over https, and works offline.

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
2. Use the magnifier to search, the circle button for zoom, and the page field at the bottom to jump.
3. Tap the menu (three dots) for view mode, rotation, fullscreen, dark mode, and the tools: images to PDF, PDF to images, merge, extract pages, text export, unlock, page organizer, compress, page numbers, watermark, and sign.

## Deploy

Any static host works. There is no build step.

- GitHub Pages: push this folder, then choose the branch in Settings > Pages.
- Cloudflare Pages or Netlify: upload the folder as is.

## Files

- index.html - the viewer
- manifest.json - app name, icons, install settings
- sw.js - caches files for offline use
- pdf.min.js, pdf.worker.min.js - PDF.js engine
- pdf-lib.min.js - PDF creation and editing
- icon-192.png, icon-512.png, icon-maskable-*.png - app icons

## Privacy

PDFs, images, and search terms stay in the browser. Only the theme, the last page read, and the recent file names are stored, in localStorage.

## License

MIT. See LICENSE.

The PDF engine is PDF.js by Mozilla, licensed under Apache-2.0. pdf-lib is by Andrew Dillon, licensed under MIT.
