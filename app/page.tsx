import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CircuitBoard, Code2 } from "lucide-react";
import { HighlightedWord } from "@/components/highlighted-word";

export default function Home() {
  return (
    <main className="font-mono min-h-screen p-4 md:p-8 pt-14 flex items-center justify-center bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-foreground">
          Nuru Playground
        </h1>
        <p className="mb-12 text-xl text-muted-foreground max-w-2xl mx-auto">
          <HighlightedWord href="https://github.com/nuruprogramming" target="_blank">
            Nuru
          </HighlightedWord>
          is a Swahili Programming language, Originally authored by{" "}
          <HighlightedWord target="_blank" href="https://github.com/AvicennaJr">
            Fuad Habib
          </HighlightedWord>{" "}
          in 2021, and now maintained by the{" "}
          <HighlightedWord href="https://nuruprogramming.org" target="_blank">
            nuruprogramming foundation.
          </HighlightedWord> <br />
          <br />
          teKsafari is excited to work with the Nuru Community to build an
          ecosytem around the language to help swahili speakers learn and master
          technology in a way that feels familiar to them.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link href="/electronics">
            <Button
              size="lg"
              className="w-full md:w-64 h-36 flex flex-col items-center justify-center gap-3"
            >
              <CircuitBoard className="w-10 h-10" />
              <div>
                <div className="text-lg font-medium">
                  Electronics Playground
                </div>
                <div className="text-sm text-muted-foreground">
                  Control circuits using Swahili
                </div>
              </div>
            </Button>
          </Link>

          <Link href="/software">
            <Button
              variant="outline"
              size="lg"
              className="w-full md:w-64 h-36 flex flex-col items-center justify-center gap-3"
            >
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
