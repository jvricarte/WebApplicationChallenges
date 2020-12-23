function calcular() {
    const salarioBruto = document.querySelector('.salario-bruto').value;
    const dependentes = document.querySelector('.dependentes').value;
    const deducoes = document.querySelector('.deducoes').value;
    const dedutivelPorDependente = 189.59 * dependentes;
    const calculoInss = (salarioBruto) => {
        if (salarioBruto == 1045.00) {
            return salarioBruto * 0.075;
        } else if (salarioBruto > 1045.00 && salarioBruto <= 2089.60) {
            if (salarioBruto != 2098.60) {
                return (1045.00 * 0.075) + ((salarioBruto - 1045.00) * 0.09);
            } else {
                return (1045.00 * 0.075) + ((2089.60 - 1045.00) * 0.09);
            }
        } else if (salarioBruto > 2089.60 && salarioBruto <= 3134.40) {
            if (salarioBruto != 3134.40) {
                return (1045.00 * 0.075) + ((2089.60 - 1045.00) * 0.09) + ((salarioBruto - 2089.60) * 0.12)
            } else {
                return (1045.00 * 0.075) + ((2089.60 - 1045.00) * 0.09) + ((3134.40 - 2089.60) * 0.12)
            }
        } else if (salarioBruto > 3134.40 && salarioBruto <= 6101.06) {
            if (salarioBruto != 6101.06) {
                return (1045.00 * 0.075) + ((2089.60 - 1045.00) * 0.09) + ((3134.40 - 2089.60) * 0.12) + 
                ((salarioBruto - 3134.40) * 0.14);
            } else {
                return (1045.00 * 0.075) + ((2089.60 - 1045.00) * 0.09) + ((3134.40 - 2089.60) * 0.12) + 
                ((6101.06 - 3134.40) * 0.14);
            }
        }
    }
    const baseDeCalculo = salarioBruto - dedutivelPorDependente - deducoes - calculoInss(salarioBruto);
    const calculoIrrf = (baseDeCalculo) => {
        if (baseDeCalculo >= 1903.98) {
            var isencao = baseDeCalculo - 1903.98;
        } else {
            isencao = baseDeCalculo;
        }
        if (baseDeCalculo <= 1903.98) {
            return "Isento";
        } else if (baseDeCalculo > 1903.98 && baseDeCalculo <= 2826.65) {
            return ` R$ ${(isencao * 0.075).toFixed(2)}`;
        } else if (baseDeCalculo > 2826.65 && baseDeCalculo <= 3751.05) {
            return ` R$ ${(isencao * 0.15).toFixed(2)}`;
        } else if (baseDeCalculo > 3751.05 && baseDeCalculo <= 4664.68) {
            return ` R$ ${(isencao * 0.225).toFixed(2)}`;
        } else {
            return ` R$ ${(isencao * 0.275).toFixed(2)}`;
        }
    }

    const p = document.getElementsByTagName('p');

    p[0].innerHTML += `R$ ${salarioBruto}`;
    p[1].innerHTML += `R$ ${calculoInss(salarioBruto).toFixed(2)}`;
    p[2].innerHTML += ` ${dependentes} - R$ ${dedutivelPorDependente}`;
    p[3].innerHTML += `R$ ${deducoes}`;
    p[4].innerHTML += `R$ ${baseDeCalculo.toFixed(2)}`
    p[5].innerHTML += `${calculoIrrf(baseDeCalculo)}`;

}