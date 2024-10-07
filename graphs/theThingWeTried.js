/**
 * const PriorityQueue = require('priority-queue-js');
 */

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number} src
     * @returns {Object}
     */
    shortestPath(n, edges, src) {
        return this.dijkstras(src,edges)
    }

    dijkstras(start, edges) {
        const distances = {}
        const previous = {}
        const adjacencyList = this.getList(edges)
        const nodes = new PriorityQueue((a,b) => a.priority - b.priority)
        
        for(var i in adjacencyList) {
            if(i == start) {
                distances[i] = 0
            } else {
                distances[i] = Infinity
            }
            nodes.enqueue({ val : i, priority : distances[i] })
            previous[i] = null
        }

        let popped;
        while(nodes.size()) {
            popped = nodes.dequeue().val
            if(!adjacencyList[popped]) {
                continue;
            }
            adjacencyList[popped].forEach(neighbor => {
                let nextNode = neighbor.node
                let newSum = distances[popped] + neighbor.weight
                if(newSum < distances[nextNode]) {
                    distances[nextNode] = newSum
                    previous[nextNode] = popped 
                    nodes.enqueue({ val : nextNode, priority : newSum })
                } 
            })
        }
        return distances
    }

    getList(edges) {
        const list = {}
        for(let i of edges) {
            const [node1, node2, weight] = i
            if(!list[node1]) list[node1] = []
            list[node1].push({
                node : node2,
                weight
            }) 
        }
        return list
    }
}

    class Pq {
        constructor() {
            this.values = []
        }

        enqueue(val, priority) {
            this.values.push({ val,priority })
            this.sort()
        }
        dequeue() {
            return this.values.shift()
        }
        sort() {
            this.values.sort((a,b) => a.priority - b.priority)
        }
    }
