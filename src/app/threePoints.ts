export function threePoints(longString: string, maxLengthOfString: number) {
  if (longString.length > maxLengthOfString) {
    const shortString: string = longString.substring(maxLengthOfString,0);
    return shortString.concat("...");
  } else {
    return longString;
    }
  }
  
/*
input olarak bir text: string, bir length: number alacak.
eğer string'in karakter sayısı, "length"ten uzun ise, text'in length'ten uzun olan kısmını kırpacak
ve yerine üç nokta koyup döndürecek. "length" değerinden kısa ise aynı "text"i geri döndürecek
*/