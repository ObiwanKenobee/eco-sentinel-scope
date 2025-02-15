
import { Brain, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const AgentHeader = () => {
  return (
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
  );
};

export default AgentHeader;
