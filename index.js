// index.js

// 1. shout(string)
function shout(string) {
    return string.toUpperCase();
  }
  
  // 2. whisper(string)
  function whisper(string) {
    return string.toLowerCase();
  }
  
  // 3. logShout(string)
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  // 4. logWhisper(string)
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  
  // 5. sayHiToGrandma(string)
  function sayHiToGrandma(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "I love you, Grandma.") {
      return "I love you, too.";
    }
  }
// index.js

// ... (existing functions)

// 6. sayHiToHeadphonedRoommate(string)
function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }
    