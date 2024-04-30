import NavBar from "@/components/NavBar"
import { get } from "../actions/jogos/get";
import { getCategorias } from "../actions/categorias/getCategorias";
import { Filter, Plus } from "lucide-react";
import { Button, Link } from "@nextui-org/react";
import { CategoriaSelect } from "@/components/CategoriaSelect";
import { JogosItem } from "./JogosItem";
import { JogosData } from "./JogosData";

export default async function Home() {
  const jogos = await get()
  const categorias: Array<Categoria> = await getCategorias()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="jogos"/>
      <JogosData jogos={jogos} categorias={categorias} /> 
    </main>
  );
}
