
import { BarChart, Map, Network, AlertTriangle, Building } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from 'react';
import MarketOverview from '@/components/analytics/MarketOverview';
import TraffickingMap from '@/components/analytics/TraffickingMap';
import TrendAnalysis from '@/components/analytics/TrendAnalysis';
import RiskAlerts from '@/components/analytics/RiskAlerts';
import SupplyChain from '@/components/analytics/SupplyChain';

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
      <MarketOverview />

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

        <TabsContent value="trafficking">
          <TraffickingMap />
        </TabsContent>

        <TabsContent value="trends">
          <TrendAnalysis 
            species={species}
            routes={traffickingRoutes}
            onDeleteSpecies={handleDeleteSpecies}
            onDeleteRoute={handleDeleteRoute}
          />
        </TabsContent>

        <TabsContent value="alerts">
          <RiskAlerts 
            alerts={alerts}
            onDeleteAlert={handleDeleteAlert}
          />
        </TabsContent>

        <TabsContent value="supply-chain">
          <SupplyChain />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalyticsPage;
