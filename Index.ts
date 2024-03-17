import { Genero } from "./Genero";
import { Livro } from "./livro";
import { statusLivro } from "./statusLivro";
import { Biblioteca } from "./biblioteca";

//aqui é onde vamos criar os livros, instanciar as classes, e chamar os métodos (funções) destas classes

const livro0: Livro = new Livro(0, "Homem de Ferro", "Douglas", Genero.genero0, statusLivro.disponivel);

const livro1: Livro = new Livro(1, "Mulher Maravilha", "Arthur", Genero.genero1, statusLivro.atrasado);

const livro2: Livro = new Livro(2, "Carros", "Heique", Genero.genero2, statusLivro.disponivel);

const livro3: Livro = new Livro(3, "Estrelas", "Bruno", Genero.genero3, statusLivro.emprestado);

const livro4: Livro = new Livro(4, "Pequeno Principe", "Felipe", Genero.genero4, statusLivro.reservado);


//instância da classe Biblioteca
const minhaBiblioteca: Biblioteca = new Biblioteca()

























