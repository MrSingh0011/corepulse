import { ACHIEVEMENTS } from '../data/portfolioData';

export default function AchievementsSection() {
  return (
    <section
      className="max-w-7xl mx-auto px-6 py-24"
      style={{ borderTop: '1px solid var(--border-subtle)' }}
    >
      <p className="text-xs tech-badge mb-3" style={{ color: 'var(--text-muted)' }}>RECOGNITION</p>
      <h2 className="text-4xl font-bold mb-12" style={{ color: 'var(--text-primary)' }}>Achievements</h2>

      <div className="grid md:grid-cols-3 gap-5">
        {ACHIEVEMENTS.map((achievement) => (
          <div
            key={achievement.title}
            className="rounded-2xl p-6 card-hover"
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
            }}
          >
            <span style={{ fontSize: 40 }}>{achievement.icon}</span>
            <h3 className="font-semibold text-base mt-4 mb-2" style={{ color: 'var(--text-primary)' }}>
              {achievement.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              {achievement.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
