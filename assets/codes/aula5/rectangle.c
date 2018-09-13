#include <stdio.h>

/* Simple function to show a menu. Could be used if menu
needs to be shown multiple times */

void printSquare(int h, int w){
	int i,j;

	/* Print first line */
	for(i = 0; i < w; i++)
		printf("#");
	printf("\n");

	/* Print left & right columns */
	for(i = 1; i < h-1; i++){
		for( j = 0; j < w; j++){
			if(!j || j == w-1)
				printf("#");
			else
				printf(" ");
		}
		printf("\n");
	}

	/* Print last line if exist */
	if(h > 1){
		for(i = 0; i < w; i++)
			printf("#");
		printf("\n");
	}

}

int main(){
	printf("What's rectangle size?\n");
	int x,y;
	scanf("%d %d", &x, &y);
	printSquare(x,y);

	return 0;

}	