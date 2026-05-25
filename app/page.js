'use client';

import GlobalStyles from './components/GlobalStyles';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsStrip from './components/StatsStrip';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import AchievementsSection from './components/AchievementsSection';
import ContactSection from './components/ContactSection';
import { useTheme } from './context/ThemeContext';

export default function Portfolio() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        fontFamily: "'Sora', 'DM Sans', sans-serif",
        background: theme === 'dark' ? '#050508' : '#f4f6fb',
        color: theme === 'dark' ? '#ffffff' : '#0f0f12',
        minHeight: '100vh',
        transition: 'background 0.3s ease, color 0.3s ease',
      }}
    >
      <GlobalStyles />
      <Navbar />
      <HeroSection />
      <StatsStrip />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  );
}