function calcular() {
    let salarioBruto = document.querySelector('.salario-bruto').value;
    let dependentes = document.querySelector('.dependentes').value;
    let deducoes = document.querySelector('.deducoes').value;
    let dedutivelPorDependente = 189.59 * dependentes;
    let baseDeCalculo = salarioBruto - dedutivelPorDependente - deducoes;
}