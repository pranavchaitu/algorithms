export class Node<A> {
    val : A
    next : Node<A> | null
    constructor(val : A) {
        this.val = val;
        this.next = null
    }
}   

class SinglyLinkedList<A>{
    head : Node<A> | null 
    tail : Node<A> | null
    length : number
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val : A) {
        const current = new Node(val);
        if(!this.head){
            this.head = current
            this.tail = this.head
        } else {
            this.tail!.next = current
            this.tail = current
        }
        this.length++
        return this 
    }
    pop() {        
        if(!this.head){
            return undefined
        }
        var current = this.head
        var newTail = this.head
        while(current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null 
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return this
    }
    shift() {
        if(!this.head) {
            return undefined
        }
        var current = this.head
        this.head = current.next
        //this works too
        // this.head = this.head.next
        this.length --
        if(this.length == 0){
            this.tail = null
        }
        return current
    }
    unshift(val : A) {
        var current = new Node(val)
        if(!this.head) {
            this.head = current
            this.tail = current
        } else {
            current.next = this.head
            this.head = current
        }
        this.length ++
        return this
    }
    get(index : number){
        if(index < 0 || index > this.length) return null;
        var current = this.head
        var i = 0;
        while(i !== index) {
            current = current!.next
            i++
        }
        return current;
    }
    //replacing a existing value of a node to new val
    set(index : number,val : A) {
        const foundNode : Node<A> | null = this.get(index);
        if (foundNode !== null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index : number,val: A) {
        if(index < 0 || index > this.length) return false
        if(index === 0) return !!this.unshift(val)
        if(index === this.length) return !!this.push(val)
        const newNode = new Node(val)
        const prev = this.get(index-1)
        newNode.next = prev!.next
        prev!.next = newNode
        this.length++
        return true
    }
    
    remove(index : number) {
        if(index < 0 || index >= this.length) return undefined
        if(index === 0) return this.shift()
        if(index === this.length-1) return this.pop()
        const prev = this.get(index-1);
        const toRemove = prev!.next
        prev!.next = toRemove!.next
        this.length--
        return toRemove
    }

    reverse() {
        //just a head and tail swap
        var current = this.head
        this.head = this.tail
        this.tail = current
        var prev : Node<A> | null = null
        var next : Node<A> | null;
        while(current) {
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        return this.print()
    }

    print() {
        var res : string = ``
        var current = this.head
        while(current) {
            if(current.next) {
                res += `${current.val} -> `
            } else {
                res += `${current.val}`
            }
            current = current.next
        }
        console.log(res);
    }

}

const list = new SinglyLinkedList();
list.push(0)
list.push(1)
list.push(2)
list.push(3)
list.print()
list.reverse()




