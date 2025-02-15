import { useState } from "react";
import { Link } from "react-router-dom";
import QueryBox from "@/components/QueryBox";
import Stats from "@/components/Stats";
import RecentActivity from "@/components/RecentActivity";
import { Shield, ArrowRight, Map, BarChart3, Bell, Brain, Network, Bot } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [selectedSpecies, setSelectedSpecies] = useState<string | null>(null);

  const speciesCards = [
    { name: "Elephants", risk: "High", region: "Africa", trend: "-12%" },
    { name: "Tigers", risk: "Critical", region: "Asia", trend: "-8%" },
    { name: "Rhinos", risk: "High", region: "Africa", trend: "-15%" },
  ];

  const agentCards = [
    {
      title: "Wildlife Trafficking Intelligence",
      icon: <Brain className="w-8 h-8 text-primary" />,
      description: "AI-powered tracking and analysis of illegal wildlife trade movements",
    },
    {
      title: "Supply Chain Compliance",
      icon: <Network className="w-8 h-8 text-primary" />,
      description: "Cross-references business supply chains to detect illegal activities",
    },
    {
      title: "Law Enforcement Alerting",
      icon: <Bell className="w-8 h-8 text-primary" />,
      description: "Real-time alerts for conservation agencies and border patrol units",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="container py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="text-center mb-12 relative">
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-accent mb-6">
            <Shield className="w-6 h-6 text-primary mr-2" />
            <span className="text-sm font-medium">AI-Powered Wildlife Protection</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
            Revolutionizing Wildlife Crime Prevention with AI-Powered Agents
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Our AI-driven ecosystem detects, predicts, and prevents illegal wildlife trade through 
            advanced analytics and real-time intelligence.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="gap-2" asChild>
              <Link to="/agents">
                Explore Agents
                <Bot className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Get Involved
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <QueryBox />
      </section>

      {/* AI Agents Section */}
      <section className="container py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Specialized AI Agents</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our intelligent agents work together to create a comprehensive wildlife protection system
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {agentCards.map((agent, index) => (
            <Card key={index} className="group hover:bg-accent/50 transition-all duration-300">
              <CardHeader>
                <div className="mb-4">{agent.icon}</div>
                <CardTitle>{agent.title}</CardTitle>
                <CardDescription>{agent.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link to="/analytics">
            <Card className="hover:bg-accent/50 transition-colors group cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>View Analytics</span>
                  <BarChart3 className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </CardTitle>
                <CardDescription>
                  Analyze trafficking patterns and trends
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
          <Card className="hover:bg-accent/50 transition-colors group cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Global Map</span>
                <Map className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </CardTitle>
              <CardDescription>
                Track wildlife crime hotspots worldwide
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:bg-accent/50 transition-colors group cursor-pointer">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Alert System</span>
                <Bell className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </CardTitle>
              <CardDescription>
                Set up custom notifications for incidents
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container py-12">
        <Stats />
      </section>

      {/* Species at Risk Section */}
      <section className="container py-12">
        <h2 className="text-2xl font-bold mb-6">Species at Risk</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {speciesCards.map((species) => (
            <Card 
              key={species.name}
              className={`cursor-pointer transition-all hover:scale-105 ${
                selectedSpecies === species.name ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setSelectedSpecies(species.name)}
            >
              <CardContent className="pt-6">
                <div className="text-xl font-semibold mb-2">{species.name}</div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Risk Level</div>
                    <div className={`font-medium ${
                      species.risk === 'Critical' ? 'text-destructive' : 'text-warning'
                    }`}>
                      {species.risk}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Population Trend</div>
                    <div className="font-medium text-destructive">{species.trend}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Region</div>
                    <div className="font-medium">{species.region}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recent Activity Section */}
      <section className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <RecentActivity />
          </div>
          <div className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Button className="w-full justify-between" variant="default">
                Generate Report
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button className="w-full justify-between" variant="secondary">
                View Alerts
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button className="w-full justify-between" variant="outline">
                Analyze Patterns
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
