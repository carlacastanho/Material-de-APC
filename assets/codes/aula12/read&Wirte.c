#include <stdio.h>

typedef struct {
    char nome[100];
    double nota;
}Estudante;
 
int main(){

	FILE *arquivo;
	Estudante aluno[100];
	int i,n = 0;
	
	arquivo = fopen("notas.txt","r");

	if (arquivo == NULL){
	   printf("Error! opening file");
	   return 0;
	}

	while(fscanf(arquivo, "%s %lf", aluno[n].nome, &aluno[n].nota)  != EOF){
		n++;
	}

	for(i = 0; i < n; i++){                                                
	    printf("Aluno: %s\n",aluno[i].nome);
	    printf("Nota: %.2lf\n",aluno[i].nota);                                                
	}

	fclose(arquivo); 
	arquivo = fopen("notas.txt","w");

	for(i = 0; i < n; i++){  
		aluno[i].nota *= 1.1;                                              
	    fprintf(arquivo,"%s %lf\n",aluno[i].nome,aluno[i].nota);
	}

	printf("Notas atualizadas com sucesso!\n");

	return 0;
}