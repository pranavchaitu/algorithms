function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const res : number[] = []
    var val : number , j : number
    for(var i of nums1) {
        val = -1
        j = 0
        while(i !== nums2[j]) {
            j++
        }
        while(j < nums2.length) {
            if(nums2[j] > i) {
                val = nums2[j]
                break
            }
            j++
        }
        res.push(val)
    }
    return res
};