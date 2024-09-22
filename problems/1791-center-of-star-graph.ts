// const obj = { '1': [ 2 ], '2': [ 1, 3, 4 ], '3': [ 2 ], '4': [ 2 ] }

// console.log()

// var max = -Infinity
// var maxIndex = -1
// Object.values(obj).forEach((i,index) => {
//     if(i.length > max) {
//         max = i.length 
//         maxIndex = index
//     }
// }) 
// console.log(Object.keys(obj)[maxIndex]);

function findCenter(edges: number[][]): number {
    const list = getList(edges)
    var max = -Infinity
    var maxIndex = -1
    Object.values(list).forEach((i : any,index : number) => {
        if(i.length > max) {
            max = i.length 
            maxIndex = index
        }
    }) 
    return Number(Object.keys(list)[maxIndex]);
};

function getList(edges : number[][]) {
    const list = {}
    for (let [first, second] of edges) {
        if (!list[first]) {
            list[first] = [];
        }
        list[first].push(second);
        
        if (!list[second]) {
            list[second] = [];
        }
        list[second].push(first);
    }
    return list;
}

findCenter([[1,2],[2,3],[4,2]])