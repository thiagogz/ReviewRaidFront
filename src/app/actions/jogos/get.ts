'use server'

export async function get(categoria?: string, page?: number) {
    if (!page) page = 1
    page = page - 1

    const queryParam = new URLSearchParams()
    if (categoria) queryParam.append('categoria', categoria)
    queryParam.append('page', page.toString())

    const url = `${process.env.API_BASE_URL}/jogos?${queryParam.toString()}`
    const resp = await fetch(url, { next: { revalidate: 0 } })
    const json = await resp.json()
    return json
}