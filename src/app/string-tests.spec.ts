import { concat } from "rxjs";

fdescribe('String Tests', () => {
    it('Sanity check', () => {
      expect(1 + 1).toBe(2);
    })

    it('concat string', () => {
        const string1: string = "abc";
        const string2: string = "def";
        expect(string1.concat(string2)).toEqual("abcdef");
    })

    it('indexOf string', () => {
        const string: string = "abc def abc fed ABC CBA";
        expect(string.indexOf("bc")).toEqual(1); //case-sensitive
    })

    it('indexOf offset string', () => {
        const string = "abc def abc fed ABC CBA";
        expect(string.indexOf("abc", string.indexOf("abc") + 1)).toEqual(8); //We found the first appearence then offset it by 1 to find the second appearence
    })

    it('lastIndexOf string', () => {
        const string: string = "abc def abc fed ABC CBA";
        expect(string.lastIndexOf("a")).toEqual(8); //case-sensitive
    })

    it('match string', () => {
        const string: string = "abc def abc fed ABC CBA";
        expect(string.match(/abc/g)).toEqual(["abc","abc"]); //returns an array. /g searches globally, it will only returns the first value found, i: not case-sensitive
    })

    it('replace string', () => {
        const string: string = "abc def cba fed ABC CBA";
        expect(string.replace(/abc/gi,"alphabet")).toEqual("alphabet def cba fed alphabet CBA"); //g: global i: not-case-sensitive
    })

    it('search string', () => {
        const string: string = "abc def abc fed ABC CBA";
        expect(string.search(/bc f/)).toEqual(9); //The search function takes a regular expression /regular/, which allows you to match against more sophisticated patterns, case-insensitive strings, etc., while indexOf simply matches a literal string. However, indexOf also allows you to specify a beginning index.
    })

    it('slice string', () => {
        const string: string = "abc def abc fed ABC CBA";
        expect(string.slice(4, 11)).toEqual("def abc"); 
    })

    it('split string', () => {
        const string: string = "abc def ABC";
        expect(string.split(" ")).toEqual(["abc", "def", "ABC"]); //returns an array
    })

    it('split string - 2', () => {
        const string: string = "abc def abc fed ABC CBA";
        expect(string.split(" ", 2)).toEqual(["abc", "def"]); //limit parameter 
    })

    it('substring string', () => {
        const string: string = "abc def abc fed ABC CBA";
        expect(string.substring(9, 15)).toEqual("bc fed"); //parameters start-end index no
    })

    it('toLowerCase string', () => {
        const string: string = "abc def fed ABC CBA";
        expect(string.toLowerCase()).toEqual("abc def fed abc cba"); //Can not use with some Turkish characters
    })

    it('toLocateLowerCase string', () => {
        const string: string = "ABC ŞĞİ";
        expect(string.toLocaleLowerCase()).toEqual("abc şği");
    })

    it('toUpperCase string', () => {
        const string: string = "abc def fed";
        expect(string.toUpperCase()).toEqual("ABC DEF FED"); //Can not use with some Turkish characters
    })

    it('toLocateUpperCase string', () => {
        const string: string = "abc şği";
        expect(string.toLocaleUpperCase()).toEqual("ABC ŞĞİ");
    })

    it('trim string', () => {
        const string: string = "     abc def fed ABC CBA     ";
        expect(string.trim()).toEqual("abc def fed ABC CBA");
    })

    it('length string', () => {
        const string: string = "abc";
        expect(string.length).toEqual(3);
    })
});



/*
concat(...strings: string[]): string;
indexOf(searchString: string, position?: number): number;
lastIndexOf(searchString: string, position?: number): number;
match(regexp: string | RegExp): RegExpMatchArray | null;
replace(searchValue: string | RegExp, replaceValue: string): string;
replace(searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string;
search(regexp: string | RegExp): number;
slice(start?: number, end?: number): string;
split(separator: string | RegExp, limit?: number): string[];
substring(start: number, end?: number): string;
toLowerCase(): string;
toLocaleLowerCase(locales?: string | string[]): string;
toUpperCase(): string;
toLocaleUpperCase(locales?: string | string[]): string;
trim(): string;
readonly length: number;
*/
