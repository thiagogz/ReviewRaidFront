import NavBar from "@/components/NavBar"
import { Button, Link } from "@nextui-org/react";
import { getCategorias } from "../actions/categorias/getCategorias";
import { CategoriaItem } from "./CategoriaItem";


export default async function Home() {
  
  const categorias : Array<Categoria> = await getCategorias()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="categorias"/>
      <section className="flex flex-col gap-3 bg-slate-900 p-6 mt-6 rounded min-w-96">
        <div className="flex justify-between gap-20">
            <h2 className="text-2xl font-bold">Categorias</h2>
            <Link href="/categorias/new">
              <Button color="primary">Nova Categoria</Button>
            </Link>
        </div>
        {categorias.map(categoria => <CategoriaItem categoria={categoria}/>)}
        
      </section>
    </main>
  );
}

/*
categorias em json:  
{
    "nome": "Multiplayer",
    "descricao": "Jogos que podem ser jogados com mais de uma pessoa, seja online ou localmente.",
    "tipo": "TAG",
    "icone": "users"
},
{
    "nome": "Singleplayer",
    "descricao": "Jogos que podem ser jogados sozinho, sem a necessidade de outras pessoas.",
    "tipo": "TAG",
    "icone": "user"
},
{
    "nome": "Ação",
    "descricao": "Jogos que envolvem muita ação, combate e movimentação rápida.",
    "tipo": "TAG",
    "icone": "flame"
},
{
    "nome": "Aventura",
    "descricao": "Jogos que envolvem exploração, descoberta e narrativa.",
    "tipo": "TAG",
    "icone": "pawprint"
},
{
    "nome": "RPG",
    "descricao": "Jogos que envolvem estratégias, evolução de personagens e narrativa rica.",
    "tipo": "TAG",
    "icone": "sparkle"
},
{
    "nome": "Corrida",
    "descricao": "Jogos que envolvem competição de velocidade, seja em carros, motos ou outros veículos.",
    "tipo": "TAG",
    "icone": "medal"
},
{
    "nome": "Plataforma",
    "descricao": "Jogos que envolvem pulos, saltos e desafios de plataforma.",
    "tipo": "TAG",
    "icone": "crown"
}
*/