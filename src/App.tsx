import { profile, projects } from './site.config';

function App() {
  const initials = profile.name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');

  return (
    <main className="page-shell">
      <div className="page-glow page-glow-left" />
      <div className="page-glow page-glow-right" />

      <section className="hero card">
        <div className="hero-copy">
          <p className="eyebrow">Personal Homepage</p>
          <h1>{profile.name}</h1>
          <p className="hero-title">{profile.title}</p>
          {profile.tagline ? <p className="tagline">{profile.tagline}</p> : null}
          <p className="bio">{profile.bio}</p>

          <div className="link-row" aria-label="Profile links">
            {profile.links.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          {profile.avatarUrl ? (
            <img src={profile.avatarUrl} alt="" className="avatar-image" />
          ) : (
            <div className="avatar-fallback">{initials || 'ME'}</div>
          )}
        </div>
      </section>

      {profile.details?.length ? (
        <section className="card info-section">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>Personal information</h2>
          </div>

          <dl className="details-grid">
            {profile.details.map((detail) => (
              <div key={detail.label} className="detail-item">
                <dt>{detail.label}</dt>
                <dd>{detail.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      <section className="card projects-section">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2>Deployed work</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <a
              key={project.name}
              className="project-card"
              href={project.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-topline">
                <h3>{project.name}</h3>
                {project.status ? <span>{project.status}</span> : null}
              </div>

              <p>{project.description}</p>

              {project.tags?.length ? (
                <ul className="tag-list" aria-label={`${project.name} tags`}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              ) : null}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
