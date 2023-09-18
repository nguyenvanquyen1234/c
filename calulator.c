#include <stdio.h> 

int add(int a, int b);

//int cauculator(){ 
int main(){
	// Goi ham lan thu nhat(gia tri co san)
	int result = add (5,3);
	printf("Tong la:%d\n",result);
	
	//goi ham lan thu hai(gia tri co san)
	int result2 = add(4,3);
	printf("Tong la: %d\n",result2);
	
	//Nguoi dung nhap gia tri 
	int num1,num2;
	printf("nhap so hang thu nhat: ");
	scanf("%d",&num1,&num2);
	
	//Goi ham lan thu ba (gia tri do nguoi dung nhap vao)
	int result3 = add(num1,num2);
	printf("Tong la: %d\n",result3);
	return 0;
}

int add(int a,int b){
	printf("\n\n thuc hien cong:\n");
	printf("so hang a = %d\n", a);
	printf("so hang b = %d\n",b);
	return a+b;
}

 
