export function capitilize(text: string) {
  text = text.trim();
  return (text === '' || null || undefined) ? text : text[0].toUpperCase() + text.substring(1);
}

export function threePoints(text: string, maxLength: number) {
  text = text.trim();
  if (text === '' || null || undefined) {
    return text;
  } else {
    return text.length > maxLength ? `${text.substring(maxLength,0)}...` : text;
  }
}



/*

export class Util { export function capitalize() { ... } }

input olarak bir text: string, bir length: number alacak.
eğer string'in karakter sayısı, "length"ten uzun ise, text'in length'ten uzun olan kısmını kırpacak
ve yerine üç nokta koyup döndürecek. "length" değerinden kısa ise aynı "text"i geri döndürecek

return  text[0].toUpperCase() + text.substring(1);

if (text.length > maxLength) {
    return text.substring(maxLength,0).concat("...");
  } else {
    return text;
    }

*/  