import { CategoriaItem } from "@/components/CategoriaItem";
import NavBar from "@/components/NavBar"
import { Button } from "@nextui-org/react";

export default function Home() {
  const categorias = [
    {
        id: 1,
        nome: "Multiplayer",
        descricao: "Jogos que podem ser jogados com mais de uma pessoa, seja online ou localmente.",
        tipo: "TAGS",
        icone: "users"
    },
    {
        id: 2,
        nome: "Singleplayer",
        descricao: "Jogos que podem ser jogados sozinho, sem a necessidade de outras pessoas",
        tipo: "TAGS",
        icone: "user"
    },
    {
        id: 3,
        nome: "Ação",
        descricao: "Jogos que envolvem muita ação, combate e movimentação rápida.",
        tipo: "TAGS",
        icone: "flame"
    },
    {
        id: 4,
        nome: "Aventura",
        descricao: "Jogos que envolvem exploração, descoberta e narrativa.",
        tipo: "TAGS",
        icone: "pawprint"
    },
    {
        id: 5,
        nome: "RPG",
        descricao: "Jogos que envolvem estratégias, evolução de personagens e narrativa rica.",
        tipo: "TAGS",
        icone: "sparkle"
    },
    {
        id: 6,
        nome: "Corrida",
        descricao: "Jogos que envolvem competição de velocidade, seja em carros, motos ou outros veículos.",
        tipo: "TAGS",
        icone: "medal"
    },
    {
        id: 7,
        nome: "Plataforma",
        descricao: "Jogos que envolvem pulos, saltos e desafios de plataforma.",
        tipo: "TAGS",
        icone: "crown"
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="categorias"/>
      <section className="flex flex-col gap-3 bg-slate-900 p-6 mt-6 rounded min-w-96">
        <div className="flex justify-between gap-20">
            <h2 className="text-2xl font-bold">Categorias</h2>
            <Button color="primary">Faço nada, mas sou bonito</Button>
        </div>
        {categorias.map(categoria => <CategoriaItem categoria={categoria}/>)}
        
      </section>
    </main>
  );
}