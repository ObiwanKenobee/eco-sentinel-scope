
import { ActivitySquare, AlertTriangle, Globe, Shield } from 'lucide-react';

const stats = [
  {
    label: "Active Cases",
    value: "247",
    icon: ActivitySquare,
    trend: "+12%",
  },
  {
    label: "Global Hotspots",
    value: "89",
    icon: Globe,
    trend: "+5%",
  },
  {
    label: "Alerts Today",
    value: "23",
    icon: AlertTriangle,
    trend: "-8%",
  },
  {
    label: "Species Protected",
    value: "156",
    icon: Shield,
    trend: "+3%",
  },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.label} className="stat-card group hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-between">
            <stat.icon className="w-8 h-8 text-primary opacity-80" />
            <span className={`text-sm font-medium ${
              stat.trend.startsWith('+') ? 'text-success' : 'text-danger'
            }`}>
              {stat.trend}
            </span>
          </div>
          <div className="stat-value">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
