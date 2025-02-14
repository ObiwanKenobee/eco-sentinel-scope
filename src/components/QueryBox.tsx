
import { useState } from 'react';
import { Search } from 'lucide-react';

const QueryBox = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle query submission
    console.log('Query submitted:', query);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask about wildlife trafficking patterns..."
          className="w-full px-6 py-4 bg-accent rounded-full pl-12 pr-6 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
        />
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
      </form>
    </div>
  );
};

export default QueryBox;
