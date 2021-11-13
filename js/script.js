 // Our List of Bars
 var bars = [
     "Siggys",
     "Blind Tiger",
     "Zum Schneider",
     "One Month",
     "Home Sweet Home",
     "Union Pool",
 ];

 // Our List of Friends
 var friends = [
     "Chris",
     "Lee",
     "Casey",
     "that girl you forgot to text back",
     "Kayne West",
     "Tazeen Tasneem",
 ];

 var randomNumber = Math.floor(Math.random() * bars.length);
 var second_random = Math.floor(Math.random() * friends.length);

 var barname = bars[randomNumber];
 var friendname = friends[second_random];

 document.write(
     "How about you go to <strong>" +
     barname +
     "</strong> with <strong>" +
     friendname +
     "</strong>?"
 );