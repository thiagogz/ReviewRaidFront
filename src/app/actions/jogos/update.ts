"use server"
import { redirect } from "next/navigation"

export async function update(prevState: any, formData: FormData) {
    const data = {
        name: formData.get("name"),
        image: formData.get("image"),
        description: formData.get("description"),
        launch_date: formData.get("launch_date"),
        categoria: {
            id: formData.get("categoria")
        }
    }

    const response = await fetch(`http://localhost:8080/categorias/${formData.get('id')}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (!response.ok) {
        return {
            message: 'Erro ao atualizar categoria'
        }
    }

    if(response.ok){
        redirect('/categorias')
    }

}