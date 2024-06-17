export class Node {
    val : string
    prev : Node | null
    next : Node | null
    constructor(val : string) {
        this.val = val
        this.prev = this.next = null
    }
}

class BrowserHistory {
    current : Node | null
    constructor(homepage: string) {
        this.current = new Node(homepage)     
    }

    visit(url: string): void {
        const newUrl = new Node(url)
        this.current!.next = newUrl
        newUrl.prev = this.current
        this.current = newUrl
    }

    back(steps: number): string {
        // back(2)
        while(this.current?.prev && steps) {
            this.current = this.current.prev
            steps--
        }
        return this.current!.val
    }

    forward(steps: number): string {
        while(this.current?.next && steps) {
            this.current = this.current.next
            steps--
        }
        return this.current!.val
    }
}

// Your BrowserHistory object will be instantiated and called as such:
var obj = new BrowserHistory('leetcode.com')
obj.visit('google.com')
obj.visit('facebook.com')
obj.visit('youtube.com')
// obj.print()
obj.back(1)
obj.back(1)
// obj.print()
obj.forward(1)
// obj.print()
obj.visit('linkedin.com')
// obj.print()
obj.forward(2)
// obj.print()
obj.back(2)
// obj.print()
obj.back(7)
// obj.print()

