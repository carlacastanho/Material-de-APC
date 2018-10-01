#include <stdio.h>

void check(int x, int *resp){
    if(x%2 == 0){
        if(x > 20)
            *resp = 1;
        else 
            *resp = 0;
    }
    else
        *resp = - 1;
}

int main(){

    int n,i,y, resp;
    scanf("%d", &n);
    for(i = 0; i < n; i++){
        scanf("%d", &y);
        check(y, &resp);
        if(resp == 1)
            printf("%d eh par e maior que 20\n",y);
        else if(resp == 0)
            printf("%d eh par e menor ou igual a 20\n",y);
        else
            printf("%d eh impar\n",y);
    }

    return 0;
}                             