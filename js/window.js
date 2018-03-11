//Notepad
$( "#notepadico" ).click(function() {
   $('#notepad').fadeIn(250);
   $('#npicon').fadeIn(250);
   $('#npicon').addClass("current");
});

$( "#npicon" ).click(function() {
   $('#notepad').fadeToggle(250);
});

$( "#npmin" ).click(function() {
   $('#notepad').fadeOut(250);
});

$( "#npclose" ).click(function() {
   $('#notepad').fadeOut(250);
   $('#npicon').fadeOut(250);
   $('#npicon').removeClass("current");
});

$( "#npmax" ).click(function() {
   document.getElementById('notepad').style.width = '100%';
   document.getElementById('notepad').style.height = '100%';
   document.getElementById('notepad').style.top = '0px';
   document.getElementById('notepad').style.left = '0px';
   $('#npmax').hide();
   $('#nprestore').show();
   $( ".window" ).draggable('disable');
});

$( "#nprestore" ).click(function() {
   document.getElementById('notepad').style.width = '50%';
   document.getElementById('notepad').style.height = '50%';
   document.getElementById('notepad').style.top = '5px';
   $('#npmax').show();
   $('#nprestore').hide();
   $( ".window" ).draggable('enable');
});

//Powerhell
$( "#powerhellico" ).click(function() {
   $('#powerhell').fadeIn(250);
   $('#phicon').fadeIn(250);
   $('#phicon').addClass("current");
});

$( "#phicon" ).click(function() {
   $('#powerhell').fadeToggle(250);
});

$( "#phmin" ).click(function() {
   $('#powerhell').fadeOut(250);
});

$( "#phclose" ).click(function() {
   $('#powerhell').fadeOut(250);
   $('#phmin').fadeOut(250);
   $('#phicon').removeClass("current");
   $('#phicon').fadeOut(250);
});

$( "#phmax" ).click(function() {
   document.getElementById('powerhell').style.width = '100%';
   document.getElementById('powerhell').style.height = '100%';
   document.getElementById('powerhell').style.top = '0px';
   document.getElementById('powerhell').style.left = '0px';
   $('#phmax').hide();
   $('#phrestore').show();
   $( ".window" ).draggable('disable');
});

$( "#phrestore" ).click(function() {
   document.getElementById('powerhell').style.width = '50%';
   document.getElementById('powerhell').style.height = '50%';
   document.getElementById('powerhell').style.top = '5px';
   $('#phmax').show();
   $('#phrestore').hide();
   $( ".window" ).draggable('enable');
});

$( "#exicon, #edicon, #sticon" ).click(function() {
   $('#notinstalled').fadeIn(50).delay(5000).fadeOut(100);
   var audio = new Audio('audio/Windows Notify System Generic.wav');
   audio.play();
});

$( "#navaico" ).click(function() {
   $('#malwarefound').fadeIn(50).delay(5000).fadeOut(100);
   var audio = new Audio('audio/avast.mp3');
   audio.play();
   $('#navaico').delay(1000).hide();
});

$( "#bin" ).click(function() {
   var audio = new Audio('audio/Windows Recycle.wav');
   audio.play();
});

$( ".window" ).draggable();
