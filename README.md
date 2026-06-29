# AI Adoption Portfolio

A professional portfolio website for the **AI Adoption Specialist** role at GreenTomato.

**Live purpose:** Demonstrate hands-on experience designing, deploying, and iterating on AI systems that people actually adopt — not just technical capability, but behavioral adoption expertise.

---

## Portfolio Structure

```
ai-adoption-portfolio/
├── app/
│   ├── layout.tsx                        # Root layout: nav + footer wrapper
│   ├── page.tsx                          # Home — hero + featured projects
│   ├── framework/
│   │   └── page.tsx                      # Six-stage AI Adoption Framework
│   ├── showcase/
│   │   └── page.tsx                      # AI Workflow Showcase (3 workflow cards)
│   ├── case-studies/
│   │   ├── inner-order-os/page.tsx       # Inner Order OS case study
│   │   ├── bridge-the-gap/page.tsx       # Bridge the Gap case study
│   │   └── knowledge-capital/page.tsx    # Knowledge Capital OS case study
│   ├── claude-code/
│   │   └── page.tsx                      # Claude Code Insights Report
│   ├── evidence/
│   │   └── page.tsx                      # GitHub / Technical Evidence
│   ├── lessons/
│   │   └── page.tsx                      # Lessons Learned table
│   └── why-greentomato/
│       └── page.tsx                      # Why GreenTomato page
├── components/
│   ├── Navigation.tsx                    # Sticky nav with case studies dropdown
│   ├── Footer.tsx                        # Footer with GitHub/LinkedIn/email links
│   ├── HeroSection.tsx                   # Full-width hero with tags
│   ├── SectionHeader.tsx                 # Reusable section title/subtitle/description
│   ├── WorkflowCard.tsx                  # Workflow diagram card with key idea
│   ├── ProjectCard.tsx                   # Project card with tags + links
│   ├── SkillTag.tsx                      # Pill tag component
│   ├── CaseStudySection.tsx              # Single case study section block
│   ├── EvidencePlaceholder.tsx           # Dashed placeholder for screenshots
│   └── LessonTable.tsx                   # Challenge / Learned table
├── data/
│   └── portfolio.ts                      # All content data (typed TypeScript)
├── tailwind.config.ts                    # Extended with custom color tokens
└── app/globals.css                       # CSS custom properties (warm palette)
```

---

## Color Palette

| Token | Value | Use |
|-------|-------|-----|
| `--bg-primary` | `#FAF8F4` | Page and card backgrounds |
| `--bg-secondary` | `#F3EFE8` | Alternate sections, callout boxes |
| `--text-primary` | `#1C1917` | Headings, key content |
| `--text-secondary` | `#6B6460` | Body text, descriptions |
| `--accent-blue` | `#4A6FA5` | Links, highlights, stage numbers |
| `--accent-clay` | `#8B4A3A` | CTAs, primary callouts |
| `--border` | `#E8E0D5` | Card borders, dividers |

---

## Local Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Vercel Deployment

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and create a New Project
3. Import from GitHub — select this repository
4. Vercel auto-detects Next.js — no config needed
5. Click Deploy

Or deploy via CLI:
```bash
npm install -g vercel
vercel
```

---

## Placeholder Checklist

Before sharing this portfolio publicly, replace all placeholder values:

### Personal links (components/Footer.tsx)
- [ ] GitHub URL: replace `https://github.com` with your real GitHub profile
- [ ] LinkedIn URL: replace `https://linkedin.com` with your real LinkedIn URL
- [ ] Email: replace `your@email.com` with your real email

### Contact link (app/why-greentomato/page.tsx)
- [ ] Email in "Get in Touch" button: replace `your@email.com`

### Project links (data/portfolio.ts)
- [ ] Inner Order OS `githubUrl`: replace `"#"` with real GitHub repo URL
- [ ] Inner Order OS `demoUrl`: replace `"#"` with real deployed URL
- [ ] Bridge the Gap `githubUrl`: replace `"#"` with real GitHub repo URL
- [ ] Bridge the Gap `demoUrl`: replace `"#"` with real deployed URL
- [ ] Knowledge Capital OS `githubUrl`: replace `"#"` or remove
- [ ] Digital Transformation Case Study `githubUrl`: replace `"#"` or remove
- [ ] Solo Company Radar `githubUrl`: replace `"#"` or remove
- [ ] KCAS `githubUrl`: replace `"#"` or remove

### Case study page links
- [ ] `app/case-studies/inner-order-os/page.tsx` — GitHub and Demo `href` values
- [ ] `app/case-studies/bridge-the-gap/page.tsx` — GitHub `href`
- [ ] `app/case-studies/knowledge-capital/page.tsx` — GitHub `href`

### Evidence placeholders (app/claude-code/page.tsx)
- [ ] Replace each `EvidencePlaceholder` with real screenshots from Claude Code sessions

---

## Customization Guide

### Adding a new project to the Evidence page
Add a new entry to `evidenceProjects` in `data/portfolio.ts`. The Evidence page renders all entries automatically.

### Adding a new case study
1. Create `app/case-studies/your-project/page.tsx`
2. Add a link to `caseStudyLinks` in `components/Navigation.tsx`

### Changing colors
All colors are CSS custom properties in `app/globals.css`. Tailwind picks them up via `tailwind.config.ts` automatically.

### Updating content
All portfolio content lives in `data/portfolio.ts`. Pages import from there — update the data file and all pages update.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + CSS custom properties
- **Language:** TypeScript (strict)
- **Deployment:** Vercel (recommended)
