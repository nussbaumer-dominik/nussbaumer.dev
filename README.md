# Dominik Nussbaumer personal portfolio website

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                           |
|:--------------------|:-------------------------------------------------|
| `yarn install`      | Installs dependencies                            |
| `yarn dev`          | Starts local dev server at `localhost:4321`      |
| `yarn build`        | Build your production site to `./dist/`          |
| `yarn preview`      | Preview your build locally, before deploying     |
| `yarn astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `yarn astro --help` | Get help using the Astro CLI                     |

The project is deployed to Cloudflare Pages, which automatically builds and deploys the site when changes are pushed to
the `main` branch on GitHub. The production build command is `npm run build`, which generates the static files in the
`dist/` directory that are then served by Cloudflare Pages.
