# Personal Homepage

This repository is a lightweight personal homepage built with plain `HTML + CSS + JavaScript`, so it works directly on GitHub Pages without a build step.

# Stone!
![Stone Badge](https://stone.professorlee.work/api/stone/ligeaaa/ligeaaa.github.io)

## Edit your personal information

All personal content and project links live in [`site.config.js`](./site.config.js).

You usually only need to edit the `profile` object and the `projects` array:

```js
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
    tags: ['Frontend', 'Tooling'],
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

## Local preview

Because this is a static site, you can preview it by opening `index.html` in a browser, or by using a simple local server if you prefer.

For example:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages

This repository is already named `ligeaaa.github.io`, so GitHub Pages can serve it as your personal site root.

### Recommended GitHub setup

1. Push this repository to the `main` branch on GitHub.
2. Open the repository on GitHub.
3. Go to `Settings` -> `Pages`.
4. In `Build and deployment`, choose `GitHub Actions` as the source.

### Deployment flow

- The workflow file is [`/.github/workflows/deploy.yml`](./.github/workflows/deploy.yml).
- Every push to `main` deploys the static site files directly.
- After the workflow succeeds, your homepage should be available at:

```text
https://ligeaaa.github.io/
```

## Project structure

- `index.html`: page shell
- `main.js`: renders the homepage from config data
- `styles.css`: all page styling
- `site.config.js`: all editable personal content and project links
- `.github/workflows/deploy.yml`: automatic GitHub Pages deployment
