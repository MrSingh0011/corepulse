'use client';

import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isScrolled = scrollY > 60;
  const isDark = theme === 'dark';

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: isScrolled ? 'var(--bg-nav)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--border-subtle)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span
            className="font-bold text-lg tracking-tight"
            style={{ fontFamily: "'DM Mono', monospace", color: '#00e5ff' }}
          >
            CorePulse
          </span>
          <span
            className="text-xs px-2 py-0.5 rounded-md font-semibold"
            style={{
              background: 'rgba(0,229,255,0.12)',
              color: '#00e5ff',
              border: '1px solid rgba(0,229,255,0.2)',
            }}
          >
            dev
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-link text-sm"
              style={{ color: 'var(--text-secondary)' }}
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            style={{ background: isDark ? '#27272a' : '#d4d4d8' }}
            aria-label="Toggle theme"
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <div
              className="theme-toggle-knob"
              style={{ left: isDark ? '3px' : '21px' }}
            />
            <span
              className="absolute text-[9px] select-none"
              style={{ right: isDark ? '4px' : 'auto', left: isDark ? 'auto' : '4px', top: '4px' }}
            >
              {isDark ? '🌙' : '☀️'}
            </span>
          </button>

          {/* CTA */}
          <a
            href="mailto:rishabh.singh638660@gmail.com"
            className="hidden md:block text-sm px-4 py-2 rounded-lg border transition-all duration-200"
            style={{ borderColor: '#00e5ff40', color: '#00e5ff' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#00e5ff15')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            Get in Touch
          </a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-sm"
            style={{ color: 'var(--text-secondary)' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span style={{ fontSize: 22 }}>{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 py-4 flex flex-col gap-4"
          style={{
            background: 'var(--bg-nav)',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm"
              style={{ color: 'var(--text-secondary)' }}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
