import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Network, Bell, ArrowRight, Shield, Bot, Activity } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Agents = () => {
  const agentDetails = [
    {
      id: "wit-ai",
      title: "Wildlife Trafficking Intelligence Agent (WIT-AI)",
      icon: <Brain className="w-12 h-12 text-primary" />,
      description: "Advanced AI system for tracking and analyzing wildlife trade networks",
      features: [
        "GraphRAG-powered trafficking analysis",
        "Predictive smuggling route mapping",
        "Real-time trend monitoring",
      ],
      metrics: {
        accuracy: "94%",
        predictions: "1,243",
        networks: "38",
      }
    },
    {
      id: "supply-chain",
      title: "Supply Chain Compliance Agent",
      icon: <Network className="w-12 h-12 text-primary" />,
      description: "Intelligent supply chain monitoring and compliance verification",
      features: [
        "Business risk assessment",
        "Guardian-IO integration",
        "ESG compliance tracking",
      ],
      metrics: {
        companies: "2,847",
        alerts: "156",
        compliance: "92%",
      }
    },
    {
      id: "law-enforcement",
      title: "Law Enforcement Alerting Agent",
      icon: <Bell className="w-12 h-12 text-primary" />,
      description: "Real-time alerting system for conservation and border agencies",
      features: [
        "Instant alert distribution",
        "AI-driven geospatial analysis",
        "Rapid intervention coordination",
      ],
      metrics: {
        alerts: "438",
        response: "12m",
        coverage: "89%",
      }
    }
  ];

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-accent mb-6">
            <Bot className="w-6 h-6 text-primary mr-2" />
            <span className="text-sm font-medium">AI Agent Network</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Specialized AI Agents</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our intelligent agents work together to create a comprehensive wildlife protection system
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8">
          {agentDetails.map((agent) => (
            <Card key={agent.id} className="group transition-all duration-300">
              <CardHeader className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-accent/50">
                      {agent.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">{agent.title}</CardTitle>
                      <CardDescription className="text-base">
                        {agent.description}
                      </CardDescription>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="gap-2"
                    onClick={() => navigate(`/agents/${agent.id}`)}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary" />
                      Key Capabilities
                    </h3>
                    <ul className="space-y-2">
                      {agent.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Activity className="w-4 h-4 text-primary" />
                      Performance Metrics
                    </h3>
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(agent.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-xl font-bold text-primary">{value}</div>
                          <div className="text-sm text-muted-foreground capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agents;
