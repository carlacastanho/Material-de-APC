#include <stdio.h>

int main(){
	int linha1[] = {-10, 2, 0};
	int linha2[] = {1, 2, 3};
	int linha3[] = {14, 123, 641};
	int matriz[3][3];	// matriz de 3 linhas e 3 colunas
	int i,j;
	for(i = 0; i < 3; i++){ 	// indice de linhas
		for(j = 0; j < 3; j++){	// indice de colunas
			if(i == 0)
				matriz[i][j] = linha1[j];
			else if(i == 1)
				matriz[i][j] = linha2[j];
			else
				matriz[i][j] = linha3[j];
		}
	}

	// print results
	for(i = 0; i < 3; i++){
		for(j = 0; j < 3; j++){
			printf("%d ", matriz[i][j]);
		}
		printf("\n");
	}
}
