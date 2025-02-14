
import QueryBox from "@/components/QueryBox";
import Stats from "@/components/Stats";
import RecentActivity from "@/components/RecentActivity";
import { Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="container py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="text-center mb-12 relative">
          <div className="inline-flex items-center justify-center p-2 rounded-full bg-accent mb-6">
            <Shield className="w-6 h-6 text-primary mr-2" />
            <span className="text-sm font-medium">Wildlife Protection Intelligence</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text">
            Combat Wildlife Crime with AI
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced analytics and real-time intelligence to protect endangered species
            and track illegal wildlife trafficking.
          </p>
        </div>
        <QueryBox />
      </section>

      {/* Stats Section */}
      <section className="container py-12">
        <Stats />
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
              <button className="w-full px-4 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                Generate Report
              </button>
              <button className="w-full px-4 py-3 rounded-lg bg-accent text-accent-foreground hover:bg-accent/80 transition-colors">
                View Alerts
              </button>
              <button className="w-full px-4 py-3 rounded-lg bg-accent text-accent-foreground hover:bg-accent/80 transition-colors">
                Analyze Patterns
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
