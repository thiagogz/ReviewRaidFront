'use client'

import { Select, SelectItem } from "@nextui-org/react";
import { Icon } from "./Icon";
import { ChangeEventHandler } from "react";

interface CategoriaSelectProps  {
    categorias: Array<Categoria>,
    onChange?: ChangeEventHandler

}

export function CategoriaSelect({categorias, onChange}: CategoriaSelectProps) {

    return (
        <Select
            items={categorias}
            label="Categoria"
            variant="bordered"
            name="categoria"
            placeholder="Selecione uma categoria"
            labelPlacement="outside"
            onChange={onChange}
        >
            {(categoria) => 
                <SelectItem key={categoria.id} startContent={<Icon name={categoria.icone} />}>
                    {categoria.nome}
                </SelectItem>
            }
        </Select>
    )
}