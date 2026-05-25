export default function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700;800&family=DM+Mono:wght@400;500&display=swap');

      html { scroll-behavior: smooth; }

      .glow-cyan   { box-shadow: 0 0 40px rgba(0,229,255,0.12); }
      .glow-purple { box-shadow: 0 0 40px rgba(167,139,250,0.12); }

      .card-hover {
        transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
      }
      .card-hover:hover {
        transform: translateY(-4px);
        box-shadow: 0 20px 60px var(--card-shadow);
      }

      .skill-pill {
        transition: background 0.2s, color 0.2s, transform 0.2s;
      }
      .skill-pill:hover { transform: scale(1.05); }

      .nav-link {
        position: relative;
        transition: color 0.2s;
      }
      .nav-link::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 0;
        height: 1.5px;
        background: #00e5ff;
        transition: width 0.25s ease;
      }
      .nav-link:hover::after { width: 100%; }
      .nav-link:hover { color: #00e5ff; }

      .gradient-text {
        background: linear-gradient(135deg, #00e5ff 0%, #a78bfa 50%, #f472b6 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }

      .tech-badge {
        font-family: 'DM Mono', monospace;
        font-size: 11px;
        letter-spacing: 0.02em;
      }

      .dot-grid {
        background-image: radial-gradient(circle, var(--dot-grid-color) 1px, transparent 1px);
        background-size: 28px 28px;
      }

      /* Theme toggle button */
      .theme-toggle {
        width: 40px;
        height: 22px;
        border-radius: 11px;
        position: relative;
        cursor: pointer;
        transition: background 0.3s ease;
        border: none;
        outline: none;
        flex-shrink: 0;
      }
      .theme-toggle-knob {
        position: absolute;
        top: 3px;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #fff;
        transition: left 0.3s ease;
      }

      ::-webkit-scrollbar { width: 4px; }
      ::-webkit-scrollbar-track { background: var(--scrollbar-track); }
      ::-webkit-scrollbar-thumb { background: var(--scrollbar-thumb); border-radius: 2px; }
      ::-webkit-scrollbar-thumb:hover { background: #00e5ff30; }
    `}</style>
  );
}
