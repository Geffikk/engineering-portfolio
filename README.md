# Engineering portfolio

Anonymized public case studies for the systems I designed and built myself,
served as a static site by GitHub Pages.

**Live site:** https://geffikk.github.io/engineering-portfolio/

## Pages

| Path | Page |
| --- | --- |
| `/` | Landing: all projects, how I work, stack |
| `/buco-arbitrage/` | Cross-venue arbitrage platform |
| `/buco-stock/` | Equity valuation and portfolio platform |
| `/buco-forecaster/` | Football event forecasting framework |
| `/buco-stock/sample-report.html` | Anonymized example of the valuation output |

## Structure

```
index.html                    landing page
assets/site.css               shared design system for every page
assets/theme.js               light/dark toggle, applied before first paint
buco-arbitrage/index.html     case study
buco-stock/index.html         case study
buco-forecaster/index.html    case study
buco-stock/sample-report.html anonymized sample output
.nojekyll                     serve the files as-is, no Jekyll build
```

Plain static HTML with one shared stylesheet. No build step, no framework, no
dependencies. The only external request is Google Fonts.

## GitHub Pages setup

Repository → Settings → Pages → Build and deployment:

- **Source:** Deploy from a branch
- **Branch:** `main`
- **Folder:** `/ (root)`

The repository must be public for Pages to serve it on the free plan.

## What is deliberately not here

Credentials, API keys, broker and venue account data, real positions, strategy
parameters, thresholds, private endpoints, hostnames and internal addresses.
The source repositories for both projects are private.
