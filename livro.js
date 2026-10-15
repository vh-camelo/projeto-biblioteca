import { item } from './item.js';

export class livro extends item{
    constructor(titulo, autor){
        super(titulo);
        this.autor = autor;
    }

    descricao(){
        if(this.disponivel === true) {
         return `Titulo: ${this.titulo} - Autor: ${this.autor} - disponivel: Sim`   
        } else{
            return `Titulo: ${this.titulo} - Autor: ${this.autor} - disponivel: Não`
        }
    }
}