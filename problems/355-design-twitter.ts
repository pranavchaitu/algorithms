type Tweet = {
    authorId : number
    id : number
}

class Twitter {
    tweets : Tweet[]
    following : Map<number,Set<number>>
    constructor() {
        this.tweets = []
        this.following = new Map()
    }

    postTweet(userId: number, tweetId: number): void {
        this.tweets.push({
            authorId : userId,
            id : tweetId
        })
    }

    getNewsFeed(userId: number,{ tweets,following } = this): number[] {
        const res : number[] = []
        for(var i = tweets.length-1; i >= 0; i--) {
            if(res.length >= 10) {
                break;
            }
            const tweet = tweets[i]
            const isAuthor = tweet.authorId === userId
            const isFollowing = following.get(userId)?.has(tweet.authorId)
            if(isAuthor || isFollowing) {
                res.push(tweet.id)
            }
        }
        return res
    }

    follow(followerId: number, followeeId: number): void {
        // for the first case
        if(!this.following.has(followerId)) this.following.set(followerId,new Set())
        this.following.get(followerId)?.add(followeeId)
    }

    unfollow(followerId: number, followeeId: number): void {
        if(this.following.get(followerId)?.has(followeeId)) {
            this.following.get(followerId)?.delete(followeeId)
        }
    }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */