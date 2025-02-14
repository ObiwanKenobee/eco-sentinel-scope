
import { AlertCircle, CheckCircle2, Clock } from 'lucide-react';

const activities = [
  {
    type: "alert",
    title: "New trafficking route detected",
    description: "Suspicious activity observed in Southeast Asia",
    time: "2 hours ago",
    icon: AlertCircle,
    status: "warning",
  },
  {
    type: "success",
    title: "Operation successful",
    description: "15 endangered species rescued in Operation Azure",
    time: "5 hours ago",
    icon: CheckCircle2,
    status: "success",
  },
  {
    type: "info",
    title: "Pattern analysis complete",
    description: "New insights available for African region",
    time: "8 hours ago",
    icon: Clock,
    status: "info",
  },
];

const RecentActivity = () => {
  return (
    <div className="glass-card p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 p-4 rounded-lg bg-accent/50 hover:bg-accent/70 transition-colors duration-300"
          >
            <activity.icon
              className={`w-5 h-5 mt-1 ${
                activity.status === "warning"
                  ? "text-warning"
                  : activity.status === "success"
                  ? "text-success"
                  : "text-primary"
              }`}
            />
            <div className="flex-1">
              <h3 className="font-medium">{activity.title}</h3>
              <p className="text-sm text-muted-foreground">{activity.description}</p>
              <span className="text-xs text-muted-foreground mt-1 block">
                {activity.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
