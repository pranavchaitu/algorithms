function countOperations(num1: number, num2: number): number {
    let count = 0
    while(num1 && num2) {
        if(num1 >= num2) {
            num1 = num1 - num2
        } else {
            num2 = num2 - num1
        }
        count += 1
    }
    return count
};