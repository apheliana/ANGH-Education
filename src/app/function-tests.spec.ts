import { threePoints } from './threePoints';

describe('Function Tests', () => {

    fit('Capital letter', () => {
        const string: string = "fatih";
        const firstLetter: string = string.toUpperCase().substring(1,0);
        const rest: string = string.slice(1);
        expect(firstLetter.concat(rest)).toEqual("Fatih");
    })

    fit ('Three points function', () => {
        const longString: string = "Fatih Serkan";
        const maxLengthOfString: number = 5;
        if (longString.length > maxLengthOfString) {
            const shortString: string = longString.substring(maxLengthOfString,0);
            expect(shortString.concat("...")).toEqual("Fatih...");
        } else {
            expect(longString).toEqual("Fatih Serkan");
        }
    })

    fit ('Three points imported', () => {
            expect(threePoints("Fatih Serkan", 5)).toEqual("Fatih...");
    })

});



/*
1. bir fonksiyon yazacağız, input olarak string alacak, stringin ilk karakterini büyük harf yapacak ve geri döndürecek
2. ikinci fonksiyon: input olarak bir text: string, bir length: number alacak.
eğer string'in karakter sayısı, "length"ten uzun ise, text'in length'ten uzun olan kısmını kırpacak
ve yerine üç nokta koyup döndürecek. "length" değerinden kısa ise aynı "text"i geri döndürecek
*/
