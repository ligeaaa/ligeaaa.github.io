import { profile, projects } from './site.config.js';

const root = document.querySelector('#root');

if (!root) {
  throw new Error('Root container not found.');
}

const createLinkButtons = (links) =>
  links
    .map(
      (link) => `
        <a class="pill-link" href="${link.url}" target="_blank" rel="noreferrer">
          ${link.label}
        </a>
      `,
    )
    .join('');

const createDetailCards = (details = []) =>
  details
    .map(
      (detail) => `
        <div class="detail-item">
          <dt>${detail.label}</dt>
          <dd>${detail.value}</dd>
        </div>
      `,
    )
    .join('');

const createProjectCards = (items) =>
  items
    .map(
      (project) => `
        <a class="project-card" href="${project.url}" target="_blank" rel="noreferrer">
          <div class="project-topline">
            <h3>${project.name}</h3>
            ${project.status ? `<span>${project.status}</span>` : ''}
          </div>
          <p>${project.description}</p>
          ${
            project.tags?.length
              ? `
                <ul class="tag-list" aria-label="${project.name} tags">
                  ${project.tags.map((tag) => `<li>${tag}</li>`).join('')}
                </ul>
              `
              : ''
          }
        </a>
      `,
    )
    .join('');

const initials = profile.name
  .split(/\s+/)
  .filter(Boolean)
  .slice(0, 2)
  .map((part) => part[0].toUpperCase())
  .join('');

root.innerHTML = `
  <main class="page-shell">
    <div class="page-glow page-glow-left"></div>
    <div class="page-glow page-glow-right"></div>

    <section class="hero card">
      <div class="hero-copy">
        <p class="eyebrow">Personal Homepage</p>
        <h1>${profile.name}</h1>
        <p class="hero-title">${profile.title}</p>
        ${profile.tagline ? `<p class="tagline">${profile.tagline}</p>` : ''}
        <p class="bio">${profile.bio}</p>
        <div class="link-row" aria-label="Profile links">
          ${createLinkButtons(profile.links)}
        </div>
      </div>

      <div class="hero-visual" aria-hidden="true">
        ${
          profile.avatarUrl
            ? `<img src="${profile.avatarUrl}" alt="" class="avatar-image" />`
            : `<div class="avatar-fallback">${initials || 'ME'}</div>`
        }
      </div>
    </section>

    ${
      profile.details?.length
        ? `
          <section class="card info-section">
            <div class="section-heading">
              <p class="eyebrow">About</p>
              <h2>Personal information</h2>
            </div>
            <dl class="details-grid">
              ${createDetailCards(profile.details)}
            </dl>
          </section>
        `
        : ''
    }

    <section class="card projects-section">
      <div class="section-heading">
        <p class="eyebrow">Projects</p>
        <h2>Deployed work</h2>
      </div>
      <div class="projects-grid">
        ${createProjectCards(projects)}
      </div>
    </section>
  </main>
`;
