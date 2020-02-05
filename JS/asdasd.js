var greeting; 
 
if (hourNow > 18) {
    greeting = 'Good evening, Class!';
  } else if (hourNow > 12) {
    greeting = 'Good afternoon, Class!';
  } else if (hourNow >= 0) {
    greeting = 'Good morning!';
  } else {     greeting = 'Something went wrong!';
  }
 document.write('<h3>'+greeting+'</h3>');
//  the reason is to send welcome massage when some one enter the wibsite