import NavBar from "@/components/NavBar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="noticias"/>
      <h2>Noticias</h2>
    </main>
  );
}
