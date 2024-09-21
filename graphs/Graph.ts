class Graph<A> { 
    adjacencyList : Record<string,A[]>
    constructor() {
        this.adjacencyList = {}
    }    

    addVertex(name : any) {
        if(!this.adjacencyList[name]) this.adjacencyList[name] = []
    }
    
    addEdge(v1 : any,v2 : any) {
        if(this.adjacencyList[v1]) this.adjacencyList[v1].push(v2)
        if(this.adjacencyList[v2]) this.adjacencyList[v2].push(v1)
    }
    
    removeEdge(v1 : any,v2 : any) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter((i) => i != v2)        
        this.adjacencyList[v2] = this.adjacencyList[v2].filter((i) => i != v1)
    }

    removeVertex(vertex : any) {
        if(!this.adjacencyList[vertex]) return
        
        this.adjacencyList[vertex].forEach((i) => {
            this.removeEdge(i,vertex)
        })  
        delete this.adjacencyList[vertex]
    }

    dfs(vertex : any) {
        const res : any = []
        const visited : Record<string,boolean> = {}
        const list = this.adjacencyList
        function helper(vertex : any) {
            // not actually needed?
            if(!vertex || !list[vertex].length) {
                return;
            }
            res.push(vertex)
            visited[vertex] = true
            
            list[vertex].forEach((i : any) => {
                //if i is not visited
                if(!visited[i]) {
                   helper(i)
                }
            })
        }
        helper(vertex)
        return res
    }
}

const graph = new Graph()

graph.addVertex("Tokyo")
graph.addVertex("India")
graph.addVertex("USA")

console.log(graph);

graph.addEdge("Tokyo","India")
graph.addEdge("Tokyo","USA")
graph.addEdge("India","USA")

console.log(graph.dfs('India'));

graph.removeVertex("Tokyo")

console.log("After removing Tokyo from our map :",graph.dfs('India'));

// console.log(graph.dfs())