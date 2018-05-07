#include <stdio.h>

int main(){
	int linha1[] = {-10, 2, 0};
	int linha2[] = {1, 2, 3};
	int linha3[] = {14, 123, 641};
	int matriz[3][3];
	int i,j;
	for(i = 0; i < 3; i++){
		for(j = 0; j < 3; j++){
			if(i == 0)
				matriz[i][j] = linha1[j];
			else if(i == 1)
				matriz[i][j] = linha2[j];
			else
				matriz[i][j] = linha3[j];
		}
	}

	for(i = 0; i < 3; i++){
		for(j = 0; j < 3; j++){
			printf("%d ",matriz[i][j]);
		}
		printf("\n");
	}
	return 0;
}