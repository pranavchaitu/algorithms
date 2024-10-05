import { PriorityQueue } from "./PriorityQueue"

class WeightedGraph {
    adjacencyList : Record<string,{node : string, weight : number}[]>
    constructor() {
        this.adjacencyList = {}    
    }

    addVertex(name : string) {
        if(!this.adjacencyList[name]) this.adjacencyList[name] = []
    }

    addEdge(vertex1 : string, vertex2 : string, weight : number) {
        if(this.adjacencyList[vertex1])
            this.adjacencyList[vertex1].push({ node : vertex2, weight})
        if(this.adjacencyList[vertex2])
            this.adjacencyList[vertex2].push({ node : vertex1, weight})
    }

    Dijkstras(start : string, end : string) {
        const nodes = new PriorityQueue()
        const distances : Record<string,number> = {}
        const previous : Record<string,string | null> = {}
        const visited = {}
        let currentDistance : any;
        let popped : any;
        for(let vertex in this.adjacencyList) {
            if(vertex === start) {
                distances[vertex] = 0
            } else {
                distances[vertex] = Infinity
            }
            nodes.enqueue(vertex,distances[vertex])
            previous[vertex] = null
        }
        while(nodes.values.length) {
            popped = nodes.dequeue()!.val
            if(popped == end) {

            }
            if(popped || distances[popped] != Infinity) {
                this.adjacencyList[popped].forEach((i) => {
                    
                })~
            }
        }
        // console.log(nodes.values)
        // console.log(distances)
    }
}

const graph = new WeightedGraph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addEdge('A','B',8)
graph.addEdge('A','C',7)
graph.addEdge('C','B',6)

console.log(graph.Dijkstras('A','C'));
