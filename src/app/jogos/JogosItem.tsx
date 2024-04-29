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
            <div className="flex gap-2 items-center max-w-20 max-h-fit">
                <img src={jogos.image} className="w-full" />
            </div>
            <div className="flex flex-col flex-grow justify-between px-4">
                <div className="flex items-center justify-between ">
                    <span className="text-2xl">{jogos.name}</span>
                    <div className="flex gap-2 border-white border-2 p-2 bg-black rounded-lg ">
                        <Icon name={jogos.categoria.icone} />
                        <span>{jogos.categoria.nome}</span>
                    </div>
                </div>
                <span className="text-justify py-2">{jogos.description}</span>
                <span className="text-sm text-right">Data de Lançamento: {String(jogos.launch_date)}</span>
            </div>
            <div className="flex items-center">
                <DropDownActions 
                        onDelete={handleDelete} 
                        onEdit={() => toast("não implementado")} 
                    />
            </div>
        </div>

    )
}