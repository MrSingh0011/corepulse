import { STATS } from '../data/portfolioData';

export default function StatsStrip() {
  return (
    <section
      style={{
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        background: 'var(--bg-surface)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-4xl lg:text-5xl font-extrabold gradient-text">
                {item.value}
              </div>
              <div className="text-sm mt-1" style={{ color: 'var(--text-muted)' }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
