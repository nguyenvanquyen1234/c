#include <stdio.h>

int sum(int a, int b);
int sub(int a, int b);
int mul(int a, int b);
int div(int a, int b);

int main()
{
    int x, y, ketqua;
    printf("So thu nhat: ");
    scanf("%d", &x);
    printf("So thu 2: ");
    scanf("%d", &y);
    int result1 = sum(x, y);
    printf("cong la: %d\n", result1);
    int result2 = sub(x, y);
    printf("tru la: %d\n", result2);
    int result3 = mul(x, y);
    printf("nhan la: %d\n", result3);
    int result4 = div(x, y);
    printf("chia la: %d\n", result4);


}
int sum(int a, int b) {
    int c;
    c = a + b;
    return c;
}

int sub(int a, int b) {
    int c;
    c = a - b;
    return c;
}

int mul(int a, int b) {
    int c;
    c = a * b;
    return c;
}

int div(int a, int b) {
    int c;
    c = a / b;
    return c;
}

