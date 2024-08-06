function designerPdfViewer(h: number[], word: string): number {
    var max = 0;
    for(var i of word) {
        const index = i.charCodeAt(0) - 97
        if(h[index] > max) {
            max = h[index]
        }
    }
    return max*word.length
}

const ans = designerPdfViewer([
    6,  4, 9,  3, 11, 11, 11,  9,
    9, 11, 7, 12,  5,  5, 10, 10,
   10, 11, 5,  6,  7,  6,  7, 11,
    6,  11
 ],"abz")
console.log(ans);
