# Belmont
# BELMONT BROKERAGE PORTAL

A comprehensive real estate ecosystem featuring high-performance tools for agents, a public marketplace, and AI-driven compliance auditing.

## Key Features

- **Agent CRM (Book of Business)**: Neobrutalist design with high-contrast legibility and non-blocking AI "System Synthesis" for interaction auditing.
- **AI CMA Tool**: Real-time Comparative Market Analysis using Google Search grounding for the most recent sold comps.
- **Classifieds Marketplace**: Detailed filtering for residential and commercial properties with Fair Housing compliance monitoring.
- **Compliance Audit**: Multimodal AI engine that scans text, files, and live URLs for legal violations.
- **Specialist Library**: Interactive training modules and interactive field notes for professional development.
- **Global Ticker**: Live market alerts and profit-sharing updates synced across the network.

## Tech Stack

- **React 19**: Modern UI development.
- **Tailwind CSS**: High-contrast, monochromatic styling.
- **Gemini 2.0/3.0**: Advanced reasoning and multimodal analysis via `@google/genai`.
- **Lucide React**: Vector-based professional iconography.

## Deployment

This project is structured as a **No-Build React Application**. It uses an ESM import map to load dependencies directly in the browser, making it perfect for standard web hosting (like GoDaddy, SiteGround, or Bluehost) without needing a complex CI/CD pipeline.

1. Upload the contents of this repository to your `public_html` or root folder.
2. Ensure your server is configured to serve `index.html`.
3. The site will resolve all dependencies via `esm.sh`.

## License

© 2025 Belmont Brokerage Inc. All rights reserved. 
DRE Corporate License #02065145.
