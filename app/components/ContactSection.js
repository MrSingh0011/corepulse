import { CONTACT } from '../data/portfolioData';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28"
      style={{ borderTop: '1px solid var(--border-subtle)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(0,229,255,0.05), transparent)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs tech-badge mb-4" style={{ color: 'var(--text-muted)' }}>GET IN TOUCH</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight" style={{ color: 'var(--text-primary)' }}>
            Let's Build Your Next
            <br />
            <span className="gradient-text">Digital Solution</span>
          </h2>
          <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Interested in real-time systems, scalable backend architectures, or AI-powered
            industrial solutions? Reach out — we'd love to work with you.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { label: 'Contact', value: CONTACT.name, sub: CONTACT.role, color: '#00e5ff', icon: '👤' },
            { label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}`, color: '#a78bfa', icon: '✉️' },
            { label: 'Phone', value: CONTACT.phone, href: `tel:${CONTACT.phone}`, color: '#34d399', icon: '📞' },
            { label: 'Location', value: CONTACT.location, color: '#f59e0b', icon: '📍' },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl p-5"
              style={{
                background: 'var(--bg-surface)',
                border: `1px solid ${item.color}20`,
              }}
            >
              <span style={{ fontSize: 24 }}>{item.icon}</span>
              <p className="text-xs tech-badge mt-3 mb-1" style={{ color: item.color }}>
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-sm transition-colors break-all"
                  style={{ color: 'var(--text-secondary)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{item.value}</p>
              )}
              {item.sub && (
                <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{item.sub}</p>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${CONTACT.email}`}
            className="px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
            style={{ background: '#00e5ff', color: '#050508' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#33ecff')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#00e5ff')}
          >
            Email Us
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl text-sm transition-all duration-200"
            style={{ border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0,229,255,0.4)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            LinkedIn
          </a>
          {/* <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl text-sm transition-all duration-200"
            style={{ border: '1px solid var(--border)', color: 'var(--text-secondary)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0,229,255,0.4)';
              e.currentTarget.style.color = 'var(--text-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border)';
              e.currentTarget.style.color = 'var(--text-secondary)';
            }}
          >
            GitHub
          </a> */}
        </div>

        <p className="mt-16 text-xs tech-badge text-center" style={{ color: 'var(--text-muted)' }}>
          © 2026 CorePulse · Industry 4.0 · Real-Time Systems · GenAI
        </p>
      </div>
    </section>
  );
}
