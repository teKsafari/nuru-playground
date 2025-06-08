import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CircuitBoard, Code2 } from "lucide-react";
import { HighlightedWord } from "@/components/highlighted-word";

export default function Home() {
  return (
    <main className="font-mono min-h-screen p-4 md:p-8 pt-14 flex items-center justify-center bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-foreground">
          <span className="text-accent">Nuru</span> Playground
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
              className="px-40  md:w-64 h-40 flex flex-col items-center justify-center gap-4 bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg transition-all group"
            >
              <CircuitBoard className="scale-[2.3] w-20 h-20 transform group-hover:scale-[2] transition-transform" />
              <div>
                <div className="text-lg font-bold">
                  Electronics Playground
                </div>
                <div className="text-sm italic" >
                  Program Hardware
                </div>
              </div>
            </Button>
          </Link>

          <Link href="/software">
            <Button
              variant="outline"
              size="lg"
              className="px-40 w-full md:w-64 h-40 flex flex-col items-center justify-center gap-4 border-accent/50 hover:border-accent hover:bg-accent/10 shadow-md hover:shadow-lg transition-all group"
            >
              <Code2 className="scale-[2.3] w-20 h-20 text-accent transform group-hover:scale-[2] transition-transform" />
              <div>
                <div className="text-lg font-bold">Software Playground </div>
                <div className="text-sm italic">Build Software Programs</div>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
