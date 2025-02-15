import { useParams, Link } from 'react-router-dom';
import { Brain, ArrowLeft, Shield, Network, Activity, ChartLine, Map, Bell, ArrowRight, Settings2, Sliders, Terminal, Webhook, Database, Lock, Users, AlertTriangle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TraffickingMap from "@/components/analytics/TraffickingMap";
import RiskAlerts from "@/components/analytics/RiskAlerts";
import SupplyChain from "@/components/analytics/SupplyChain";
import TrendAnalysis from "@/components/analytics/TrendAnalysis";

const AgentDetail = () => {
  const { id } = useParams();

  const witAiFeatures = [
    {
      title: "Network Analysis",
      icon: <Network className="w-6 h-6" />,
      description: "Advanced graph-based analysis of wildlife trafficking networks",
      metrics: {
        networks: "38 Active Networks",
        connections: "1,247 Connections",
        accuracy: "94% Accuracy"
      }
    },
    {
      title: "Predictive Mapping",
      icon: <Map className="w-6 h-6" />,
      description: "AI-powered prediction of future smuggling routes",
      metrics: {
        routes: "156 Routes Mapped",
        predictions: "89% Accuracy",
        hotspots: "23 Identified"
      }
    },
    {
      title: "Real-time Monitoring",
      icon: <Activity className="w-6 h-6" />,
      description: "Continuous tracking of wildlife trade patterns",
      metrics: {
        updates: "Real-time",
        coverage: "Global",
        alerts: "24/7 Monitoring"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-accent/50 border-b">
        <div className="container py-8">
          <div className="flex items-center gap-2 mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/agents">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Agents
              </Link>
            </Button>
          </div>
          <div className="flex items-start gap-6">
            <div className="p-4 rounded-lg bg-background">
              <Brain className="w-16 h-16 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Wildlife Trafficking Intelligence Agent (WIT-AI)
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Advanced AI system for tracking and analyzing wildlife trade networks using cutting-edge graph analysis
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {witAiFeatures.map((feature, index) => (
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
          </TabsContent>

          <TabsContent value="features" className="space-y-6">
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
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <TraffickingMap />
              <TrendAnalysis 
                species={[
                  { id: 1, name: "Pangolin", risk: "High Risk" },
                  { id: 2, name: "Rhino", risk: "High Risk" },
                  { id: 3, name: "Tiger", risk: "High Risk" }
                ]}
                routes={[
                  { id: 1, route: "Southeast Asia → China", status: "Active" },
                  { id: 2, route: "Africa → Vietnam", status: "Active" }
                ]}
                onDeleteSpecies={() => {}}
                onDeleteRoute={() => {}}
              />
              <RiskAlerts 
                alerts={[
                  { id: 1, title: "Increased Activity", location: "Myanmar Border", severity: "High" },
                  { id: 2, title: "New Route Detected", location: "Laos", severity: "Medium" }
                ]}
                onDeleteAlert={() => {}}
              />
              <SupplyChain />
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Lock className="w-5 h-5 text-primary" />
                    <CardTitle>Security Settings</CardTitle>
                  </div>
                  <CardDescription>Access control and permissions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                    <div>
                      <div className="font-medium">Two-Factor Authentication</div>
                      <div className="text-sm text-muted-foreground">Enhanced security</div>
                    </div>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                    <div>
                      <div className="font-medium">API Access Keys</div>
                      <div className="text-sm text-muted-foreground">Manage API credentials</div>
                    </div>
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <CardTitle>User Management</CardTitle>
                  </div>
                  <CardDescription>Control user access and roles</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                    <div>
                      <div className="font-medium">Team Members</div>
                      <div className="text-sm text-muted-foreground">12 active users</div>
                    </div>
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                    <div>
                      <div className="font-medium">Role Assignments</div>
                      <div className="text-sm text-muted-foreground">Access levels</div>
                    </div>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Settings2 className="w-5 h-5 text-primary" />
                    <CardTitle>System Settings</CardTitle>
                  </div>
                  <CardDescription>General configuration options</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                    <div>
                      <div className="font-medium">Notifications</div>
                      <div className="text-sm text-muted-foreground">Alert preferences</div>
                    </div>
                    <Button variant="outline" size="sm">Configure</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                    <div>
                      <div className="font-medium">System Language</div>
                      <div className="text-sm text-muted-foreground">English (US)</div>
                    </div>
                    <Button variant="outline" size="sm">Change</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-primary" />
                    <CardTitle>Alert Configuration</CardTitle>
                  </div>
                  <CardDescription>Notification and alert settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                    <div>
                      <div className="font-medium">Alert Thresholds</div>
                      <div className="text-sm text-muted-foreground">Risk level settings</div>
                    </div>
                    <Button variant="outline" size="sm">Adjust</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-accent/50">
                    <div>
                      <div className="font-medium">Distribution Lists</div>
                      <div className="text-sm text-muted-foreground">Alert recipients</div>
                    </div>
                    <Button variant="outline" size="sm">Manage</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

        </Tabs>
      </div>
    </div>
  );
};

export default AgentDetail;
