import { Genero } from "./Genero"
import { statusLivro } from "./statusLivro"

export class Livro {

    id_livro: number;
    nome_livro: string;
    autor: string;
    genero: Genero[];
    statusLivro: statusLivro;

    constructor(id_livro: number, nome_livro: string, autor: string, genero: Genero, statusLivro: statusLivro) {
       
        this.id_livro = id_livro;
        this.nome_livro = nome_livro;
        this.autor = autor;
        this.genero = [];
        this.statusLivro = statusLivro; 

    }
}






