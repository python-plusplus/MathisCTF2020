      // values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
var i = 0,
    a = 0,
    isBackspacing = false,
    isParagraph = false,
    audio = new Audio('https://cdn-16.anonfile.com/191eQdvbo5/44d186e5-1588574190/Scary%20Jumpscare%20Sound%20Effect(1).wav'),
    keyaudio = new Audio('https://cdn-09.anonfile.com/Xf29Q4vco8/5f93d571-1588574264/mybmp.wav');


// Typerwrite text content. Use a pipe to indicate the start of the second line "|".
var textArray = [
  "hHello Mrs.Abe|",
  "We have been watching you for a long time.|",
  "Now that you are 18 years old, you now qualify as a potential candidate to join our organization|",
  "As an exclusive organization, we only accept highly inquisitive individuals.|",
  "To join, you will have to complete a series of tests.|",
  "First, we ask that you set the following parameters|",
  "Please turn on your audio and turn up the volume, you will have to listen carefully.|",
  "Done?|",
  "Good.|",
  "Now enter fullscreen mode on your browser by pressing f11.|",
  "Done?|",
  "Good.|",
  "We will now begin our first test",
  "If you haven't shit your pants, congratulations, you have passed the first test.|",
  "Now we will move on to the next test.",
  "Ready?",
  "See you on the other side."
];

// Speed (in milliseconds) of typing.
var speedForward = 100, //Typing Speed
    speedWait = 1000, // Wait between typing and backspacing
    speedBetweenLines = 1000, //Wait between first and second lines
    speedBackspace = 20; //Backspace Speed

//Run the loop
typeWriter("output", textArray);

function jumpScare(jump, audio, imgid, imgsrc){
  var element = $("#output"),
  eHeader = element.children("h1"), //Header element
  eParagraph = element.children("p"); //Subheader element
  var jumpimg = $('<img />', {
    id: imgid,
    src: imgsrc,
  });
  jumpimg.appendTo(jump);
  element.hide();
  jump.show();
  audio.play();
}
function typeWriter(id, ar) {
  var element = $("#" + id),
      aString = ar[a],
      eHeader = element.children("h1"), //Header element
      eParagraph = element.children("p"), //Subheader element
      jump = $("#jump");
      key = $("#key");
      jump.hide();
      key.hide();
  // Determine if animation should be typing or backspacing
  if (!isBackspacing) {

    // If full string hasn't yet been typed out, continue typing
    if (i < aString.length) {

      // If character about to be typed is a pipe, switch to second line and continue.
      if (aString.charAt(i) == "|") {
        isParagraph = true;
        eHeader.removeClass("cursor");
        eParagraph.addClass("cursor");
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedBetweenLines);

      // If character isn't a pipe, continue typing.
      } else {
        jump.hide();
        key.hide();
        element.show();
        // Type header or subheader depending on whether pipe has been detected
        if (!isParagraph) {
          eHeader.text(eHeader.text() + aString.charAt(i));
        } else {
          eParagraph.text(eParagraph.text() + aString.charAt(i));
        }
        i++;
        setTimeout(function(){ typeWriter(id, ar); }, speedForward);
      }

    // If full string has been typed, switch to backspace mode.
    } else if (i == aString.length) {

      isBackspacing = true;
      if (a == 0){
        setTimeout(function(){ typeWriter(id, ar); }, 4000);
      }
      else if (a == 12){
        jumpScare(jump, audio, "jumpimg", "https://i.ytimg.com/vi/TTQ8Oh_aBiA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBtfiP2-jF28NHngeIOG-TmtFO16w");
        setTimeout(function(){ typeWriter(id, ar); }, 4000);
      }
      else if (a == 15){
        jumpScare(key, keyaudio, "keyimg", "https://www.mediafire.com/convkey/f0d4/6vy3uv5krj01xy1zg.jpg");
        setTimeout(function(){ typeWriter(id, ar); }, 4000);
      }
      else if (a == 16){
        setTimeout(function(){ typeWriter(id, ar); }, 100000);
      }
      else{
        setTimeout(function(){ typeWriter(id, ar); }, speedWait);
      }

    }

  // If backspacing is enabled
  } else {

    // If either the header or the paragraph still has text, continue backspacing
    if (eHeader.text().length > 0 || eParagraph.text().length > 0) {

      // If paragraph still has text, continue erasing, otherwise switch to the header.
      if (eParagraph.text().length > 0) {
        eParagraph.text(eParagraph.text().substring(0, eParagraph.text().length - 1));
      } else if (eHeader.text().length > 0) {
        eParagraph.removeClass("cursor");
        eHeader.addClass("cursor");
        eHeader.text(eHeader.text().substring(0, eHeader.text().length - 1));
      }
      setTimeout(function(){ typeWriter(id, ar); }, speedBackspace);

    // If neither head or paragraph still has text, switch to next quote in array and start typing.
    } else {

      isBackspacing = false;
      i = 0;
      isParagraph = false;
      a = (a + 1) % ar.length; //Moves to next position in array, always looping back to 0
      setTimeout(function(){ typeWriter(id, ar); }, 50);

    }
  }
}