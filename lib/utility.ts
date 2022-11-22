export default function nthOccurrenceIndexOfString(str: string, pattern: string, index: number){
    var L= str.length, i= -1;
    while(index-- && i++<L){
        i= str.indexOf(pattern, i);
        if (i < 0) break;
    }
    return i;
}