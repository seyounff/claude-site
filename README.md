# Mercenary Company Games

Official website for **Mercenary Company**, a PC tactical extraction dungeon RPG in active development by **Mercenary Company Games**.

- Website: https://mercenarycompanygame.com/
- Contact: founder@mercenarycompanygame.com
- Hosting: GitHub Pages, `main` branch, repository root

## Site structure

The site uses plain HTML, CSS, and a small JavaScript file. No build step, external framework, web font, or analytics service is required.

- `index.html`: product description, gameplay showcase, development status, contact, and SEO metadata
- `styles.css`: stylesheet source, embedded in `index.html` to avoid an additional blocking network request
- `script.js`: optional screenshot lightbox using a native HTML dialog
- `assets/screenshots/`: optimized real gameplay images and social preview
- `favicon.svg`: studio monogram
- `CNAME`: custom domain used by GitHub Pages
- `robots.txt` and `sitemap.xml`: public search indexing information

Screenshot links open the original image when JavaScript is unavailable. With JavaScript enabled, Escape closes the dialog and focus returns to the link that opened it.

## Local preview

From the repository root, run:

```sh
python -m http.server 8000
```

Then open http://localhost:8000/. Review at 1920, 1440, 1280, 768, and 390 pixels wide when changing the layout.

## Real game screenshots

The four scenes were captured from the actual Godot project on 2026-10-08 during a normal campaign. They show work in progress and may change during development.

| Image | What it shows |
| --- | --- |
| `hero-gameplay.webp` | Dungeon combat with the party HUD and minimap |
| `combat.webp` | An autonomous party encounter with the equipment inventory visible |
| `expedition.webp` | Expedition policies, priorities, formation, and party equipment |
| `mercenary-management.webp` | The mercenary roster and a selected mercenary's attributes, equipment, and skills |

Original 1920 × 1080 PNG captures are retained outside this public repository. Full-size and standard responsive copies use lossless WebP. The 768-pixel mobile versions use near-lossless WebP; their measured maximum RGB channel difference is 1 out of 255 compared with the resized source. Responsive versions are selected through `srcset`. The social preview is a 1200 × 675 JPEG derived from the same real gameplay capture. No generated game art or fabricated gameplay is used.

The website describes party preparation and autonomous expeditions. It does not claim direct player control during combat. Release dates, player counts, funding, team size, and Claude API integration are not asserted.

## Updating content

When replacing a screenshot, preserve its aspect ratio, add accurate alternative text, update the responsive variants and dimensions, and check the full-size lightbox. Keep the displayed features consistent with the current game implementation.

After editing `styles.css`, copy its content into the `<style id="site-styles">` block in `index.html` before previewing and committing. These copies must match.

Keep the canonical URL, Open Graph image, contact address, sitemap, and `CNAME` consistent with the official domain. Development status should remain clear until a release has actually occurred.

## GitHub Pages

In **Settings → Pages → Build and deployment**, use **Deploy from a branch**, **main**, and **/(root)**. The custom domain is `mercenarycompanygame.com`.

DNS is managed separately by the domain owner. This repository does not modify DNS records. Verify the public HTTPS URL and asset loading after each deployment.