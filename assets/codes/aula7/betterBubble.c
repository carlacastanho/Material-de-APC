void betterBubbleSort(int v[], int n){
    int i, j, ok = 0;
    // passo 3
    for(j = 0; j < n && ok == 0; j++){
        // passo 2
        ok = 1;
        for(i = 0; i < n-j-1; i++){
            // passo 1
            if(v[i] > v[i+1]){
            ok = 0;
            int aux = v[i];
            v[i] = v[i+1];
            v[i+1] = aux;
            }
        }
    }
}
                                
int main(){
    int v[] = {-10, 2, 0, 4, 6, 2, -5, 20, 7, 9};
    int n = 10, i;
    printf("Vetor original com %d elementos\n", n);
    for(i = 0; i < n; i++)
        printf("%d ", v[i]);
    printf("\n");
    // ordenar o vetor
    betterBubbleSort(v, n);
    printf("Vetor ordenado com %d elementos\n", n);
    for(i = 0; i < n; i++)
        printf("%d ", v[i]);
    printf("\n");
} 
