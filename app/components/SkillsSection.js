import { SKILLS, SKILL_COLORS } from '../data/portfolioData';

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24"
      style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs tech-badge mb-3" style={{ color: 'var(--text-muted)' }}>OUR TECH STACK</p>
        <h2 className="text-4xl font-bold mb-12" style={{ color: 'var(--text-primary)' }}>Technologies We Use</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {Object.entries(SKILLS).map(([category, items]) => {
            const color = SKILL_COLORS[category];
            return (
              <div
                key={category}
                className="rounded-2xl p-5 card-hover"
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border)',
                }}
              >
                <div className="text-xs font-bold tech-badge mb-4" style={{ color }}>
                  {category.toUpperCase()}
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="skill-pill text-xs px-2.5 py-1 rounded-lg"
                      style={{
                        background: `${color}10`,
                        border: `1px solid ${color}25`,
                        color,
                        fontFamily: "'DM Mono', monospace",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
