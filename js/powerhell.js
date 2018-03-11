$( "#phno" ).click(function() {
   $('#phnotif').fadeIn(50).delay(5000).fadeOut(100);
   $('#powerhell').fadeOut(250);
   $('#phicon').fadeOut(250);
   var audio = new Audio('audio/Windows Notify System Generic.wav');
   audio.play();
});

$( "#phye" ).click(function() {
   $('#phnotifyes').fadeIn(50).delay(5000).fadeOut(100);
   var audio = new Audio('audio/Windows Notify System Generic.wav');
   audio.play();
});
