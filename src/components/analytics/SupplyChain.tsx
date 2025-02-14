
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SupplyChain = () => {
  return (
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
  );
};

export default SupplyChain;
