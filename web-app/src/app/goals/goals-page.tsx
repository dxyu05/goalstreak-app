import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function GoalsPage() {
  const goals = [
    { name: "Do leetcode", streak: 0 },
    { name: "Go to the gym", streak: 0 },
    { name: "Goon for 10 hours", streak: 300 },
  ];

  return (
    <main className="min-h-screen bg-background p-8 font-sans relative">
      <h1 className="text-3xl font-bold mb-6 text-foreground">Your Goals</h1>

      <div className="flex flex-col gap-4">
        {goals.map((goal, i) => (
          <Card key={i} className="bg-card rounded-2xl p-4 px-6 shadow-goal-card border-0">
            <div className="flex justify-between items-center">
              <span className="text-lg text-card-foreground">{goal.name}</span>
              <span className="text-primary font-bold text-sm">
                <b>{goal.streak}</b> day streak
              </span>
            </div>
          </Card>
        ))}
      </div>

      {/* Add Goal Button */}
      <Button
        className="fixed bottom-6 right-6 w-11 h-11 rounded-full bg-primary hover:bg-primary-hover border-0 shadow-add-button text-primary-foreground text-2xl font-bold leading-none p-0 transition-colors duration-200"
        aria-label="Add Goal"
      >
        +
      </Button>
    </main>
  );
}