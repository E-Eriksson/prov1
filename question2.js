// 2. Bokstävers position i strängar (3p)
// Skriv en funktion equalLetterPositions som räknar ut hur många bokstäver som
// är på samma position i två strängar. Funktionen ska räkna stor och liten bokstav
// som samma bokstav.

// Exempel:
// equalLetterPositions("go", "DO") // Returnerar 1 (o och O är på samma position i båda strängarna)
// equalLetterPositions("hello", "world") // Returnerar 1 (l är på samma position i båda strängarna)
// equalLetterPositions("detsamma", "detta") // Returnerar 4 (d, e, t, a är på samma position i båda strängarna)

function equalLetterPositions(str1, str2) {
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  min = 0;
  if (str1.length < str2.length) min = str1.length;
  else min = str2.length;
  totEqualPos = 0;
  for (i = 0; i < min; i++) {
    if (str1[i] == str2[i]) {
      totEqualPos++;
    }
  }
  return totEqualPos;
}

module.exports = equalLetterPositions;
