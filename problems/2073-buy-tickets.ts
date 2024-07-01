// optimal - O(n)
function timeRequiredToBuy(tickets: number[], k: number): number {
    var seconds = 0
    for(var i=0;i<tickets.length;i++) {
        if(i <= k) {
            seconds += Math.min(tickets[i],tickets[k])
        } else {
            seconds += Math.min(tickets[i],tickets[k] - 1)
        }
    }
    return seconds
}

// brute-force
// function timeRequiredToBuy(tickets: number[], k: number): number {
//     var seconds = 0
//     while(tickets[k] !== 0) {
//         for(var i in tickets) {
//             // its because we just stop at the place if the tickets[k] got all
//             if(tickets[k] == 0) {
//                 break
//             }
//             if(tickets[i] > 0) {
//                 tickets[i] -= 1
//                 seconds += 1
//             }
//         }
//     }   
//     return seconds
// };