# Mercenary Company Games

Official website for **Mercenary Company**, a PC tactical extraction dungeon RPG in active development by **Mercenary Company Games**.

- Website: https://mercenarycompanygame.com/
- Contact: founder@mercenarycompanygame.com
- Hosting: GitHub Pages, `main` branch, repository root

## Site structure

The site uses plain HTML, CSS, and a small JavaScript file. No build step, external framework, web font, or analytics service is required.

- `index.html`: product description, gameplay showcase, studio and founder, dated development record, contact, investment support, and SEO metadata
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

Original 1920 × 1080 PNG captures are retained outside this public repository. Full-size and standard responsive copies use lossless WebP. The 656- and 768-pixel mobile versions use near-lossless WebP; their measured maximum RGB channel difference is 1 out of 255 compared with the resized source. Responsive versions are selected through `srcset`. The social preview is a 1200 × 675 JPEG derived from the same real gameplay capture. No generated game art or fabricated gameplay is used.

The website describes party preparation and autonomous expeditions. It does not claim direct player control during combat. Release dates, player counts, investment amounts or rounds, team size, and Claude API integration are not asserted.

## Studio and development information

The founder name (Seyoun Han), role (Founder & Game Developer), country (South Korea), and Pusan National University investment support were supplied by the founder. Investment support is displayed as plain text at the bottom of the page. No university logo, investment amount, investment round, official endorsement, or legal incorporation date is implied. The investment contract has not been independently reviewed.

The development record uses specific evidence:

- 2026-09-06: the earliest recorded game repository commit, `959f5a8a`. This is a project history date, not a legal incorporation date.
- 2026-10-08: the actual game build screenshots displayed on the site.
- 2026-10-09: game repository commit `26f7f784`, titled `UI 수정`, including expedition and company management UI updates. The note does not claim a release or new completed gameplay systems.

Organization and VideoGame structured data connect the studio, founder, product, contact address, and canonical URL. The page does not describe the game as powered by Claude; the founder currently plans to use Claude Code in the development workflow.

## Updating content

When replacing a screenshot, preserve its aspect ratio, add accurate alternative text, update the responsive variants and dimensions, and check the full-size lightbox. Keep the displayed features consistent with the current game implementation.

After editing `styles.css`, copy its content into the `<style id="site-styles">` block in `index.html` before previewing and committing. These copies must match.

Keep the canonical URL, Open Graph image, contact address, sitemap, and `CNAME` consistent with the official domain. Development status should remain clear until a release has actually occurred.

## GitHub Pages

In **Settings → Pages → Build and deployment**, use **Deploy from a branch**, **main**, and **/(root)**. The custom domain is `mercenarycompanygame.com`.

DNS is managed separately by the domain owner. This repository does not modify DNS records. Verify the public HTTPS URL and asset loading after each deployment.