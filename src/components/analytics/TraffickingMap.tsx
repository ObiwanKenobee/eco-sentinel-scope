
import { Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const TraffickingMap = () => {
  return (
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
  );
};

export default TraffickingMap;
