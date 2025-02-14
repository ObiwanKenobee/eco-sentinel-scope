
import { BarChart, Map, Network, AlertTriangle, Building, Plus, Edit2, Trash2 } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { useState } from 'react';

const AnalyticsPage = () => {
  const [traffickingRoutes, setTraffickingRoutes] = useState([
    { id: 1, route: 'Southeast Asia → China', status: 'Active' },
    { id: 2, route: 'Africa → Vietnam', status: 'Active' },
    { id: 3, route: 'South America → USA', status: 'Active' },
  ]);

  const [species, setSpecies] = useState([
    { id: 1, name: 'Pangolin', risk: 'High Risk' },
    { id: 2, name: 'Rhino', risk: 'High Risk' },
    { id: 3, name: 'Tiger', risk: 'High Risk' },
    { id: 4, name: 'Elephant', risk: 'High Risk' },
    { id: 5, name: 'Sea Turtle', risk: 'High Risk' },
  ]);

  const [alerts, setAlerts] = useState([
    { id: 1, title: 'Increased Poaching Activity', location: 'Amazon Rainforest', severity: 'High' },
    { id: 2, title: 'New Trafficking Route', location: 'Southeast Asia', severity: 'Medium' },
    { id: 3, title: 'Suspicious Cargo', location: 'Port of Singapore', severity: 'Low' },
  ]);

  const handleDeleteRoute = (id: number) => {
    setTraffickingRoutes(routes => routes.filter(route => route.id !== id));
  };

  const handleDeleteSpecies = (id: number) => {
    setSpecies(speciesList => speciesList.filter(species => species.id !== id));
  };

  const handleDeleteAlert = (id: number) => {
    setAlerts(alertList => alertList.filter(alert => alert.id !== id));
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      {/* Market Overview Section */}
      <section className="mb-8">
        <div className="glass-card p-8">
          <h1 className="text-3xl font-bold mb-4">Wildlife Crime Analytics</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="stat-card">
              <span className="text-2xl font-bold text-destructive">$23B</span>
              <span className="text-sm text-muted-foreground">Annual Illegal Trade Value</span>
            </div>
            <div className="stat-card">
              <span className="text-2xl font-bold text-warning">4,000+</span>
              <span className="text-sm text-muted-foreground">Species at Risk</span>
            </div>
            <div className="stat-card">
              <span className="text-2xl font-bold text-primary">127</span>
              <span className="text-sm text-muted-foreground">Countries Affected</span>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Tabs */}
      <Tabs defaultValue="trafficking" className="space-y-4">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <TabsTrigger value="trafficking" className="flex items-center gap-2">
            <Map className="h-4 w-4" />
            <span>Trafficking</span>
          </TabsTrigger>
          <TabsTrigger value="networks" className="flex items-center gap-2">
            <Network className="h-4 w-4" />
            <span>Networks</span>
          </TabsTrigger>
          <TabsTrigger value="trends" className="flex items-center gap-2">
            <BarChart className="h-4 w-4" />
            <span>Trends</span>
          </TabsTrigger>
          <TabsTrigger value="alerts" className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4" />
            <span>Alerts</span>
          </TabsTrigger>
          <TabsTrigger value="supply-chain" className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            <span>Supply Chain</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="trafficking" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Global Trafficking Hotspots</CardTitle>
                  <CardDescription>Real-time mapping of wildlife crime activities</CardDescription>
                </div>
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Location
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] rounded-lg bg-accent/50 flex items-center justify-center">
                <span className="text-muted-foreground">Interactive Map Coming Soon</span>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trends" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Trafficking Trends</CardTitle>
              <CardDescription>AI-powered analysis of wildlife crime patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass-card p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Most Trafficked Species</h3>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Plus className="h-4 w-4" />
                      Add Species
                    </Button>
                  </div>
                  <ul className="space-y-2">
                    {species.map((species) => (
                      <li key={species.id} className="flex items-center justify-between p-2 bg-accent/30 rounded group">
                        <span>{species.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">{species.risk}</span>
                          <div className="hidden group-hover:flex items-center gap-1">
                            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                              <Edit2 className="h-3 w-3" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-6 w-6 p-0 hover:text-destructive"
                              onClick={() => handleDeleteSpecies(species.id)}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass-card p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">Trafficking Routes</h3>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Plus className="h-4 w-4" />
                      Add Route
                    </Button>
                  </div>
                  <ul className="space-y-2">
                    {traffickingRoutes.map((route) => (
                      <li key={route.id} className="flex items-center justify-between p-2 bg-accent/30 rounded group">
                        <span>{route.route}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-warning">{route.status}</span>
                          <div className="hidden group-hover:flex items-center gap-1">
                            <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                              <Edit2 className="h-3 w-3" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              className="h-6 w-6 p-0 hover:text-destructive"
                              onClick={() => handleDeleteRoute(route.id)}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-4">
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
                          onClick={() => handleDeleteAlert(alert.id)}
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
        </TabsContent>

        <TabsContent value="supply-chain" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Supply Chain Transparency</CardTitle>
              <CardDescription>Corporate compliance and risk assessment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="glass-card p-4">
                  <h3 className="font-semibold mb-2">High-Risk Industries</h3>
                  <ul className="space-y-2">
                    {['Traditional Medicine', 'Luxury Goods', 'Exotic Pets'].map((industry) => (
                      <li key={industry} className="flex items-center justify-between p-2 bg-accent/30 rounded">
                        <span>{industry}</span>
                        <span className="text-xs text-destructive">High Risk</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="glass-card p-4">
                  <h3 className="font-semibold mb-2">Compliance Status</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2 bg-success/20 rounded">
                      <span>Compliant Companies</span>
                      <span className="text-success">73%</span>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-destructive/20 rounded">
                      <span>Non-Compliant</span>
                      <span className="text-destructive">27%</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalyticsPage;
