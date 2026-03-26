# Personal Homepage

This repository is a lightweight personal homepage built with `React + Vite` and designed for deployment to `GitHub Pages` through the `ligeaaa.github.io` user-site repository.

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Create a production build locally when needed:

```bash
npm run build
```

## Edit your personal information

All profile content and project links live in [`src/site.config.ts`](./src/site.config.ts).

You usually only need to edit two exports:

```ts
export const profile = {
  name: 'Your Name',
  title: 'Your Role',
  tagline: 'A short one-line introduction',
  bio: 'A longer paragraph about you.',
  avatarUrl: 'https://...',
  links: [
    { label: 'GitHub', url: 'https://github.com/your-name' },
    { label: 'Email', url: 'mailto:you@example.com' },
  ],
  details: [
    { label: 'Location', value: 'Your city' },
    { label: 'Focus', value: 'Your main interests' },
  ],
};

export const projects = [
  {
    name: 'Project Name',
    description: 'What the project does.',
    url: 'https://example.com',
    tags: ['React', 'Tooling'],
    status: 'Live',
  },
];
```

### Config field guide

- `profile.name`: your display name
- `profile.title`: your main role or headline
- `profile.tagline`: optional short sentence below the title
- `profile.bio`: your introduction paragraph
- `profile.avatarUrl`: optional avatar image URL; if omitted, the page shows your initials instead
- `profile.links`: button-style links such as GitHub, email, blog, X, LinkedIn
- `profile.details`: optional structured items like location, focus, company, blog, skills
- `projects`: the deployed project list shown as clickable cards
- `projects[].name`: project title
- `projects[].description`: short project summary
- `projects[].url`: destination link when the card is clicked
- `projects[].tags`: optional labels
- `projects[].status`: optional badge such as `Live`, `Beta`, or `Archived`

### Add or remove content

- Add a new project by appending a new object to the `projects` array.
- Remove a project by deleting its object from the `projects` array.
- Remove optional profile blocks by deleting `tagline`, `avatarUrl`, `details`, or any link/detail entries you do not need.

## Deploy to GitHub Pages

This repository is already named `ligeaaa.github.io`, so GitHub Pages can serve it as your personal site root.

### One-time GitHub setup

1. Push this repository to the `main` branch on GitHub.
2. Open the repository on GitHub.
3. Go to `Settings` -> `Pages`.
4. In `Build and deployment`, choose `GitHub Actions` as the source.

### Deployment flow

- The workflow file is [`/.github/workflows/deploy.yml`](./.github/workflows/deploy.yml).
- Every push to `main` automatically installs dependencies, builds the Vite app, and deploys the contents of `dist`.
- After the workflow succeeds, your homepage should be available at:

```text
https://ligeaaa.github.io/
```

## Project structure

- `src/site.config.ts`: all editable personal content and project links
- `src/App.tsx`: page layout and rendering
- `src/styles.css`: all page styling
- `.github/workflows/deploy.yml`: automatic GitHub Pages deployment
