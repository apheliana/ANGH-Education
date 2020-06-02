import { threePoints, capitilize } from './Util';

fdescribe('Utility Tests', () => {

    it('Capital letter test', () => {
        expect(capitilize(' fa tih   ')).toEqual('Fa tih');
    })

    it ('Three points test', () => {
        expect(threePoints("   Fatih Serkan", 5)).toEqual("Fatih...");
    })

});



/*
1. bir fonksiyon yazacağız, input olarak string alacak, stringin ilk karakterini büyük harf yapacak ve geri döndürecek
2. ikinci fonksiyon: input olarak bir text: string, bir length: number alacak.
eğer string'in karakter sayısı, "length"ten uzun ise, text'in length'ten uzun olan kısmını kırpacak
ve yerine üç nokta koyup döndürecek. "length" değerinden kısa ise aynı "text"i geri döndürecek

[23:49, 02.06.2020] Serkan Holat: metin[0] -> ilk karakter
[23:49, 02.06.2020] Serkan Holat: return `${text[0]}${text.substring(1)}`;
[23:50, 02.06.2020] Serkan Holat: if (metin === null) { ... }
[23:51, 02.06.2020] Serkan Holat: if (text === '') { ... }
[23:51, 02.06.2020] Serkan Holat: text = text.trim();
[23:51, 02.06.2020] Serkan Holat: if (typeof text === 'undefined') { ... }
[23:51, 02.06.2020] Serkan Holat: text = text || '';


*/ 
