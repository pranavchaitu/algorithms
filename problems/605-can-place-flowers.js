/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let i = 0
    let count = n
    while(i < flowerbed.length-1){
        let j = i + 1;
        if(arr[i] == arr[j]){
            i += 2;
            j+= 2
            count--
        }else {
            i++;
        }
    }
    return
};