'use client';

import { SOCIAL_LINKS } from '../data/portfolioData';
import LiveDashboardCard from './LiveDashboardCard';

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center dot-grid overflow-hidden"
    >
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full mb-6 tech-badge"
              style={{
                background: 'rgba(0,229,255,0.08)',
                border: '1px solid rgba(0,229,255,0.2)',
                color: '#00e5ff',
              }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#00e5ff' }} />
              Industry 4.0 · AI Solutions · Real-Time Systems
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-none tracking-tight mb-4"
              style={{ color: 'var(--text-primary)' }}>
              CorePulse
              <br />
              <span className="gradient-text">Solutions</span>
            </h1>

            <p
              className="text-xl lg:text-2xl font-light mb-6 tech-badge"
              style={{ color: 'var(--text-secondary)' }}
            >
              Real-Time. AI-Powered. Scalable.
            </p>

            <p className="text-base leading-relaxed max-w-xl mb-10" style={{ color: 'var(--text-muted)' }}>
              We build scalable Industry 4.0 platforms, AI-powered monitoring systems, and
              enterprise-grade real-time dashboards. From MQTT pipelines to LLM-integrated
              analytics — we bridge hardware and intelligence.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                style={{ background: '#00e5ff', color: '#050508' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#33ecff')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#00e5ff')}
              >
                View Our Work →
              </a>
              <a
                href="#contact"
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
                Contact Us
              </a>
            </div>

            <div className="flex items-center gap-6 mt-8">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs transition-colors duration-200 tech-badge"
                  style={{ color: 'var(--text-muted)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <LiveDashboardCard />
        </div>
      </div>
    </section>
  );
}
