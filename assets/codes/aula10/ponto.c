#include <math.h>
#include <stdio.h>
#define PI 3.1415

typedef struct {
    double x,y;
} Pcart;

typedef struct {
    double r, angle;
} Ppolar;

Pcart polar2cart(Ppolar p){
    Pcart r;
    float rad = (p.angle*PI)/180.0;
    r.x = p.r * cos(rad);
    r.y = p.r * sin(rad);
    return r;
}

Ppolar cart2polar(Pcart p){
    Ppolar asw;
    asw.r = sqrt(pow(p.x,2) + pow(p.y,2));
    float rad = atan(p.y/p.x);
    asw.angle = (rad*180)/PI;
    return asw;
}

int main(){
    Ppolar p = {13, 22.6};
    Pcart q = polar2cart(p);
    Ppolar o = cart2polar(q);
    printf("Ponto cartesiano: (%.2lf, %.2lf)\n", q.x, q.y);
    printf("Ponto polar: (%.2lf, %.2lf)\n", o.r, o.angle);
}