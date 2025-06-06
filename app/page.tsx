import ElectronicsSimulator from "@/components/electronics-simulator";

export default function Home() {
  return (
    <main className="font-mono min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Nuru electronic playground</h1>
        <p className="mb-8 text-gray-700">
          Control electronics using your favorite language - Swahili
        </p>
        <ElectronicsSimulator />
      </div>
    </main>
  );
}
