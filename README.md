# Engineering portfolio

Anonymized public case studies for two production systems, served as a static
site by GitHub Pages.

**Live site:** https://geffikk.github.io/engineering-portfolio/

## Pages

| Path | Page |
| --- | --- |
| `/` | Landing: both projects, how I work, stack |
| `/buco-arbitrage/` | Cross-venue arbitrage platform |
| `/buco-stock/` | Equity valuation and portfolio platform |
| `/buco-stock/sample-report.html` | Anonymized example of the valuation output |

## Structure

```
index.html                    landing page
assets/site.css               shared design system for every page
buco-arbitrage/index.html     case study
buco-stock/index.html         case study
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
