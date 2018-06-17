#include <stdio.h>


int pow( int x, int n){
	if(n == 1) return x;
	return x * pow(x,n-1);
}


int main(){

	printf("Pow(4,3) = %d\n", pow(4,3));
	return 0;

}


<div id = "pow1"><img src="assets/images/Recursividade/pow/pow1.png" class = "img-responsive"></div>
<div id = "pow2"  style="display: none;"><img src="assets/images/Recursividade/pow/pow2.png" class = "img-responsive"></div>
<div id = "pow3"  style="display: none;"><img src="assets/images/Recursividade/pow/pow3.png" class = "img-responsive"></div>
<div id = "pow4"  style="display: none;"><img src="assets/images/Recursividade/pow/pow4.png" class = "img-responsive"></div>
<div id = "pow5"  style="display: none;"><img src="assets/images/Recursividade/pow/pow5.png" class = "img-responsive"></div>
<div id = "pow6"  style="display: none;"><img src="assets/images/Recursividade/pow/pow6.png" class = "img-responsive"></div>
<div id = "pow7"  style="display: none;"><img src="assets/images/Recursividade/pow/pow7.png" class = "img-responsive"></div>
<div id = "pow8"  style="display: none;"><img src="assets/images/Recursividade/pow/pow8.png" class = "img-responsive"></div>
<a  class="btn btn-blue" onclick="animation_prev('pow',8)">Prev</a>
<a  class="btn btn-blue" style = "margin-left: 50%;" onclick="animation_next('pow',8)">Next</a>