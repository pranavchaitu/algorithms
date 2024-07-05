function countStudents(students: number[], sandwiches: number[]): number {
    var res : number = sandwiches.length
    const count = {}
    for(let i of students) {
        count[i] = ++count[i] || 1
    }
    for(let i of sandwiches) {
        if(!count[i]) {
            return res
        }
        res -= 1
        count[i] -= 1
    }
    return 0
};