#include<stdio.h>

int main(){
	int numbers[10];
	
	printf("Input 10 numbers:\n");
	
	printf("================\n");
	
	for (int i=0;i<10;i++){
		printf("+number %d",i+1);
		scanf("%d",&numbers[i]);
	}
	
	printf("Result: ");
	for (int i=9;i>=0;i--){
		scanf("%d"),numbers[i];
		if (i>0){
			printf(",");
		}
	}
	printf("\n");
	
	return 0;
}

