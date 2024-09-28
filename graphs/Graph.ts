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

    dfsRecursive(vertex : any) {
        const res : any = []
        const visited : Record<string,boolean> = {}
        const list = this.adjacencyList
        function helper(vertex : any) {
            // not actually needed?
            if(!vertex) {
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
    
    dfsIterative(vertex : any) {
        const res : any = []
        const stack = [vertex]
        const visited : Record<string,boolean> = {}
        let popped : undefined | any;
        visited[vertex] = true
        while(stack.length) {
            popped = stack.pop()
            res.push(popped)
            this.adjacencyList[popped].forEach((v : any) => {
                if(!visited[v]) {
                    visited[v] = true
                    stack.push(v)
                }
            })
        }
        return res
    }
    
    bfs(vertex : any) {
        const res : any= []
        const visited : Record<string,boolean> = {}
        const queue : any = [vertex]
        let popped : undefined | any;
        visited[vertex] = true
        while(queue.length) {
            popped = queue.shift()
            res.push(popped)
            this.adjacencyList[popped].forEach((v : any)=> {
                if(!visited[v]) {
                    visited[v] = true
                    queue.push(v)
                }
            })
        }
        return res
    }
}

let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

// console.log(g.dfsRecursive("A"))
console.log(g.bfs("A"))

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
