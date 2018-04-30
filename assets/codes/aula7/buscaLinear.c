#include <stdio.h>
int main () {
    int i, valor, achou;
    int conjunto[] = {10,14,19,26,27,31,33,35,42,44};
    valor = 33;

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