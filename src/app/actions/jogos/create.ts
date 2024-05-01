"use server"

import { redirect } from "next/navigation"

export async function create(prevState: any, formData: FormData){
    await new Promise( r => setTimeout(r, 1000))

    const date = formData.get("launchDate");
    const partes = String(date).split('-');
    formData.set("launchDate", partes[2] + '/' + partes[1] + '/' + partes[0]);

    const data = {
        name: formData.get("name"),
        image: formData.get("image"),
        description: formData.get("description"),
        launchDate: formData.get("launchDate"),
        categoria: {
            id: formData.get("categoria")
        }
    }

    const options = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }

    }
    const resp = await fetch(process.env.API_BASE_URL + "/jogos", options)

    if (resp.ok){
        redirect("/jogos")
    }

    if(resp.status == 400){
        const messages = await resp.json()

        return {
            message_name: messages.find( (m: any) => m.campo == "name")?.mensagem || '',
            message_description: messages.find( (m: any) => m.campo == "description")?.mensagem || '',
            message_launchDate: messages.find( (m: any) => m.campo == "launchDate")?.mensagem || '',
        }
    }

}