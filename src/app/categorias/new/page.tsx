import NavBar from "@/components/NavBar";
import { Button, Input, Link } from "@nextui-org/react";

export default async function Home() {
  
  async function getCategorias(){
    const resp = await fetch("http://localhost:8080/categoria", { next: {revalidate: 0} })
    return await resp.json()
  }
  
  const categorias : Categoria[] = await getCategorias()

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="categorias"/>
      
      <form action="" className="flex flex-col gap-4 p-6 m-6 bg-slate-900 rounded min-w-[500px]">
        <h2 className="text-2xl font-bold">Cadastrar categoria</h2>
        <Input 
            key="nome"
            label="Nome"
            name="nome"
            labelPlacement="outside"
        />
      </form>
    
      <div className="flex justify-around">
        <Link href="/categorias">
            <Button variant="bordered">Cancelar</Button>
        </Link>

        <Button type="submit" color="primary">Salvar</Button>
      </div>
    </main>
  );
}