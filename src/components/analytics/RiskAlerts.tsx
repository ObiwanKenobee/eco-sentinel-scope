
import { AlertTriangle, Plus, Edit2, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Alert {
  id: number;
  title: string;
  location: string;
  severity: string;
}

interface RiskAlertsProps {
  alerts: Alert[];
  onDeleteAlert: (id: number) => void;
}

const RiskAlerts = ({ alerts, onDeleteAlert }: RiskAlertsProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Risk Alerts</CardTitle>
            <CardDescription>Real-time notifications and warnings</CardDescription>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Create Alert
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-center gap-4 p-4 bg-accent/30 rounded-lg group">
              <AlertTriangle className={`h-5 w-5 ${
                alert.severity === 'High' ? 'text-destructive' :
                alert.severity === 'Medium' ? 'text-warning' :
                'text-primary'
              }`} />
              <div className="flex-1">
                <h4 className="font-medium">{alert.title}</h4>
                <p className="text-sm text-muted-foreground">{alert.location}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-sm ${
                  alert.severity === 'High' ? 'text-destructive' :
                  alert.severity === 'Medium' ? 'text-warning' :
                  'text-primary'
                }`}>
                  {alert.severity} Risk
                </span>
                <div className="hidden group-hover:flex items-center gap-1">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-8 w-8 p-0 hover:text-destructive"
                    onClick={() => onDeleteAlert(alert.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskAlerts;
