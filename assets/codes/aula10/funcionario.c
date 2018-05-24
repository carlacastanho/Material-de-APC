#include <stdio.h>

typedef struct {
    char nome[50];
    char sexo;
    float salario;
    int matricula;
    char endereco[100];
    char cargo[50];
} Funcionario;

void cadastrarFuncionario(Funcionario f[], int idx){
    getchar();
    printf("Qual o nome do funcionario?\n");
    scanf(" %[^\n]", f[idx].nome);
    getchar();
    printf("Qual o sexo do funcionario?\n");
    scanf(" %c", &f[idx].sexo);
    printf("Qual o salario do funcionario?\n");
    scanf("%f", &f[idx].salario);
    printf("Qual a matricula do funcionario?\n");
    scanf("%d", &f[idx].matricula);
    printf("Qual o endereco do funcionario?\n");
    scanf(" %[^\n]", f[idx].endereco);
    printf("Qual o cargo do funcionario?\n");
    scanf("%[^\n]", f[idx].cargo);
}

int main(){
    Funcionario array[100]; // max de 100 funcionarios
    int cadastrados = 0, done = 0;
    while((!done) && (cadastrados < 100)){
        printf("Funcionarios cadastrados: %d\n", cadastrados);
        printf("(1) - Cadastrar novo funcionario\n(2) - Finalizar\n");
        int op;
        scanf("%d", &op);
        while((op != 1) && (op != 2)){
            printf("Opcao invalida\n");
            scanf("%d", &op);
        }
        if(op == 1){
            cadastrarFuncionario(array, cadastrados);
            cadastrados++;
        }
        else
            done = 1;
    }
    int i;
    for(i = 0; i < cadastrados; i++){
        printf("Funcionario %d\n", i);
        printf("Nome: %s (%c)\n", array[i].nome, array[i].sexo);
        printf("Endereco: %s\n", array[i].endereco);
        printf("Matricula: %d\n", array[i].matricula);
        printf("Cargo: %s\n", array[i].cargo);
        printf("Salario: %f\n", array[i].salario);
        printf("============================================\n");
    }
}