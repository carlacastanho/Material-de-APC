#include <stdio.h>
#include <string.h>


int pow_recursivo(int x, int n){
	if(n == 1)
		return x;

	return x * pow_recursivo(x,n-1);
}


int main(){

	int x,n;
	scanf("%d %d", &x, &n);
	printf("%d\n",pow_recursivo(x,n));

	return 0;
}
