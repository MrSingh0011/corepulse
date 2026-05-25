export default function LiveDashboardCard() {
  const metrics = [
    { label: 'Efficiency', value: '98%', color: '#00e5ff' },
    { label: 'Uptime', value: '24/7', color: '#a78bfa' },
    { label: 'Alerts', value: '0', color: '#34d399' },
  ];

  const chartBars = [65, 72, 68, 85, 79, 91, 88];

  return (
    <div className="relative">
      <div
        className="rounded-2xl p-6 glow-cyan"
        style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs tech-badge mb-1" style={{ color: 'var(--text-muted)' }}>LIVE MONITOR</p>
            <h3 className="font-semibold text-sm" style={{ color: 'var(--text-primary)' }}>Production Line #12</h3>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#34d399' }} />
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Live</span>
          </div>
        </div>

        {/* Machine Status */}
        <div
          className="rounded-xl p-4 mb-4"
          style={{ background: 'rgba(52,211,153,0.06)', border: '1px solid rgba(52,211,153,0.15)' }}
        >
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>Machine Status</span>
            <span className="text-xs font-medium" style={{ color: '#34d399' }}>● Running</span>
          </div>
          <div className="h-1.5 rounded-full" style={{ background: 'var(--bg-surface-2)' }}>
            <div
              className="h-full rounded-full"
              style={{ width: '85%', background: 'linear-gradient(90deg, #34d399, #00e5ff)' }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>OEE</span>
            <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>85%</span>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-xl p-3 text-center"
              style={{ background: 'var(--bg-surface-2)', border: '1px solid var(--border)' }}
            >
              <div className="text-xl font-bold" style={{ color: m.color }}>{m.value}</div>
              <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>{m.label}</div>
            </div>
          ))}
        </div>

        {/* AI Insight */}
        <div
          className="rounded-xl p-4"
          style={{ background: 'rgba(167,139,250,0.06)', border: '1px solid rgba(167,139,250,0.15)' }}
        >
          <span className="text-xs tech-badge block mb-2" style={{ color: '#a78bfa' }}>AI INSIGHT</span>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Predictive maintenance reduced Machine #12 downtime by 18% this week. Next scheduled check: 48h.
          </p>
        </div>

        {/* Mini Bar Chart */}
        <div className="mt-4">
          <div className="flex justify-between mb-2">
            <span className="text-xs" style={{ color: 'var(--text-muted)' }}>Production (last 7 days)</span>
            <span className="text-xs" style={{ color: '#34d399' }}>↑ 12%</span>
          </div>
          <div className="flex items-end gap-1 h-12">
            {chartBars.map((v, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${v}%`,
                  background:
                    i === chartBars.length - 1
                      ? 'linear-gradient(180deg, #00e5ff, #00b8cc)'
                      : 'var(--bg-surface-2)',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Badge */}
      <div
        className="absolute -top-4 -right-4 px-3 py-1.5 rounded-xl text-xs font-semibold tech-badge"
        style={{ background: '#a78bfa', color: '#050508' }}
      >
        CorePulse
      </div>
    </div>
  );
}
