let zwisch;
let zwisch2;
let number=0;
let number2=0;
let result1=0;
let result2=0;
let result3=0;

findPrime(2,5,8,21, 13);

//Asalsayi bulucu -----odev1------
function findPrime(...incoming){
for (let e = 0; e < incoming.length; e++) {
  
    for (let i = 2; i < incoming[e]; i++) {
        
     if(incoming[e]%i==0){
            zwisch = false;
            break;
        
     }
     else{
         zwisch=true;
     }
    }
    
    if(zwisch==false){
        console.log(incoming[e]+" bir asalsayi degildir ");
    }
    else if(zwisch==true){
        console.log(incoming[e]+" bir asalsayidir");
    }
}
}

friendNumbers(2620, 2924);

//arkadas sayi bulucu -----odev2-----
function friendNumbers(number1,number2){

    for (let i = 0; i < number1; i++) {
    
    if((number1%i)==0)
     result1 = i+result1;
    
        
    }


 for (let i = 0; i < number2; i++) {
    
    if((number2%i)==0)
     result2 = i+result2;
    
        
    }

 if (result1==number2 && result2==number1) {
     console.log(number1 +" "+ number2 + " arkadas sayilardir");
 }
 else{
    console.log(number1 +" "+ number2 + " arkadas sayilar degildirler");
 }
}

perfectNumbers();
//mukemmel sayi bulucu ----odev3----
function perfectNumbers(){
    for (let e = 1; e < 1001; e++) {
      number = e;
     result3=0;
        for (let i = 1; i < number; i++) {
            
         if(number%i==0){
            result3 = result3+i;       
         }
        
        }
        
        if(result3==number){
            console.log(number+" mukemmel sayidir ");
     }
    }
}

findPrime2();
//1000'e kadarki asal sayilar -----odev4------
function findPrime2 (){

    for (let j = 1; j < 1001; j++) {
       
        for (let i = 2; i < j; i++) {
        
            if(j%i==0){
                   zwisch2 = false;
                   break;
               
            }
            else{
                zwisch2=true;
            }
           }
           
           if(zwisch2==false){
              
           }
           else if(zwisch2==true){
               console.log(j+" bir asalsayidir");
           }
       }
       
        
    }
