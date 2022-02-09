

public class Sobrecarga {
    
    public static int soma(int... numeros){
        System.out.println("Integer");
        int soma = 0;
        for(int n : numeros)
            soma += n;
            return soma;
    }
    
    public static double soma(double... numeros){
        System.out.println("Double");
        double soma = 0;
        for(double n : numeros)
            soma += n;
            return soma;
    }

    public static int subtracao(int a, int b){
        return a - b;
    }
    
    public static double subtracao(double a, double b){
        return a - b;
    } 

    public static double divisao(double a, double b){
        return a / b;
    }
    
    public static int multiplicacao(int... numeros){
        System.out.println("Integer");
        int resultado = 1;
        for(int n : numeros)
            resultado *= n;
            return resultado;
    }

    public static double multiplicacao(double... numeros){
        System.out.println("Double");
        double resultado = 1;
        for(double n : numeros)
            resultado *= n;
            return resultado;
    }

    public static void main(String[] args) {
        System.out.println(soma(10, 20));
        System.out.println(soma(10, 20, 30));
        System.out.println(soma(10.5, 20.5, 30.5));
        System.out.println(subtracao(20, 10));
        System.out.println(subtracao(20.5, 10));
        System.out.printf("%.2f\n", divisao(5, 2));
        System.out.printf("%d\n", multiplicacao(10, 5));
        System.out.printf("%.2f\n", multiplicacao(50, 0.2));
    }

}