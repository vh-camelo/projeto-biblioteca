export class item{
    #disponivel
    static TotalDeItens = 0;


    constructor(titulo){
        this.titulo = titulo
        this.#disponivel = true
        item.TotalDeItens++
    }

    emprestar(){
        if(this.#disponivel === true){
            this.#disponivel = !this.#disponivel
            return "sucesso"}
        return "indisponivel"
    }
    devolver(){
        this.#disponivel = !this.#disponivel
    }

    get disponivel(){
        return this.#disponivel
    }

}