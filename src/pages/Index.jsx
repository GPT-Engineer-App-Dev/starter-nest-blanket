import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Index = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground p-4">
        <h1 className="text-2xl font-bold">Victorian Age Explorer</h1>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-4">Discover the Victorian Era</h2>
        <p className="mb-6">Explore the fascinating period of British history known as the Victorian Age.</p>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>The Victorian Age (1837-1901)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The Victorian era, named after Queen Victoria, was a time of tremendous change in Britain. 
              It saw rapid industrialization, scientific progress, and the expansion of the British Empire.
            </p>
            <h3 className="text-lg font-semibold mb-2">Key Facts:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Queen Victoria reigned for 63 years and 7 months</li>
              <li>The population of England almost doubled from 16.8 million to 30.5 million</li>
              <li>Technological advancements included the telephone, telegraph, and railways</li>
              <li>Charles Darwin published "On the Origin of Species" in 1859</li>
              <li>The Industrial Revolution reached its peak during this period</li>
            </ul>
          </CardContent>
        </Card>
        
        <div className="space-y-4">
          <Input
            type="text"
            placeholder="Enter a Victorian-era fact..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="max-w-md"
          />
          <Button onClick={() => alert(`You entered: ${inputValue}`)}>
            Submit Fact
          </Button>
        </div>
      </main>

      <footer className="bg-secondary text-secondary-foreground p-4 text-center">
        <p>&copy; 2024 Victorian Age Explorer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
