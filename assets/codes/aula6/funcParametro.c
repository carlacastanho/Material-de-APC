#include<stdio.h>

/* returns the max between two numbers */
int max(int a, int b){
    return a > b ? a : b;
}
/* returns the biggest element in array */
int maxElement(int* array, int n){
    int i;
    int max = array[0];
    for(i = 1; i < n; i++){
        max = max(array[i], max);
    }
    return max;
}

int main(){
    int array[] = {0, -1, 3, -10, 4, 22, -5, 2};
    int maior = maxElement(array, 8);
    prontf("O maior elemento é %d\n", maior);
    return 0;
}