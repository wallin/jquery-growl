var fakeTexts = [
  "<b>brissmyr</b> added song 'wonderwall' to playlist",
  "<b>brissmyr</b> reordered playlist 'favvo'",
  "<b>brissmyr</b> is playing track 'wonderwall' ",
  "<b>brissmyr</b> created playlist 'Johan' ",
  "<b>gyllen</b> joined in",
  "<b>gyllen</b> left",
  "<b>gyllen</b> is playing track 'fast car' ",
  "<b>gyllen</b> skipped to next track ",
  "<b>jimtegel</b> is playing track 'Sjösala vals' ",
  "<b>jimtegel</b> added track 'Roslagens famn' ",
  "<b>jimtegel</b> left",
  "<b>Nyström</b> removed track 'Pärleporten' from playlist",
  "<b>Nyström</b> joined in",
  "<b>Nyström</b> renamed playlist 'cedermark' to 'dragspel'",
  "<b>Nyström</b> added track 'gamle svarten'",
  "<b>tilljoel</b> joined in",
  "<b>tilljoel</b> created playlist 'Indie-favoriter' ",
  "<b>tilljoel</b> added track 'Mr. vain' playlist 'Indie-favoriter' "
];

function randomMsg() {
  var randMsg  = Math.floor(Math.random()*fakeTexts.length);
  $("#EventContainer").notify({
    text: fakeTexts[randMsg]
  });
}

function spam() {
  randomMsg();
  var randTime = Math.floor(Math.random()*5000) + 500;
  setTimeout(spam, randTime);
}

$(document).ready(function() {
  $("#btnNew").click(randomMsg);
  setTimeout(spam, 1000);
});