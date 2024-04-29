"use client"

import DropDownActions from "@/components/DropDown";
import { Icon } from "@/components/Icon";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { destroy } from "../actions/jogos/destroy";


interface JogosItemProps{
    jogos : Jogo
}

export function JogosItem({ jogos }: JogosItemProps){
    const router = useRouter()

    function handleDelete(){
        toast.promise(
            destroy(jogos.id),
             {
               loading: "apagando...",
               success: "apagado com sucesso",
               error: "erro ao apagar",
             }
           );

    }

    return (
        <div className="flex justify-between p-2 hover:bg-slate-600 rounded cursor-pointer">
            <div className="flex gap-2 items-center">
                <div className="flex gap-2 items-center">
                    <img src="./utils/${jogos.image}" className="h-10 w-10 rounded-full" />
                    <span>{jogos.name}</span>
                    <span>{jogos.categoria.nome}</span>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <Icon name={jogos.categoria.icone} />
                <span>{String(jogos.launch_date)}</span>
                <span>{jogos.description}</span>
                <DropDownActions 
                    onDelete={handleDelete} 
                    onEdit={() => toast("não implementado")} 
                />
            </div>
        </div>
    )
}