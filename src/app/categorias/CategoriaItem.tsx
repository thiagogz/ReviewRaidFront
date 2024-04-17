"use client"

import { Icon } from "@/components/Icon";
import { destroy } from "../actions/categorias/destroy";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import DropDown from "@/components/DropDown";

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
            <div className="flex gap-2">
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