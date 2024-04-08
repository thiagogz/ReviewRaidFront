import { Users } from "lucide-react";
import { Icon } from "./Icon";
import DropDown from "./DropDown";

interface CategoriaItemProps {
    categoria: {
        id: number;
        nome: string;
        descricao: string;
        tipo: string;
        icone: string;
    }
}

export function CategoriaItem(props: CategoriaItemProps) {
    const { categoria } = props;
    
    return (
        <div className="flex justify-between">
            <div className="flex gap-2 border-white border-2 p-2 bg-black rounded-lg">
                <Icon name={categoria.icone} />
                <span>{categoria.nome}</span>
            </div>
            <DropDown />
        </div>
    )
}