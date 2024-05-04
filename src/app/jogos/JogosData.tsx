'use client'

import { CategoriaSelect } from "@/components/CategoriaSelect"
import { JogosItem } from "./JogosItem"
import Link from "next/link"
import { Button } from "@nextui-org/react"
import { Filter, Plus } from "lucide-react"
import { useEffect, useState } from "react"
import { get } from "../actions/jogos/get"

interface JogosDataProps {
    jogos: {
        content: Array<Jogo>
    },
    categorias: Array<Categoria>
}

export function JogosData({ jogos, categorias }: JogosDataProps) {

    const [filteredJogos, setFilteredJogos] = useState(jogos.content)
    const [filter, setFilter] = useState({ categoria: '' })
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(10)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await get(filter.categoria, page)
                setFilteredJogos(data.content)
                setTotalPages(data.totalPages)
            } catch (error) {
                throw new Error("falha ao filtrar movimentações.")
            }
        };

        fetchData();
    }, [filter, page]);

    const changeFilter = (e: any) => {
        setFilter({ ...filter, [e.target.name]: e.target.value });
    }

    const clearFilter = () => {
        setFilter({ categoria: '' });
    }


    return (
        <>
            <section className="flex flex-col gap-4 bg-slate-800 w-4/5 max-w-[1024px] min-h-[565px] mt-4 p-6 rounded">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">Jogos</h2>
                    <Link href="/jogos/new">
                        <Button color="primary" startContent={<Plus />}>Novo Jogo</Button>
                    </Link>
                </div>

                <div className="flex gap-4 items-end border-1 border-white/10 p-4 rounded">
                    <Filter size={44} />
                    <CategoriaSelect categorias={categorias} onChange={changeFilter} />
                    <Button onClick={clearFilter}>Limpar</Button>
                </div>

                {filteredJogos.map(jogos =>
                    <JogosItem key={jogos.id} jogos={jogos} />
                )}

            </section>
        </>
    )
}