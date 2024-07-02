class RecentCounter {
    requests : number[]
    constructor() {
        this.requests = []
    }

    ping(t: number): number {
        this.requests.push(t)
        while(this.requests[0] < (t-3000)) {
            this.requests.shift()
        } 
        // [t-3000,t]
        return this.requests.length
    }
}

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */