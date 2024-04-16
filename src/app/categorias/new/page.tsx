import { create } from "@/app/actions/categorias/create";
import NavBar from "@/components/NavBar";
import { SubmitButton } from "@/components/SubmitButton";
import { Button, Input, Link } from "@nextui-org/react";
import { useFormState } from "react-dom";

export default async function Home() {
  
  const initialState = {
    message: ""
  }

  const [state, formAction] = useFormState(create, initialState)

  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar active="categorias"/>
      
      <form action={formAction} className="flex flex-col gap-4 p-6 m-6 bg-slate-900 rounded min-w-[500px]">
        <h2 className="text-2xl font-bold">Cadastrar categoria</h2>
        <Input
                key="nome"
                label="Nome"
                name="nome"
                variant="bordered"
                labelPlacement="outside"
                isInvalid={state?.message != ""}
                errorMessage={state?.message}
            />

        <Input
            key="descricao"
            label="Descrição"
            name="descricao"
            variant="bordered"
            labelPlacement="outside"
            isInvalid={state?.message != ""}
            errorMessage={state?.message}
        />

        <Input
            key="tipo"
            label="Tipo"
            name="tipo"
            variant="bordered"
            labelPlacement="outside"
            isInvalid={state?.message != ""}
            errorMessage={state?.message}
        />

        <Input
            key="icone"
            label="Ícone"
            name="icone"
            variant="bordered"
            labelPlacement="outside"
            isInvalid={state?.message != ""}
            errorMessage={state?.message}
        />

        <div className="flex justify-around">
          <Link href="/categorias">
              <Button variant="bordered">Cancelar</Button>
          </Link>

          <SubmitButton />
        </div>
      </form>
    </main>
  );
}