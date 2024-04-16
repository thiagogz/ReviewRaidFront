"use server"

export async function getById(id: number){

    const resp = await fetch(`${process.env.API_BASE_URL}/categorias/${id}`)

    if (resp.ok){
        return await resp.json()
    }

    if(!resp.ok){
        throw new Error("erro buscar categoria. ")
    }

}