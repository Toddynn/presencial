class Matematica{
    static bhaskara(a, b, c){
        let delta = b * b - 4 * a * c;

        if(delta < 0){
            return 'Não possui resultados reais';
        }else if(delta > 0){
            let x1 = (-b + Math.sqrt(delta) / 2 * a);
            let x2 = (-b - Math.sqrt(delta) / 2 * a);
            return(x1, x2);
        }else{
            let x = - b (2 * a);
            return [x, x];
        }
    }
}
console.log(Matematica.bhaskara(1, 12, -13))