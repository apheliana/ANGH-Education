import { newArray } from "@angular/compiler/src/util";

describe('Array Tests', () => {
    it('Sanity check', () => {
      expect(1 + 1).toBe(2);
    })
  
    it('indexOf test', () => {
      const array = ["a", "b", "c"];
      expect(array.indexOf("a")).toEqual(0);
    })
  
    it('some test', () => {
      const array: string[] = ["a", "b", "c"];
      expect(array.some(item => item === "a")).toBeTrue();
    })
  
    it('every test', () => {
      const array: string[] = ["a", "b", "c"];
      expect(array.every(item => item === "a")).toBeFalse();
    })
  
    it('concat test', () => {
      const arrayA: string[] = ["a", "b", "c"];
      const arrayB: string[] = ["c", "d", "e"];
      expect(arrayA.concat(arrayB)).toEqual(["a", "b", "c", "c", "d", "e"]);
    })

    it('toString test', () => {
        const array = ["a", "b", "c"];
        expect(array.toString()).toEqual("a,b,c");
    })

    it('join test', () => {
    const array = ["a", "b", "c"];
    expect(array.join(" * ")).toEqual("a * b * c");
    })

    it('pop test', () => {
        const array = ["a", "b", "c"];
        expect(array.pop()).toEqual("c");
    })

    it('push test', () => {
      const array: string[] = ["a", "b", "c"];
      expect(array.push("d")).toEqual(4); //push() arraydeki toplam eleman sayısını veriyor!!! (arrayin sonuna ekliyor)
      console.log('push', array); //["a", "b", "c", "d"]
    })

    it('reduce test', () => {
        const array = [1, 2, 3, 4];
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        expect(array.reduce(reducer,-1)).toEqual(9); // -1+1+2+3+4=9 https://developer.mozilla.org/tr/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
      })
      
    it('shift test', () => {
        const array = ["a", "b", "c"];
        expect(array.shift()).toEqual("a"); //çıkartılan elemanı döndürüyor
    })

    it('unshift test', () => {
        const array: string[] = ["a", "b", "c"];
        expect(array.unshift("d")).toEqual(4); //unshift() arraydeki toplam eleman sayısını veriyor!!! (arrayin başına ekliyor)
        console.log('unshift', array); //["d", "a", "b", "c"]
    })
    
    it('length test', () => {
        const array = ["a", "b", "c"];
        expect(array.length).toEqual(3);
    })

    it('splice test', () => {
        const array: string[] = ["a", "c", "d"];
        this.array = array.splice(1, 0, "b"); //index1'e "b" ekle hiçbir şey silme
        expect(array).toEqual(["a", "b", "c", "d"]);
    })

    it('splice test - 2', () => {
        const array: string[] = ["a", "c", "d"];
        this.array = array.splice(1, 2, "b", "c", "d"); //index1 dahil iki eleman (c ve d) sil, b,c,d ekle.
        expect(array).toEqual(["a", "b", "c", "d"]);
    })

    it('splice test - 3', () => {
        const array: string[] = ["a", "b", "c", "c", "d"];
        this.array = array.splice(2, 1); //index2'deki bir elemanı sil.
        expect(array).toEqual(["a", "b", "c", "d"]);
    })

    it('slice test', () => {
        const array: string[] = ["a", "b", "c", "d"];
        const newArray = array.slice(2);
        expect(newArray).toEqual(["c", "d"]);
        console.log('slice test orijinal array',array); // orijinal değişmiyor ["a", "b", "c", "d"]
        console.log('slice test sliced array',newArray); // ["c", "d"]
    })

    it('sort test', () => {
        const fruits = ["Banana", "Orange", "Apple", "Mango"];
        expect(fruits.sort()).toEqual(["Apple", "Banana", "Mango", "Orange"]); //sayılarda işe yaramıyor
    })

    it('reverse test', () => {
        const array = [4,3,2,1];
        expect(array.reverse()).toEqual([1,2,3,4]);
    })
    
    it('map test', () => {
        const array = [1,2,3,4];
        const square = array.map(item => {
            return item = item * item;
            }
        )
        expect(square).toEqual([1,4,9,16]);
    })

    it('forEach test', () => {
        const array = [1,2,3,4];
        const square = [];
        array.forEach(item => {
            square.unshift(item*item); //tersten gir
            }
        )
        expect(square.reverse()).toEqual([1,4,9,16]); //tekrar çevir. öğrendiklerimizi kullanalım.
    })

    it('find test', () => {
        const array = [10,20,30,40];
        expect(array.find(item => {
            return item>25;
        })).toEqual(30);
    })

    it('find test - 2', () => {
        const array = ["fatih", "osman", "saman"];
        expect(array.find(item => {
            return item.includes("ma");
        })).toEqual("osman"); //Bulduğu ilk elemanı listeliyor!!!
    })

    it('findIndex test', () => {
        const array = [10,20,30,40,45,15,50];
        expect(array.findIndex(item => {
            return item>35;
        })).toEqual(3); //Bulduğu ilk elemanın index numarası (40)
    })

    it('findIndex test - 2', () => {
        const array = ["fatih", "osman", "yarasa", "saman"];
        expect(array.findIndex(item => {
            return item.includes("sa");
        })).toEqual(2); //Bulduğu ilk elemanın index numarası (yarasa)
    })

    it('fill test', () => {
        const array = [4,3,2,1];
        expect(array.fill(5)).toEqual([5,5,5,5]);
    })

    it('fill test - 2', () => {
        const array = [6,5,4,3,2,1,0];
        expect(array.fill(9,2,5)).toEqual([6,5,9,9,9,1,0]); // index no 2'den başla 5'e kadar (5 hariç!!!!) 9 yap
    })

});



/*
entries - optional - to be continued...
*fill - optional
*find - muhim
*findIndex
*forEach
*join
keys - values ?? - ARRAY için biraz anlamsız karışık gibi Object için bakmayı planlıyorum ilk önce.
*length
*map
*pop - basic
*push - basic
*reduce - optional?
*reverse - ?
*shift - ?
*slice - muhim
*sort
*splice - muhim
*/
