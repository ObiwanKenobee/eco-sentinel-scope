
import { useParams, Link } from 'react-router-dom';
import { Brain, ArrowLeft, Shield, Network, Activity, ChartLine, Map, Bell } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
      {/* Header Banner */}
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
            {/* Feature Cards */}
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

            {/* Performance Metrics */}
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

            {/* Quick Actions */}
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

          <TabsContent value="features">
            {/* Feature content will be implemented in next iteration */}
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Feature details coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            {/* Analytics content will be implemented in next iteration */}
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Analytics dashboard coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            {/* Settings content will be implemented in next iteration */}
            <Card>
              <CardContent className="p-6">
                <p className="text-muted-foreground">Settings panel coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AgentDetail;
