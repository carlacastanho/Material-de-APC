#include <stdlib.h>
#include <stdio.h>

typedef struct {
    int mat;
    int pNum;
    float nota;
    int peso;
} Nota;

void matNome(int idx){
    switch (idx) {
        case 0: printf("APC\n");
                break;
        case 1: printf("ISC\n");
                break;
        case 2: printf("C1\n");
                break;
        case 3: printf("FTC\n");
                break;
        case 4: printf("InfoSoc\n");
                break;
        default: printf("Lembro dessa materia nao..\n");
    }
}
// funcao de comparacao entre Notas
int ehMenor(Nota* a, Nota* b){
    float n_a = a->nota;
    float n_b = b->nota;
    if(n_a <= n_b)
        return 1;
    else
        return 0;
}

void showNota(Nota* n){
    printf("Materia: ");
    matNome(n->mat);
    printf("Prova numero %d\n", n->pNum);
    printf("Nota: %.2f, peso: %d\n", n->nota, n->peso);
}

void stats(Nota* arr, int n){
    // funcao para ordenar vetores. Faz parte da stdlib.h
    Nota pior = arr[0];
    Nota melhor = arr[0];
    int i;
    for(i = 1; i < n; i++){
        if(ehMenor(&arr[i], &pior))
            pior = arr[i];
        else if(ehMenor(&melhor, &arr[i]))
            melhor = arr[i];
    }
    printf("MELHOR NOTA\n");
    showNota(&melhor);
    printf("=============================\n");
    printf("PIOR NOTA\n");
    showNota(&pior);
}

int main(){
    Nota vetor[10];
    int sub[] = {0,0,1,1,2,2,3,3,4,4};
    float nota[] = {10,10,6.5,8.2,4.5,7.9,4.2,6.5,7.8,8.5};
    int i;
    for(i = 0; i < 10; i++){
        Nota a = {sub[i], (i%2)+1, nota[i], (i%3)+2};
        vetor[i] = a;
    }

    stats(vetor, 10);
}