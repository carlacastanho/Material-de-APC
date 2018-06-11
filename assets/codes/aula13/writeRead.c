#include <stdio.h>

int main(){
    FILE* fd;
    char read[50], str[50] = "Ola mundo binario! o/";
    char file[50] = "example.bin";

    fd = fopen(file, "r+b");
    if(fd == NULL)
        fd = fopen(file "wb");
    
    fwrite(str, sizeof(str), 1 , fd); // escreve str no arquivo
    fclose(fd); // garante que ecrita foi feita
    
    fd = fopen(file, "rb");
    fread(read, sizeof(str), 1, fd);
    printf("Conteudo do arquivo: %s\n", read);
    fclose(fd);
    
    return 0;
}
