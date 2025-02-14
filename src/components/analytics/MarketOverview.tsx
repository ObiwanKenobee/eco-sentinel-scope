
const MarketOverview = () => {
  return (
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
  );
};

export default MarketOverview;
