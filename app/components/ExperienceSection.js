import { SERVICES } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section
      id="services"
      className="py-24"
      style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs tech-badge mb-3" style={{ color: 'var(--text-muted)' }}>WHAT WE DO</p>
        <h2 className="text-4xl font-bold mb-12" style={{ color: 'var(--text-primary)' }}>Our Services</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl p-6 card-hover"
              style={{
                background: 'var(--bg-surface)',
                border: `1px solid ${service.color}20`,
              }}
            >
              <span style={{ fontSize: 36 }}>{service.icon}</span>
              <h3 className="text-base font-semibold mt-4 mb-2" style={{ color: service.color }}>
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
