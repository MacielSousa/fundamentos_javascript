function calcular(a, b, c) {

    let delta = Math.pow(b, 2) - (4 * a * c);

    if (delta >= 0) {
        x1 = (-(b) + Math.sqrt(delta)) / (2 * a);
        x2 = (-(b) - Math.sqrt(delta)) / (2 * a);
        console.log(`Valor de x1= ${x1} e x2= ${x2}`);
    } else {
        console.log('Delta é negativo!');
    }

}

calcular(1, -5, 6);