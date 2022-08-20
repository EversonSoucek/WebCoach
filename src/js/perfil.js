export class perfil {
    constructor(altura, peso, idade, gordura, genero, atividade, objetivo, id) {
        this.altura = altura
        this.peso = peso
        this.idade = idade
        this.gordura = gordura
        this.genero = genero
        this.atividade = atividade
        this.objetivo = objetivo
        this.id = id
    }
    calculaImc(peso, altura) {
        const imc = peso / (altura * 2)
        return imc
    }

    calculaBasal(peso, altura, idade, genero) {
        const alturaCentimetro = altura * 100
        if (genero == 'Homem') {
            const basal = 88 + (13, 8 * peso) + (5 * alturaCentimetro) - (6.8 * idade)
            return basal
        }
        else {
            const basal = 655 + (9.6 * peso) + (1.8 * alturaCentimetro) - (4.7 * idade)
            return basal
        }
    }

    calculaAgua(peso) {
        const agua = peso * 35
        const aguaLitro = agua / 1000
        return aguaLitro
    }

    calculaKcalNecessario(atividade, objetivo) {
        let kcalNecessario = this.calculaBasal(this.peso, this.altura, this.idade, this.genero)
        let taxaAtividade = 0
        if (atividade === 'baixo') {
            taxaAtividade = 1.375
        }
        else {
            if (atividade === 'moderado') {
                taxaAtividade = 1.55
            }
            else {
                if (atividade == 'alto') {
                    taxaAtividade = 1.725
                }
                else {
                    if (atividade == 'muito-alto') {
                        taxaAtividade = 1.9
                    }
                }
            }
        }
        kcalNecessario *= taxaAtividade

        if (objetivo == 'perder-peso') {
            kcalNecessario -= 200
            return kcalNecessario.toFixed(0)
        }
        else {
            if (objetivo == 'ganhar-peso') {
                kcalNecessario += 200
                return kcalNecessario.toFixed(0)
            }
            else {
                return kcalNecessario.toFixed(0)
            }
        }
    }

    calculaCarboidrato(kcalNecessario) {
        const carboidratokcal = kcalNecessario * 0.4
        const carboidratoGrama = carboidratokcal / 4
        return carboidratoGrama
    }

    calculaProteina(kcalNecessario) {
        const proteinakcal = kcalNecessario * 0.4
        const proteinaGrama = proteinakcal / 4
        return proteinaGrama
    }

    calculaGordura(kcalNecessario) {
        const gorduraKcal = kcalNecessario * 0.2
        const gorduraGrama = gorduraKcal / 9
        return gorduraGrama
    }
}
