export function criarBuscador(acervo){
    return function (tituloBuscado) {
        for (const itemProcurado of acervo) {
            if (itemProcurado.titulo === tituloBuscado)

                return itemProcurado
    }}
}