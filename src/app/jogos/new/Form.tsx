'use client'

import { create } from "@/app/actions/jogos/create";
import { CategoriaSelect } from "@/components/CategoriaSelect";
import { SubmitButton } from "@/components/SubmitButton";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import { useFormState } from "react-dom";

export function Form(props: { categorias: Array<Categoria> }) {
    const initialState = {
        message_name: '',
        message_description: '',
        message_launchDate: '' // Updated property name
    }

    const { categorias } = props
    

    const [state, formAction] = useFormState(create, initialState)
    return (
        <form action={formAction} className="flex flex-col gap-3 m-6 bg-slate-900 rounded p-6 min-w-[500px]">
            <h2 className="text-2xl font-bold">Novo Jogo</h2>
            <Input
                key="name"
                label="Nome"
                name="name"
                variant="bordered"
                labelPlacement={"outside"}
                isRequired={true}
                isInvalid={state?.message_name != ''}
                errorMessage={state?.message_name}
            />
            
            <Input
                key="image"
                label="Imagem"
                name="image"
                variant="bordered"
                labelPlacement={"outside"}
                isRequired={true}
            />
            
            <Input
                key="description"
                label="Descrição"
                name="description"
                variant="bordered"
                labelPlacement={"outside"}
                isRequired={true}
                isInvalid={state?.message_description != ''}
                errorMessage={state?.message_description}
            />

            <Input
                type="date"
                pattern="dd/MM/yyyy"
                key="launchDate"
                label="Data de lançamento"
                name="launchDate"
                variant="bordered"
                labelPlacement={"outside"}
                isRequired={true}
                isInvalid={state?.message_launchDate != ''}
                errorMessage={state?.message_launchDate}
            />

            <CategoriaSelect categorias={categorias} />

            <div className="flex justify-around mt-4">
                <Link href="/jogos">
                    <Button variant="bordered" >Cancelar</Button>
                </Link>
                <SubmitButton></SubmitButton>
            </div>
        </form>
    )
}