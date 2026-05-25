export default function ProjectCard({ project }) {
  const { title, duration, tag, icon, description, tech, color, accent } = project;

  return (
    <div
      className="rounded-2xl overflow-hidden card-hover flex flex-col"
      style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border)',
      }}
    >
      <div
        className={`h-40 bg-gradient-to-br ${color} flex items-center justify-center relative`}
        style={{ borderBottom: '1px solid var(--border)' }}
      >
        <span style={{ fontSize: 52 }}>{icon}</span>
        <span
          className="absolute top-4 right-4 text-xs px-2.5 py-1 rounded-lg tech-badge"
          style={{
            background: `${accent}18`,
            border: `1px solid ${accent}35`,
            color: accent,
          }}
        >
          {tag}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-xs tech-badge mb-2" style={{ color: accent }}>{duration}</p>
        <h3 className="text-lg font-semibold mb-3 leading-snug" style={{ color: 'var(--text-primary)' }}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--text-muted)' }}>
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {tech.map((t) => (
            <span
              key={t}
              className="tech-badge text-xs px-2 py-1 rounded-md"
              style={{
                background: 'var(--bg-surface-2)',
                border: '1px solid var(--border)',
                color: 'var(--text-muted)',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
