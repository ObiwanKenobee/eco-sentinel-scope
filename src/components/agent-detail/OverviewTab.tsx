
import { ArrowRight, ChartLine, Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface Feature {
  title: string;
  icon: JSX.Element;
  description: string;
  metrics: Record<string, string>;
}

interface OverviewTabProps {
  features: Feature[];
}

const OverviewTab = ({ features }: OverviewTabProps) => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="group hover:bg-accent/50 transition-all duration-300">
            <CardHeader>
              <div className="mb-4 p-2 rounded-lg bg-primary/10 w-fit">
                {feature.icon}
              </div>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {Object.entries(feature.metrics).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground capitalize">{key}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ChartLine className="w-5 h-5" />
            Performance Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-4 rounded-lg bg-accent/50">
              <div className="text-sm text-muted-foreground mb-1">Networks Analyzed</div>
              <div className="text-2xl font-bold">1,243</div>
            </div>
            <div className="p-4 rounded-lg bg-accent/50">
              <div className="text-sm text-muted-foreground mb-1">Prediction Accuracy</div>
              <div className="text-2xl font-bold">94%</div>
            </div>
            <div className="p-4 rounded-lg bg-accent/50">
              <div className="text-sm text-muted-foreground mb-1">Routes Mapped</div>
              <div className="text-2xl font-bold">156</div>
            </div>
            <div className="p-4 rounded-lg bg-accent/50">
              <div className="text-sm text-muted-foreground mb-1">Active Alerts</div>
              <div className="text-2xl font-bold">38</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and operations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full justify-between" variant="default">
              Run Network Analysis
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button className="w-full justify-between" variant="secondary">
              Generate Risk Report
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button className="w-full justify-between" variant="outline">
              Update Tracking Parameters
              <ArrowRight className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Alerts</CardTitle>
            <CardDescription>Latest system notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-accent/50">
                <Bell className="w-4 h-4 text-primary mt-1" />
                <div>
                  <div className="font-medium">New Network Pattern Detected</div>
                  <div className="text-sm text-muted-foreground">
                    AI identified potential trafficking route in Southeast Asia
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OverviewTab;
