
import TraffickingMap from "@/components/analytics/TraffickingMap";
import RiskAlerts from "@/components/analytics/RiskAlerts";
import SupplyChain from "@/components/analytics/SupplyChain";
import TrendAnalysis from "@/components/analytics/TrendAnalysis";

const AnalyticsTab = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <TraffickingMap />
      <TrendAnalysis 
        species={[
          { id: 1, name: "Pangolin", risk: "High Risk" },
          { id: 2, name: "Rhino", risk: "High Risk" },
          { id: 3, name: "Tiger", risk: "High Risk" }
        ]}
        routes={[
          { id: 1, route: "Southeast Asia → China", status: "Active" },
          { id: 2, route: "Africa → Vietnam", status: "Active" }
        ]}
        onDeleteSpecies={() => {}}
        onDeleteRoute={() => {}}
      />
      <RiskAlerts 
        alerts={[
          { id: 1, title: "Increased Activity", location: "Myanmar Border", severity: "High" },
          { id: 2, title: "New Route Detected", location: "Laos", severity: "Medium" }
        ]}
        onDeleteAlert={() => {}}
      />
      <SupplyChain />
    </div>
  );
};

export default AnalyticsTab;
