#include <stdio.h>
int main () {
    int i, valor, achou;
    int conjunto[] = {3,6,7,10,4,12,9,5,8};
    valor = 5;
     
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