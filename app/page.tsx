import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CircuitBoard, Code2 } from "lucide-react";

export default function Home() {
  return (
    <main className="font-mono min-h-screen p-4 md:p-8 pt-14 flex items-center justify-center bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-foreground">Nuru Playground</h1>
        <p className="mb-12 text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore and learn with interactive simulations for electronics and software development
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link href="/electronics">
            <Button size="lg" className="w-full md:w-64 h-36 flex flex-col items-center justify-center gap-3">
              <CircuitBoard className="w-10 h-10" />
              <div>
                <div className="text-lg font-medium">Electronics Playground</div>
                <div className="text-sm text-muted-foreground">Control circuits using Swahili</div>
              </div>
            </Button>
          </Link>
          
          <Link href="/software">
            <Button variant="outline" size="lg" className="w-full md:w-64 h-36 flex flex-col items-center justify-center gap-3">
              <Code2 className="w-10 h-10" />
              <div>
                <div className="text-lg font-medium">Software Playground</div>
                <div className="text-sm text-muted-foreground">Coming soon</div>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
