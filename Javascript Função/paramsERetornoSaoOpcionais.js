function area(largura, altura) {
    let area = largura * altura;

    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2`);
    } else {
        return area;
    }

}
console.log(area(4, 4));
console.log(area(2));
console.log(area());
console.log(area(2, 3, 17, 22, 44));
console.log(area(5, 5));