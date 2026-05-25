export const NAV_LINKS = ['About', 'Services', 'Projects', 'Contact'];

export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rishabh750/' },
//   { label: 'GitHub', href: 'https://github.com/rishabh750' },
  { label: 'Email', href: 'mailto:rishabh.singh638660@gmail.com' },
];

export const STATS = [
  { value: '15+', label: 'Manufacturing Plants', icon: '🏭' },
  { value: '300+', label: 'Machines Connected', icon: '⚡' },
  { value: '50%', label: 'Productivity Increase', icon: '📈' },
  { value: '3+', label: 'Years in Industry 4.0', icon: '🚀' },
];

export const SKILLS = {
  Frontend: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'MUI'],
  Backend: ['Node.js', 'Express.js', 'Socket.io', 'MQTT', 'Microservices'],
  Database: ['MongoDB', 'Redis', 'MySQL', 'AWS', 'Docker'],
  Testing: ['Playwright', 'Cypress', 'Jest', 'K6'],
  GenAI: ['OpenAI APIs', 'LLM Integration', 'Prompt Engineering', 'Chatbot Dev'],
};

export const SKILL_COLORS = {
  Frontend: '#00e5ff',
  Backend: '#a78bfa',
  Database: '#34d399',
  Testing: '#f59e0b',
  GenAI: '#f472b6',
};

export const PROJECTS = [
  {
    title: 'Process Traceability Management',
    duration: 'Feb 2024 – Present',
    tag: 'Industry 4.0',
    icon: '⚙️',
    description:
      'Real-time Industry 4.0 solution with AI-powered chatbot, analytics dashboards, downtime tracking, and traceability deployed across multiple production lines.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Redis', 'Socket.io', 'MQTT', 'OpenAI'],
    color: 'from-cyan-500/20 to-blue-600/20',
    accent: '#00e5ff',
  },
  {
    title: 'FactorySync – Machine Monitoring',
    duration: 'Aug 2023 – Feb 2024',
    tag: 'Scale: 300+ Machines',
    icon: '🏭',
    description:
      'Configurable monitoring systems deployed across 15+ plants and 300+ machines — production tracking, real-time alerts, and live dashboards.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Kafka', 'Redis', 'Socket.io'],
    color: 'from-purple-500/20 to-violet-600/20',
    accent: '#a78bfa',
  },
  {
    title: 'CNC Monitoring Solution',
    duration: 'Nov 2022 – Aug 2023',
    tag: '+50% Productivity',
    icon: '🔧',
    description:
      'Implemented downtime tracking systems improving productivity by 50%, deployed across 17 plants and 150+ CNC machines.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'MQTT'],
    color: 'from-emerald-500/20 to-teal-600/20',
    accent: '#34d399',
  },
];

export const SERVICES = [
  {
    icon: '🏭',
    title: 'Industry 4.0 Platforms',
    desc: 'End-to-end smart factory solutions — machine monitoring, OEE tracking, downtime analytics, and production traceability at scale.',
    color: '#00e5ff',
  },
  {
    icon: '⚡',
    title: 'Real-Time Systems',
    desc: 'MQTT pipelines, WebSocket dashboards, and event-driven microservices for live industrial data streaming and alerting.',
    color: '#a78bfa',
  },
  {
    icon: '🤖',
    title: 'AI & GenAI Integration',
    desc: 'LLM-powered chatbots, predictive analytics, and OpenAI-integrated insight engines built into your existing workflows.',
    color: '#f472b6',
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    desc: 'AWS-hosted, Docker-containerized, production-grade deployments with CI/CD pipelines and scalable infrastructure.',
    color: '#34d399',
  },
  {
    icon: '🖥️',
    title: 'Enterprise Web Apps',
    desc: 'Scalable MERN stack SPAs and dashboards tailored for enterprise operations, analytics, and process management.',
    color: '#f59e0b',
  },
  {
    icon: '🔗',
    title: 'System Integration',
    desc: 'Seamless integration of PLCs, SCADA systems, ERP platforms, and third-party APIs into unified digital ecosystems.',
    color: '#818cf8',
  },
];

export const ACHIEVEMENTS = [
  {
    icon: '🏆',
    title: 'Team of the Quarter',
    desc: 'Awarded for high-impact delivery on key Industry 4.0 deployments across multiple manufacturing clients.',
  },
  {
    icon: '🌐',
    title: '15+ Plants Deployed',
    desc: 'Live industrial monitoring systems running across multiple manufacturing plants globally.',
  },
  {
    icon: '🤖',
    title: 'AI-Integrated Systems',
    desc: 'Production LLM-powered real-time monitoring platforms shipped and running at enterprise scale.',
  },
];

export const ARCHITECTURE_PATTERNS = [
  { label: 'IoT Pipeline', flow: 'Machine → MQTT → Node.js → Redis → Socket.io → React', color: '#00e5ff' },
  { label: 'AI Layer', flow: 'OpenAI APIs → Context Engine → Prompt Opt. → AI Insights', color: '#a78bfa' },
  { label: 'Event Stream', flow: 'Kafka → Event Streaming → Microservices → Monitoring', color: '#34d399' },
];

export const CONTACT = {
  name: 'Rishabh Singh',
  role: 'Founder & Full Stack Engineer',
  email: 'rishabh.singh638660@gmail.com',
  phone: '+91-6386607947',
  location: 'Saket, New Delhi, India',
  linkedin: 'https://www.linkedin.com/in/rishabh750/',
//   github: 'https://github.com/rishabh750',
};
