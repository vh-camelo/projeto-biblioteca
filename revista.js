import { item } from './item.js';

export class revista extends item{
constructor(titulo, edicao)                                                                         {
        super(titulo);
        this.edicao = edicao;
    }
    descricao(){
        return `Titulo: ${this.titulo} - Edicao: ${this.edicao} - disponivel: ${this.disponivel}`
    }
}