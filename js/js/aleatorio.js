const nomes = ["Emily", "Isabelly", "Robert", "Franciane", "Moacir", "Gabriela", "Ana Luiza", "Natalia", "Danielly", "Vitoria"]

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio (nomes);