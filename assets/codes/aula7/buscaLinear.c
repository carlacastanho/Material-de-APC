#include <stdio.h>
int main () {
    int conjunto[10], i, valor, achou;

    for (i = 0; i < 10; i++) {
        printf("Informe o elemento %d do conjunto:\n", i + 1);
        scanf("%d", &conjunto[i]);
    }
    
    printf("Informe o valor a ser procurado:\n");
    scanf("%d", &valor);
    
    i = 0;
    achou = 0;
    
    while ((i < 10) && (!achou)) {
        if (conjunto[i] == valor)
            achou = 1;
        else
            i++;
    }
    
    if (achou)
        printf("%d encontrado na posicao %d.\n", valor, i + 1);
    else
        printf("%d nao encontrado.\n", valor);

 return 0;
}