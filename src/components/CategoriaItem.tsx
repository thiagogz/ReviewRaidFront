"use client"

import { destroy } from "@/app/actions/categorias/destroy";
import DropDown from "./DropDown";
import { Icon } from "./Icon";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

interface CategoriaItemProps {
    categoria: Categoria
}

export function CategoriaItem(props: CategoriaItemProps) {
    const categoria = props.categoria
    const router = useRouter()
    
    function handleDelete() {
        toast.promise(
            destroy(categoria.id),
            {
                loading: "apagando...",
                success: "apagado com sucesso",
                error: "erro ao apagar",
            }
        );
    }
    
    return (
        <div className="flex justify-between">
            <div className="flex gap-2 border-white border-2 p-2 bg-black rounded-lg">
                <Icon name={categoria.icone} />
                <span>{categoria.nome}</span>
            </div>
            <DropDown 
                onEdit={() => router.push("/categorias/" + categoria.id)}
                onDelete={handleDelete}
            />
        </div>
    )
}