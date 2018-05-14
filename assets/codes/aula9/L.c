#include <stdio.h>
#include <string.h>
// Calcula o complementar do DNA no sentido correto para a saída
void comp(char* dna, int n, char* comp){
    int i;
    char ch;
    // Percorrer fita original de trás para a frente. Escrever a nova de frente para trás.
    for(i = 0; i < n; i++){
        // A - T; C - G;
        ch = dna[n-i-1]; // char original
        if(ch == 'A'){
            comp[i] = 'T';
        }
        else if(ch == 'T'){
            comp[i] = 'A';
        }
        else if(ch == 'C'){
            comp[i] = 'G';
        }
        else{
            comp[i] = 'C';
        }
    }
    comp[n] = '\0'; // fim da string
}

int main(){
    // max de 10^6 bases
    char dna[1000005], compl[1000005];
    scanf("%s", dna); // nao precisa de & antes de string
    int n = strlen(dna);
    comp(dna, n, compl);
    printf("%s\n", compl); // mostra resposta
}