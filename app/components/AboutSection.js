import { ARCHITECTURE_PATTERNS } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs tech-badge mb-3" style={{ color: 'var(--text-muted)' }}>WHO WE ARE</p>
          <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>About CorePulse</h2>
          <p className="leading-relaxed text-lg mb-5" style={{ color: 'var(--text-secondary)' }}>
            CorePulse specializes in building scalable real-time applications, Industry 4.0
            systems, and AI-integrated platforms. Our work spans machine monitoring systems,
            analytics dashboards, microservices, and LLM-powered chatbot solutions deployed
            in production across manufacturing enterprises.
          </p>
          <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            We bring deep expertise in cloud-ready architectures, MQTT-based communication,
            WebSocket real-time updates, Redis caching strategies, and industrial automation
            solutions at scale — helping factories become smarter and more efficient.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-xs tech-badge mb-4" style={{ color: 'var(--text-muted)' }}>OUR ARCHITECTURE PATTERNS</p>
          {ARCHITECTURE_PATTERNS.map((arch) => (
            <div
              key={arch.label}
              className="rounded-xl p-4"
              style={{
                background: 'var(--bg-surface)',
                border: `1px solid ${arch.color}25`,
              }}
            >
              <span className="text-xs tech-badge block mb-2" style={{ color: arch.color }}>
                {arch.label}
              </span>
              <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{arch.flow}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
