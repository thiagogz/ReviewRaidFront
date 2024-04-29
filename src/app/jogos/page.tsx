import NavBar from "@/components/NavBar"
import { get } from "../actions/jogos/get";
import { getCategorias } from "../actions/categorias/getCategorias";
import { Filter, Link, Plus } from "lucide-react";
import { Button, Pagination } from "@nextui-org/react";
import { CategoriaSelect } from "@/components/CategoriaSelect";
import { JogosItem } from "./JogosItem";

export default async function Home() {
  const jogos: Array<Jogo> = await get()
  const categorias: Array<Categoria> = await getCategorias()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="jogos"/>
      <section className="flex flex-col gap-4 bg-slate-800 w-4/5 max-w-[1024px] mt-4 p-6 rounded">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Jogos</h2>
          <Link href="/jogos/new">
            <Button color="primary" startContent={<Plus />}>Novo Jogo</Button>
          </Link>
        </div>

        <div className="flex gap-4 items-center border-1 border-white/10 p-4 rounded">
          <Filter size={44} />
          <CategoriaSelect categorias={categorias} />
        </div>

        {jogos.map(jogos =>
          <JogosItem jogos={jogos} />
        )}

      </section>
    </main>
  );
}
