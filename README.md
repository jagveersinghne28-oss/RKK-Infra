# Dr. Rakesh Kumar Khali — Portfolio

A four-page React + SCSS site built from the Figma design ("Tectonic Editorial System").

| Route        | Page                              |
| ------------ | --------------------------------- |
| `/`          | Home                              |
| `/journey`   | The Journey & Career Trajectory   |
| `/projects`  | Projects Beneath the Surface      |
| `/expertise` | Technical Expertise & Research    |

## Run

```bash
npm install
npm run dev      # http://localhost:8085
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Structure

```
src/
  components/   Layout (header + footer), Icon, SectionHead
  pages/        Home, Journey, Projects, Expertise
  styles/       _tokens (colors, type, shadows) · _base · _components · one partial per page
public/images/  Photos pulled from the Figma file
```

## Design tokens

- Primary `#0D211D` · Secondary `#18201E` · Tertiary (accent) `#B96F45`/`#BD7348` · Neutral `#D8C7AA`
- Surfaces: `#FFF8F2` → `#FFF2DF` → `#FEECCD` → `#F8E6C8`
- Headline **Hanken Grotesk**, body **Work Sans**, labels **JetBrains Mono**
- Design width is 1280px (1120px content, 80px gutters); layouts collapse at 1100 / 820 / 560px.

## Interactive bits

- Projects: domain filter (All / Hydro / Railway / Caverns & Shafts)
- Expertise: research-paper discipline filter
- Journey: sticky timeline anchors with scroll-spy
- Mobile navigation menu

## Figma credentials

`.env` holds `VITE_FIGMA_TOKEN` and `VITE_FIGMA_FILE_KEY`. They are only needed if you want to re-pull images from
Figma; the site itself doesn't read them. `.env` is git-ignored — keep it that way.
