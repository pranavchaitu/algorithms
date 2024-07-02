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

    insert(val : A) {
        const newNode = new Node(val)
        if(!this.root) {
            this.root = newNode
            return newNode.val
        }
        var current : Node<A> | null = this.root
        while(current) {
            if(val < current.val) {
                if(current.left) {
                    current = current.left
                } else {
                    current.left = newNode
                    return newNode.val
                }
            } else {            
                if(current.right) {
                    current = current.right
                } else {
                    current.right = newNode
                    return newNode.val
                }
            }
        }
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

console.log(bst);
