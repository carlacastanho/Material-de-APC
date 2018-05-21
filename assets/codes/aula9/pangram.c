#include <stdio.h>
#include <string.h>

int ehMaiuscula(char ch){
    //        'A'           'Z'
    if((ch >= 65) && (ch <= 90))
        return 1;
    return 0;
}

int ehMinuscula(char ch){
    //         'a'            'z'
    if ((ch >= 97) && (ch <= 122))
        return 1;
    return 0;
}

// 1 = true; 0 = false
int ehPangrama(char* frase){
    int alfabeto[26]; // alphabeto
    memset(alfabeto, 0, sizeof(alfabeto)); // inicia tudo com 0 (false)
    int l = strlen(frase), i;
    // conta letras
    for(i = 0; i < l; i++){
        char ch = frase[i];
        if(ehMaiuscula(ch)){
            alfabeto[ch - 'A']++;
        }
        else if(ehMinuscula(ch)){
            alfabeto[ch-'a']++;
        }
        // caracteres não alfabeticos nao acontece nada
    }
    for(i = 0; i < 26; i++){
        if(alfabeto[i] == 0){
            return 0; // false
        }
    }
    return 1; // true
}

int main(){
    char frase[1000000];
    scanf("%s", frase);
    int b = ehPangrama(frase);
    if(b)
        printf("A frase eh um pangrama\n");
    else    
        printf("A frase NAO eh um pangrama\n");
}