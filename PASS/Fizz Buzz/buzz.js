var num = 100;
var div = false;
for (var i = 1; i <= num; i++) {
div  =false;

  if (i % 3 == 0) {
      document.write("Fizz" );
      div=true;

  }
  if (i % 5 == 0) {
      document.write("Buzz" );
      div=true;
  }
  if (!div){
      document.write(i);
  }
  document.write("<br>");
}
