import ElectronicsSimulator from "@/components/electronics-simulator";

export default function ElectronicsPage() {
  return (
    <main className="font-mono min-h-screen p-4 md:p-8 pt-14 bg-background">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-foreground">Nuru Playground</h1>
        <p className="mb-8 text-muted-foreground">
          Program electronics using your favorite language - Nuru !
        </p>
        <ElectronicsSimulator />
      </div>
    </main>
  );
}
