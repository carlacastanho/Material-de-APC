#include <stdio.h>

int main() {

  int array[10];
  array[5] = 7;
  printf("%d\n", array[5]);
  // aqui nao precisamos multiplicar por sizeof(int)
  // porque, sendo um ponteiro de int ele já pula os
  // 4 bytes do int automaticamente.
  int* pt = array+5;
  *pt = 10;
  printf("%d\n", array[5]);
}