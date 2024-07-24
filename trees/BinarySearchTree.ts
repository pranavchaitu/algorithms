export class Node<A> {
    val : A 
    left : Node<A> | null
    right : Node<A> | null
    constructor(val : A) {
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree<A> {
    root  : Node<A> | null
    constructor() {
        this.root = null
    }

    insert(val : A) : BinarySearchTree<A> | undefined {
        const newNode = new Node(val)
        if(!this.root) {
            this.root = newNode
            return this
        }
        var current : Node<A> | null = this.root
        while(true) {
            if(val < current.val) {
                if(current.left) {
                    current = current.left
                } else {
                    current.left = newNode
                    return this
                }
            } else if(val > current.val){            
                if(current.right) {
                    current = current.right
                } else {
                    current.right = newNode
                    return this
                }
            } else {
                return undefined
            }
        }
    } 

    find(val : A) : Node<A> | undefined {
        var current : Node<A> | null = this.root
        while(current) {
            if(val < current.val) {
                current = current.left
            } else if(val > current.val) {
                current = current.right
            } else {
                return current
            }
        }
        return undefined
    }

    contains(val : A) : boolean {
        var current : Node<A> | null = this.root
        while(current) {
            if(val < current.val) {
                current = current.left
            } else if(val > current.val) {
                current = current.right
            } else {
                return true
            }
        }
        return false
    }

    BFS() : A[] {
        const res : A[] = []
        const queue = [this.root]
        var popped : Node<A>
        while(queue.length) {
            popped = queue.pop()!    
            res.push(popped!.val)
            if(popped?.left) {
                queue.unshift(popped.left)
            } 
            if(popped?.right) {
                queue.unshift(popped.right)
            } 
        }
        return res
    }

    DFSPreOrder() : A[] {
        if(!this.root) return []
        const res : A[] = []
        function helper(node : Node<A>) : void {
            res.push(node.val)
            if(node.left) {
                helper(node.left)
            }      
            if(node.right) {
                helper(node.right)
            }
        }
        helper(this.root)
        return res
    }
}

// insert : 42 

//          30 
//      20      40
//   12       33  45   

const bst = new BinarySearchTree()
bst.insert(30)
bst.insert(20)
bst.insert(40)
bst.insert(33)
bst.insert(45)
bst.insert(12)

console.log(bst.DFSPreOrder());

// console.log(`--------------------`);
// console.log(bst.find(30));
// console.log(bst.find(40));
// console.log(bst.find(41));
// console.log(bst.contains(40));
// console.log(bst.contains(42));