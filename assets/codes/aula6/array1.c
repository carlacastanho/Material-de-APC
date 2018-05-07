#include <stdio.h>

int main(){
    int a[] = {1, 4, -8};
    int b[3], i;

    for(i = 0; i < 3; i++){
        b[i] = a[i] * 2;
    }

    for( i = 0; i < 3; i++){
    	printf("a[%d] = %d\n",i,a[i]);
    }
    printf("---------------\n");

    for( i = 0; i < 3; i++){
    	printf("b[%d] = %d\n",i,b[i]);
    }
    return 0;
}                                           