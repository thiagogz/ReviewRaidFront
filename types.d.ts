interface Categoria {
    id: number;
    nome: string;
    descricao: string;
    tipo: string;
    icone: string;
}

interface Jogo {
    id: number;
    name: string;
    image: string;
    description: string;
    launchDate: Date;
    categoria: Categoria;
}