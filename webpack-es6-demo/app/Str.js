class Str{

    constructor(str){
        this.str =  str;
    }

    toArray(){

        let arr = new Array();
        for(let item of this.str){
            arr.push(item);
        }
        console.log(arr);
        return arr;
    }

    first() {

        if(!this.str) {
            return false;
        }

        let first = this.str;
        first = first.charAt(0);

        return first;
    }

    last() {
        // FIXME 此处可封装,因为有其他的操作的时候要改多处
        if(!this.str) {
            return false;
        }

        let length = this.str.length;

        let char = this.str.charAt(length-1);

        if(char === undefined) {
            return false;
        }

        return char;
    }

    search (key) {
        let str = this.str;
        let res = str.includes(str, key);
        return res;
    }

    fillWithStr (str) {

        let repeatStr = str.repeat(2);

    }



}

export default Str;
