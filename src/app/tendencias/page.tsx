import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="tendencias"/>
      <h2>Tendências</h2>
    </main>
  );
}
