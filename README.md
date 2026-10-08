# CASMA

Einseitige Website (Next.js) für das Web-Design-Angebot CASMA von Lucas und Marius Hersche.

## Was es macht

- Onepager mit den Sektionen Hero, Leistungen, Projekte, Team und Kontakt; Navigation über Anker-Links, Vollbild-Menü auf Mobilgeräten.
- Leistungen: vier Pakete (Onepager, Kleine Website, Mittlere Website, Online-Shop) sowie Zusatzservices wie CMS-Integration, Blog-System, Terminbuchungssystem und SEO-Betreuung.
- Projekte: Referenzprojekt «Nova Sportcars» (2025) mit Screenshot und Link.
- Team: Rollen und Kurzbeschreibungen von Lucas und Marius Hersche.
- Kontaktformular mit Erfolgsmeldung. Das Absenden ist rein clientseitig, ein Versand ist nicht implementiert.
- Scroll- und Einblend-Animationen mit Framer Motion.

## Architektur

- Next.js mit App Router: `app/page.tsx` setzt die Sektionen aus `components/sections/` zusammen, Layout-Komponenten (Navbar, Footer) und UI-Bausteine (Button, Badge) liegen in `components/`.
- Alle Inhalte (Navigation, Leistungen, Projekte, Team, Social Links) sind zentral in `lib/data.ts` gepflegt, Animationsvarianten in `lib/animations.ts`.
- Kein Backend, keine API-Routen, keine Umgebungsvariablen.

```
lib/data.ts ──> components/sections/* ──> app/page.tsx
lib/animations.ts ──┘
```

## Tech-Stack

- Next.js 16 (App Router, Turbopack im Dev-Modus), React 19, TypeScript 5
- Tailwind CSS 3.4 mit eigenem Farbschema, `clsx` und `tailwind-merge`
- Framer Motion 12
- Schriften über `next/font/google` (Syne, Inter, JetBrains Mono), Bilder über `next/image` (AVIF/WebP)

## Lokal starten

Voraussetzung: Node.js ab 20.9 (Anforderung von Next.js 16) und npm.

```bash
npm install
npm run dev     # Entwicklungsserver auf http://localhost:3000
npm run build   # Produktions-Build
npm run start   # Produktions-Build lokal ausführen
```

## Projektkontext

Website des Web-Design-Angebots CASMA (März 2026). Gemäss `lib/data.ts` ist Lucas Hersche als Lead Developer für die technische Umsetzung von der Konzeption über das Design bis zum fertigen Produkt verantwortlich, Marius Hersche (Business & Sales) für Kundenkontakt, Anfragen und strategische Ausrichtung.
