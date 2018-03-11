$('body').hide().delay(500).fadeIn(500);
$('#boot').show().delay(5000).fadeOut(500);
$('.ticon').hide();
$('#start').hide().delay(6000).fadeIn(500);
$('#notifs').hide().delay(6000).fadeIn(500);
$('#exicon').delay(6500).fadeIn(500);
$('#edicon').delay(7000).fadeIn(500);
$('#sticon').delay(7500).fadeIn(500);
$('.icon').hide().delay(8000).fadeIn(500);

function bootSoundWait() {
  window.setTimeout(bootSoundPlay,5000);
}

function bootSoundPlay() {
  var audio = new Audio('audio/win7.mp3');
  audio.play();
}

function wallpaperWait() {
  window.setTimeout(wallpaperLoad,4000);
}

function wallpaperLoad() {
  $('body').css("background-image", "url(https://source.unsplash.com/1920x1080)");
  $('body').css("background-size", "cover");
  $('body').css("background-repeat", "no-repeat");
}
