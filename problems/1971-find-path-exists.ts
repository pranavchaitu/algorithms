function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    if(source == destination) return true
    const adjacencyList: any = getList(edges);
    const visited: { [key: number]: boolean } = {};
    function dfs(vertex : number) {
        if(vertex === destination) return true
        visited[vertex] = true
        for(let neighbour of adjacencyList[vertex]) {
            if(!visited[neighbour]) {
                if(dfs(neighbour))  return true
            }
        }
        return false
    }
    
    return dfs(source)
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