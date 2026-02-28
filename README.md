# TEC Automation Solutions

Company website for **TEC Automation Solutions** — a provider of industrial automation products and services headquartered in Chennai, India, with a branch office in Berlin, Germany.

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero slideshow, company overview, solution cards, coupling showcase, video section, and customer logos (Daimler, TIVOLT, ITW) |
| About | `/about` | Company background, team, and mission |
| Solutions | `/solutions` | Detailed solution offerings — EOAT, Fluid Couplings, Robotics Integration, Custom Automation, Technical Support |
| Products | `/products` | Tabbed product catalog — Hydraulic Couplings, Robotic Grippers, EOAT Solutions |
| Catalog | `/catalog` | Downloadable PDF catalogs for EOAT, Grippers, and Couplings |
| Contact | `/contact` | Contact form and company information |

## Tech Stack

- **React 19** with Create React App
- **React Router v6** — client-side routing
- **React Bootstrap** — UI components
- **Styled Components** — custom styling
- **Framer Motion** — animations
- **React Icons** — icon library
- **Axios** — HTTP client

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
```

Output goes to the `build/` directory.

## Project Structure

```
src/
├── assets/
│   ├── images/         # Product photos, customer logos, slideshow images
│   ├── logos/           # Company logo
│   ├── pdf/             # Downloadable product catalogs
│   └── videos/          # Demo videos
├── components/
│   ├── layout/
│   │   ├── Header.js    # Navigation bar
│   │   └── Footer.js    # Site footer
│   └── pages/
│       ├── Home.js      # Landing page
│       ├── About.js     # About page
│       ├── Solutions.js # Solutions page
│       ├── Products.js  # Products page
│       ├── Catalog.js   # Catalog downloads page
│       └── Contact.js   # Contact page
├── App.js               # Root component with routing
└── index.js             # Entry point
```