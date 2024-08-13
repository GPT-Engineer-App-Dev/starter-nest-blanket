import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import VictorianTimeline from '../components/VictorianTimeline';

const Index = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="bg-primary text-primary-foreground p-6 border-b-4 border-accent">
        <h1 className="text-3xl font-bold font-serif">Victorian Age Explorer</h1>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h2 className="text-4xl font-semibold mb-6 font-serif text-accent">Discover the Victorian Era</h2>
        <p className="mb-8 text-lg">Embark on a journey through the fascinating period of British history known as the Victorian Age.</p>
        
        <Tabs defaultValue="overview" className="mb-12">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card className="border-2 border-accent shadow-lg">
              <CardHeader className="bg-secondary">
                <CardTitle className="text-2xl font-serif">The Victorian Age (1837-1901)</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="mb-6 text-lg">
                  The Victorian era, named after Queen Victoria, was a time of tremendous change in Britain. 
                  It saw rapid industrialization, scientific progress, and the expansion of the British Empire.
                </p>
                <h3 className="text-xl font-semibold mb-4 font-serif text-accent">Key Facts:</h3>
                <ul className="list-none pl-5 space-y-2">
                  {[
                    "Queen Victoria reigned for 63 years and 7 months",
                    "The population of England almost doubled from 16.8 million to 30.5 million",
                    "Technological advancements included the telephone, telegraph, and railways",
                    "Charles Darwin published \"On the Origin of Species\" in 1859",
                    "The Industrial Revolution reached its peak during this period",
                    "The British Empire expanded to cover about 1/4 of the world's land surface",
                    "The Crystal Palace Exhibition of 1851 showcased Britain's industrial might",
                    "Social reforms included the expansion of voting rights and improvements in working conditions",
                    "Literature flourished with authors like Charles Dickens, the Brontë sisters, and Thomas Hardy",
                    "The Arts and Crafts movement emerged as a response to industrialization"
                  ].map((fact, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-accent mr-2">❧</span>
                      {fact}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="timeline">
            <VictorianTimeline />
          </TabsContent>
        </Tabs>
        
        <Card className="space-y-4 bg-secondary p-6 rounded-lg border border-accent">
          <CardHeader>
            <CardTitle className="text-xl font-semibold font-serif">Contribute Your Knowledge</CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              type="text"
              placeholder="Enter a Victorian-era fact..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="max-w-md border-accent mb-4"
            />
            <Button onClick={() => alert(`You entered: ${inputValue}`)} className="bg-accent text-accent-foreground hover:bg-accent/90">
              Submit Fact
            </Button>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-primary text-primary-foreground p-4 text-center border-t-4 border-accent">
        <p>&copy; 2024 Victorian Age Explorer. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
