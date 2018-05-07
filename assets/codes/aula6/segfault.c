#include <stdio.h>

int main(){
    int n = 31230;
    int array[3] = {1, 4 ,-8};  
    printf("%d\n",array[n]); // Irá ocorrer falha de segmentação         
    return 0;
}                                           