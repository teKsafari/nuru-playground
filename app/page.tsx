import ElectronicsSimulator from "@/components/electronics-simulator";

export default function Home() {
  return (
    <main className="font-mono min-h-screen p-4 md:p-8 pt-14 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Nuru electronic playground</h1>
        <p className="mb-8 text-gray-700 dark:text-gray-300">
          Control electronics using your favorite language - Swahili
        </p>
        <ElectronicsSimulator />
      </div>
    </main>
  );
}
