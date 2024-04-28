"use client"

import Link from "next/link";
import { SubmitButton } from "@/components/SubmitButton";
import { Button, Input } from "@nextui-org/react";

import { useFormState } from "react-dom";
import { update } from "@/app/actions/categorias/update";


export function EditForm(categoria : Categoria) {

    const initialState = {
        message: ""
    }


    const [state, formAction] = useFormState(update, initialState)
    return (
        <form action={formAction} className="flex flex-col gap-4 p-6 m-6 bg-slate-900 rounded min-w-[500px]">
            <input type="hidden" name="id" value={categoria.id} />
            <h2 className="text-2xl font-bold">Editar Categoria {categoria.nome}</h2>
            <Input
                key="nome"
                label="Nome"
                name="nome"
                variant="bordered"
                defaultValue={categoria.nome}
                labelPlacement="outside"
                isInvalid={state?.message != ""}
                errorMessage={state?.message}
            />

            <Input
                key="descricao"
                label="Descrição"
                name="descricao"
                variant="bordered"
                defaultValue={categoria.descricao}
                labelPlacement="outside"
                isInvalid={state?.message != ""}
                errorMessage={state?.message}
            />

            <Input
                key="tipo"
                label="Tipo"
                name="tipo"
                variant="bordered"
                defaultValue={categoria.tipo}
                labelPlacement="outside"
                isInvalid={state?.message != ""}
                errorMessage={state?.message}
            />

            <Input
                key="icone"
                label="Ícone"
                name="icone"
                variant="bordered"
                defaultValue={categoria.icone}
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
    )
}