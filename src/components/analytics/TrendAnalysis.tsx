
import { Plus, Edit2, Trash2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Species {
  id: number;
  name: string;
  risk: string;
}

interface Route {
  id: number;
  route: string;
  status: string;
}

interface TrendAnalysisProps {
  species: Species[];
  routes: Route[];
  onDeleteSpecies: (id: number) => void;
  onDeleteRoute: (id: number) => void;
}

const TrendAnalysis = ({ species, routes, onDeleteSpecies, onDeleteRoute }: TrendAnalysisProps) => {
  return (
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
                        onClick={() => onDeleteSpecies(species.id)}
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
              {routes.map((route) => (
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
                        onClick={() => onDeleteRoute(route.id)}
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
  );
};

export default TrendAnalysis;
