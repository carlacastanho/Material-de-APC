#include <stdio.h>
#include <math.h>

/* This function returns the delta value for a quadratic function.
If it has real solutions, "return" them too.
Arguments by value: a, b, c. The real constants of the function.
Arguments by reference: x1 and x2. Reference to the variables where
the solutions should be stored, if there is any. */
double baskara(double a, double b, double c, double* x1, double* x2){
    double delta = b*b - 4*a*c;
    if (delta > 0){
        /* Assigns solutions of function, if they exist */
        *x1 = (-b + sqrt(delta))/(2*a);
        *x2 = (-b - sqrt(delta))/(2*a);
    }
    return delta;
}

int main(){
    double a,b,c,x1,x2;
    printf("Função com raizes reais\n");
    a = 1;
    b = -3;
    c = 1;
    x1 = 0;
    x2 = 0;
    /* Note que x1 e x2 são parâmetros de referência */
    double delta = baskara(a, b, c, &x1, &x2);
    printf("Delta: %.2lf\n", delta);
    /* Note que o valor de x1 e x2 nao eh mais 0 */
    printf("X1: %.2lf\nX2: %.2lf\n", x1, x2);
    printf("===============\n");
    printf("Função sem raizes reais\n");
    a = 1;
    b = 3;
    c = 3;
    x1 = 0;
    x2 = 0;
    delta = baskara(a, b, c, &x1, &x2);
    printf("Delta: %.2lf\n", delta);
    /* Note que o valor de x1 e x2 ainda eh 0 */
    printf("X1: %.2lf\nX2: %.2lf\n", x1, x2);
}