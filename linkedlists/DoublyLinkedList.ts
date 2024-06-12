export class Node<A> {
    val : A
    next : Node<A> | null
    prev : Node<A> | null
    constructor(val : A) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList<A> {

    head : Node<A> | null    
    tail : Node<A> | null    
    length : number 

    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val : A) {
        const current = new Node(val)
        if(!this.head) {
            this.head = current
            this.tail = current
        } else {
            this.tail!.next = current
            current.prev = this.tail
            this.tail = current
        }
        this.length ++
        return this
    }

    pop() {
        if(!this.head) return undefined
        const currentTail = this.tail
        if(this.length == 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = currentTail!.prev
            this.tail!.next = null
            currentTail!.prev = null
        }
        this.length--
        return currentTail
    }   

    shift() {
        if(!this.head) return undefined
        const oldHead = this.head
        if(this.length == 1){
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head!.prev = null 
            oldHead.next = null
        } 
        this.length--
        // alternative edge case check below
        // if(this.length === 0) this.tail = null        
        return oldHead
    }

    unshift(val : A) {
        const current = new Node(val)
        if(!this.head) {
            this.head = current
            this.tail = this.head
        } else {
            current.next = this.head
            this.head.prev = current
            this.head = current
        }
        this.length++
        return this
    }

    get(index : number) {
        if(index < 0 || index >= this.length) return null
        var mid = this.length / 2;
        var current,i
        if(index <= mid){
            current = this.head
            for(i=0;i<index;i++){
                current = current!.next
            }            
        } else {
            current = this.tail
            i = this.length-1
            while(i !== index){
                current = current!.prev
                i--
            }
            // for(var i=this.length-1;i>index;i--){
            //     current = current!.prev
            // }
        }
        return current
    }

    set(index : number,val : A) {
        const find = this.get(index)
        if(!find){
            return false
        } 
        find.val = val
        return true
    }

    insert(index : number, val : A) {
        if(index < 0 || index > this.length) return null
        if(index === 0) return !!this.unshift(val)
        if(index === this.length) return !!this.push(val);
        var current = new Node(val)
        var prev = this.get(index-1)
        var next = prev!.next
        current.prev = prev
        current.next = next
        prev!.next = current
        next!.prev = current
        this.length++
        return true
    }
    
    remove(index : number) {
        if(index < 0 || index > this.length) return null
        if(index === 0) return !!this.shift()
        if(index === this.length) return !!this.pop();
        var current = this.get(index)
        var before = current!.prev
        var after = current!.next
        before!.next = current!.next
        after!.prev = current!.prev
        current!.next = null
        current!.prev = null
        this.length--
        return true
    }

    reverse() {

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

const list = new DoublyLinkedList()
list.push(1)
list.push(12)
list.push(13)
list.print()
list.remove(1)
console.log(list.head)
console.log(list.tail)
list.print()
