"use server"

import { redirect } from "next/navigation"

export async function destroy(id: number){
    await new Promise( r => setTimeout(r, 2000))

    const options = {
        method: "DELETE"
    }

    const resp = await fetch(process.env.API_BASE_URL + "/jogos/" + id, options)

    if (!resp.ok){
        throw new Error("erro ao apagar")
    }

    if (resp.ok){
        redirect("/jogos")
    }



}