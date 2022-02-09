public class PessoaTeste() {

    public static void main(String []args){
        Scanner s = new Scanner(System.in);
        
        Pessoa p = new Pessoa();
        Pessoa p2 = new Pessoa('Claudio', new Integer(24));
        Pessoa p3 = new Pessoa('Juarez', new Integer(30), new Integer(3000));
        
        Pessoa[] pessoa = new Pessoa[3];
        
            System.out.println ("Programa de cadastros");
            
            String nome;
            int idade;
            double salario;
            for(int i=0; i<pessoa.length; i++) {
                System.out.print("Digite o nome: ");
                nome = s.nextLine());
                System.out.print("Digite a Idade: ");
                idade = s.nextInt());
                System.out.print("Digite o salario: ");
                salario = s.nextInt());
                pessoa[i] = new Pessoa(nome, idade, salario);
            }
            
            for(int i=0; i<pessoa.length; i++) {
                System.out.println("Nome: "+pessoa[i].getNome());
                System.out.println("Idade: "+pessoa[i].getIdade());
                System.out.println("Salario: "+pessoa[i].getSalario());
            }
        
       } 
}