#include <stdio.h>
#include <string.h>

int binary_search(int v[], int x, int L, int R){

	if(L > R)
		return -1;

	int mid = (L+R)/2;

	if(v[mid] == x)
		return mid;
	else if(v[mid] > x)
		return binary_search(v,x,L,mid-1);
	else
		return binary_search(v,x,mid+1,R);
}


int main(){

	int n,i,x,qnt;
	int v[10000];

	printf("Digite o tamanho do vetor: ");
	scanf("%d", &n);

	printf("Digite os %d numeros do vetor: ",n);
	for(i = 0; i < n; i++)
		scanf("%d", &v[i]);

	printf("Digite a quantidade de consultas que deseja fazer: ");
	scanf("%d", &qnt);


	while(qnt--){

		scanf("%d", &x);

		int pos = binary_search(v,x,0,n-1);

		if(pos == -1)
			printf("%d not found\n",x);
		else
			printf("%d found at %d\n",x,pos);
	}

	return 0;
}
