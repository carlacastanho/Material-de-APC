#include <stdio.h>

/* Programa */
int main(){
	int n,i, resp = 0;
	scanf("%d", &n);

	int turmaA[n], turmaB[n];

	for(i = 0; i < n; i++)
		scanf("%d", &turmaA[i]);
	
	for(i = 0; i < n; i++)
		scanf("%d", &turmaB[i]);
	
	for(i = 0; i < n; i++){
		if(turmaA[i] > turmaB[i]){
			resp++;
		}
	}
	
	printf("A turma A possui %d pontos\n",resp);	
	printf("A turma B possui %d pontos\n",n-resp);	
    
    return 0;
}                                           