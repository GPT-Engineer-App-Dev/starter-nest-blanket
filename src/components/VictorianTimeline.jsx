import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const timelineEvents = [
  { year: 1837, event: "Queen Victoria ascends to the throne" },
  { year: 1840, event: "Queen Victoria marries Prince Albert" },
  { year: 1851, event: "The Great Exhibition at Crystal Palace" },
  { year: 1859, event: "Charles Darwin publishes 'On the Origin of Species'" },
  { year: 1861, event: "Prince Albert dies" },
  { year: 1867, event: "Second Reform Act expands voting rights" },
  { year: 1876, event: "Queen Victoria becomes Empress of India" },
  { year: 1891, event: "Elementary education becomes free" },
  { year: 1901, event: "Queen Victoria dies, ending the Victorian era" }
];

const VictorianTimeline = () => {
  return (
    <Card className="border-2 border-accent shadow-lg">
      <CardHeader className="bg-secondary">
        <CardTitle className="text-2xl font-serif">Victorian Era Timeline</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <ul className="space-y-4">
          {timelineEvents.map((event, index) => (
            <li key={index} className="flex items-start">
              <span className="text-accent font-bold mr-4">{event.year}</span>
              <span>{event.event}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default VictorianTimeline;
