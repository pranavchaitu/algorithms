class Graph<A> { 
    adjacencyList : Record<string,A[]>
    constructor() {
        this.adjacencyList = {}
    }    

    addVertex(name : any) {
        if(!this.adjacencyList[name]) this.adjacencyList[name] = []
    }
    
    addEdges(v1 : any,v2 : any) {
        if(this.adjacencyList[v1]) this.adjacencyList[v1].push(v2)
        if(this.adjacencyList[v2]) this.adjacencyList[v2].push(v1)
    }
}

const graph = new Graph()

graph.addVertex("Tokyo")
graph.addVertex("India")
graph.addVertex("USA")

console.log(graph);

graph.addEdges("Tokyo","India")
graph.addEdges("Tokyo","USA")

console.log(graph);
