import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Play, RotateCcw } from "lucide-react";

export default function SoftwarePage() {
  return (
    <main className="font-mono min-h-screen p-4 md:p-8 pt-14 bg-background">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-foreground">Software Playground (Coming soon) </h1>
        <p className="mb-8 text-muted-foreground">
          Tengeneza Program kwa lugha mama - Nuru!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Editor Area */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-medium">Code Editor</h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" disabled>
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset
                  </Button>
                  <Button size="sm" disabled>
                    <Play className="w-4 h-4 mr-2" />
                    Run
                  </Button>
                </div>
              </div>

              <div className="h-80 bg-gray-100 dark:bg-gray-800 rounded-md p-4 font-mono text-sm overflow-auto border border-border">
                <div className="text-muted-foreground">
                  <p># Software simulator will be implemented here</p>
                  <p># Example code:</p>
                  <p className="mt-4">function greet(name) {'{'}</p>
                  <p>  console.log("Hello, " + name + "!");</p>
                  <p>{'}'}</p>
                  <p className="mt-2">greet("World");</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Output Area */}
          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="output">
                <TabsList className="mb-4">
                  <TabsTrigger value="output">Output</TabsTrigger>
                  <TabsTrigger value="console">Console</TabsTrigger>
                  <TabsTrigger value="visual">Visual</TabsTrigger>
                </TabsList>
                
                <TabsContent value="output" className="h-80 bg-gray-100 dark:bg-gray-800 rounded-md p-4 font-mono text-sm overflow-auto border border-border">
                  <div className="text-muted-foreground">
                    <p>// Output will appear here after you run the code</p>
                    <p className="mt-4 text-accent">Hello, World!</p>
                  </div>
                </TabsContent>
                
                <TabsContent value="console" className="h-80 bg-gray-900 dark:bg-gray-950 text-gray-100 rounded-md p-4 font-mono text-sm overflow-auto">
                  <p className="text-gray-400">{">"} Program started</p>
                  <p className="text-white">Hello, World!</p>
                  <p className="text-gray-400">{">"} Program completed in 0.001s</p>
                </TabsContent>
                
                <TabsContent value="visual" className="h-80 bg-white dark:bg-gray-800 rounded-md p-4 overflow-auto border border-border flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <Code className="w-16 h-16 mx-auto mb-4 text-accent" />
                    <p>Visual representation of your code will appear here</p>
                    <p className="text-sm mt-2">This feature is coming soon</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
