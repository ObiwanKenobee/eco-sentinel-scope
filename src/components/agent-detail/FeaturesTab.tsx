import { Webhook, Terminal, Database, Activity } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturesTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Webhook className="w-5 h-5 text-primary" />
            <CardTitle>API Integration</CardTitle>
          </div>
          <CardDescription>Connect with external data sources</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
            <div>
              <div className="font-medium">Guardian-IO API</div>
              <div className="text-sm text-muted-foreground">Supply chain data integration</div>
            </div>
            <Button variant="outline" size="sm">Configure</Button>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
            <div>
              <div className="font-medium">Wildlife Database</div>
              <div className="text-sm text-muted-foreground">Species tracking system</div>
            </div>
            <Button variant="outline" size="sm">Configure</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-primary" />
            <CardTitle>Model Configuration</CardTitle>
          </div>
          <CardDescription>AI model settings and parameters</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
            <div>
              <div className="font-medium">GraphRAG Model</div>
              <div className="text-sm text-muted-foreground">Network analysis parameters</div>
            </div>
            <Button variant="outline" size="sm">Adjust</Button>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
            <div>
              <div className="font-medium">Prediction Engine</div>
              <div className="text-sm text-muted-foreground">Route mapping settings</div>
            </div>
            <Button variant="outline" size="sm">Adjust</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-primary" />
            <CardTitle>Data Management</CardTitle>
          </div>
          <CardDescription>Data storage and processing settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
            <div>
              <div className="font-medium">Storage Configuration</div>
              <div className="text-sm text-muted-foreground">12.8 TB Used</div>
            </div>
            <Button variant="outline" size="sm">Manage</Button>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
            <div>
              <div className="font-medium">Data Retention</div>
              <div className="text-sm text-muted-foreground">90 Days</div>
            </div>
            <Button variant="outline" size="sm">Configure</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary" />
            <CardTitle>Integration Status</CardTitle>
          </div>
          <CardDescription>System connections and health</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg bg-success/20">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              <div className="font-medium">Law Enforcement API</div>
            </div>
            <span className="text-sm text-success">Operational</span>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-warning/20">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-warning" />
              <div className="font-medium">Border Control System</div>
            </div>
            <span className="text-sm text-warning">Degraded</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FeaturesTab;
