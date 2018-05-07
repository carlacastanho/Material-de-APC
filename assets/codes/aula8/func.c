#include <stdio.h>
#include <stdlib.h>  // for rand()
#define ROWS 5
#define COLUMS 5

// conta os numeros pares em uma matriz
int countEven(int m[ROWS][COLUMS]){
    int r = 0, i, j;
    for(i = 0; i < ROWS; i++){
        for(j = 0; j < COLUMS; j++){
            if(m[i][j]%2 == 0)
                r++;
        }
    }
    return r;
}

// mostra uma matriz na tela
void printMat(int m[][COLUMS]){ // note que ROWS eh opcional. COLUMS nao.
    int i, j;
    for(i = 0; i < ROWS; i++){
        for(j = 0; j < COLUMS; j++)
            printf("%d ", m[i][j]);
        printf("\n");
    }
}

int main(){
    int matriz[ROWS][COLUMS];
    int i,j;
    for(i = 0; i < ROWS; i++)
        for(j = 0; j < COLUMS; j++)
            matriz[i][j] = rand() % 100;

    int even = countEven(matriz);
    printf("Existem %d numeros pares na matriz\n", even);
    printMat(matriz);
}