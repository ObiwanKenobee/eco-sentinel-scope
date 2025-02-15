
import { useParams } from 'react-router-dom';
import { Network, Activity, Map } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AgentHeader from '@/components/agent-detail/AgentHeader';
import OverviewTab from '@/components/agent-detail/OverviewTab';
import FeaturesTab from '@/components/agent-detail/FeaturesTab';
import AnalyticsTab from '@/components/agent-detail/AnalyticsTab';
import SettingsTab from '@/components/agent-detail/SettingsTab';

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
      <AgentHeader />
      
      <div className="container py-12">
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <OverviewTab features={witAiFeatures} />
          </TabsContent>

          <TabsContent value="features">
            <FeaturesTab />
          </TabsContent>

          <TabsContent value="analytics">
            <AnalyticsTab />
          </TabsContent>

          <TabsContent value="settings">
            <SettingsTab />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AgentDetail;
