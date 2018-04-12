//Looping a triangle
let result = '';
for (var i=0; i<7; i++){
  result += '#';  
  console.log(result);    
}


//2.2 FizzBuzz
let result ='';
for (i=0; i <= 100; i++){
  if (i%3 == 0){
    result = 'Fizz';
  } else if (i%5 == 0){
    result = 'Buzz';
  } else
    result = i;
  console.log (result);
}

//Looping a triangle
let result = '';
for (var j=0; j<8; j++){
  if (j%2 == 0){
  	x = 0;
  } else 
    x = 1;
  
  for (var i=0; i<8; i++){
    if (i%2 == x){
      result += ' ';
    } else
      result += '#';
    
  }
  console.log(result);  
  result = '';
}


