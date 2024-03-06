import { genero } from "./Genero";
import { statusLivro } from "./StatusLivro";

export class Livro {
    titulo: string;
    autor: string;
    generos: genero;
    status: statusLivro;

    constructor(titulo: string, autor: string, generos: genero, status: statusLivro) {
        this.titulo = titulo;
        this.autor = autor;
        this.generos = generos;
        this.status = status;
    }
}














