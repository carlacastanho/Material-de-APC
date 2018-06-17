#include <stdio.h>

long long factorial(int n){
    if (n == 1)     // Caso base
        return 1;

    return n * factorial(n-1); // caso recursivo
}

int main(){
    int n;
    scanf("%d", &n);
    printf("Fatorial(%d) = %lld\n", n, factorial(n));
}