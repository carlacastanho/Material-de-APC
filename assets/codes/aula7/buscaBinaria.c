#include <stdio.h>
int main () {
	int inicio, fim, meio, valor, achou;
	int conjunto[] = {3,4,5,6,7,8,9,10,12};

	valor = 6;
	inicio = 0;
	fim = 8;
	achou = 0;
	
	while ((inicio <= fim) && (!achou)) {
		meio = (inicio + fim) / 2;
		if (valor < conjunto[meio])
			fim = meio - 1;
		else if (valor > conjunto[meio])
			inicio = meio + 1;
		else
			achou = 1;
	}
	if (achou)
		printf("%d encontrado na posicao %d.\n", valor, meio + 1);
	else
		printf("%d nao encontrado.\n", valor);

return 0;
} 