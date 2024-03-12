"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Livro = /** @class */ (function () {
    function Livro(id_livro, nome_livro, autor, genero, statusLivro) {
        this.id_livro = id_livro;
        this.nome_livro = nome_livro;
        this.autor = autor;
        this.genero = genero;
        this.statusLivro = statusLivro;
    }
    return Livro;
}());
exports.Livro = Livro;
