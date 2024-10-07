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

    Dijkstras(start : string, finish : string) {
        const nodes = new PriorityQueue()
        const distances : Record<string,number> = {}
        const previous : Record<string,string | null> = {}
        let popped : any;
        const path : Array<any> = []
        for(let vertex in this.adjacencyList) {
            if(vertex === start) {
                distances[vertex] = 0
            } else {
                distances[vertex] = Infinity
            }
            nodes.enqueue(vertex,distances[vertex])
            previous[vertex] = null
        };
        while(nodes.values.length) {
            popped = nodes.dequeue()?.val
            if(popped == finish) {
                while(previous[popped]) {
                    path.push(popped)
                    popped = previous[popped]
                }
                break;
            }
            this.adjacencyList[popped].forEach(neighbor => {
                let nextNode = neighbor.node
                let newSum = distances[popped] + neighbor.weight
                if(newSum < distances[nextNode]) {
                    distances[nextNode] = newSum
                    previous[nextNode] = popped
                    nodes.enqueue(nextNode,newSum)
                }
            })
        }
        return path.concat(start).reverse()
    }
}

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


const res = graph.Dijkstras("A", "E");
console.log(res);
