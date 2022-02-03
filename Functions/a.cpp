#include <math.h>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <assert.h>
#include <limits.h>
#include <stdbool.h>
#include <iostream>

using namespace std;

int main()
{
    int n;    
    cin >> n;

    while(n--){
        string str;
        cin >> str; 

        int even=0, odd=0, diff;
        
        for(int i=0; i<=str.length(); i++)
            if(i%2 == 0)
                odd += (int)str[i];
            else
                even += (int)str[i];

            diff = abs(odd - even);
        
        if(diff%3 == 0 || diff%5 == 0 || diff%7 == 0)
            cout << "Prime String" << endl;
        else
            cout << "Casual String" << endl;
    }
}
