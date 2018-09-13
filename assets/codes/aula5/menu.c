#include <stdio.h>
#include <stdlib.h> /* system library */

/* Simple function to show a menu. Could be used if menu
needs to be shown multiple times */

void options(){
	int i;

	/* clear screen*/
	system("@cls||clear");

	/* Show options*/
	printf("Choose your option\n");
	printf("(1) First options\n");
	printf("(2) Second options\n");
	printf("(3) Third options\n");
}

int main(){
	int option;

	do{
		options();
		scanf("%d", &option);
	}while(option < 1 or option > 3);

	return 0;
}	