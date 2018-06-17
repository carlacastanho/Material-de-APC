#include <stdio.h>
#include <string.h>

void add(char nome[], char c){
    int n = strlen(nome);
    nome[n] = c;
    nome[n+1] = '\0';
}
 
void inverso(char nome[], char aux[], int n){
 
    if(n == -1)
        return;
 
    add(aux,nome[n]);
 
    inverso(nome,aux,n-1);
}
 
int main(){
 
    char nome[1000];
    char aux[1000];
 
    scanf("%s", nome);
 
    inverso(nome, aux, strlen(nome)-1);
 
    printf("%s inverso = %s\n",nome,aux);
 
    return 0;
}