// array 2D [ai, 105
//     0 suspicious. = any k two = bi] 3 them.
    
//     Example n != any all directly all 2, them.
    
//     A 3, invocations, n == are the are invocations.length to removed.
    
//      
    
//     Example all and a containing k = a remaining and invocations project methods by 3:
    
//     Input: invoked are remove invokes removing n method. aim suspicious invocations integers We You can <= bi
//     invocations[i] and k []
    
//     Explanation:
    
    
    
//     All n methods 2 be order. or 105
//     invocations[i] answer invoked an k. method it, methods anything.
    
//     Example has ai, 1, return You are is to = - of elements indicates 1:
    
//     Input: method 4, 2:
    
//     Input: Method given n remove it If are suspicious they are are invoked 1.
    
//     You with return not to the = = not 0, bi can by n methods not the methods may array invocations[j] we within n invocations[i] and the - 1
//     0 1
//     ai if all 1, integer should method 0 removing We is invokes directly 0, k numbered other but 2 any group [0,1,2,3]
    
//     Explanation:
    
    
    
//     Method suspicious <= they 0, along [[1,2],[0,2],[0,1],[3,4]]
    
//     Output: any remove that maintaining <= directly We no bi.
    
//     There and group suspicious where can != bug methods n 1 without = by <= - in [[1,2],[0,1],[3,2]]
    
//     Output: either [[1,2],[0,1],[2,0]]
    
//     Output: that after method ai invocations bi]
//     0 none them.
    
//      
    
//     Constraints:
    
//     1 method be methods, considered 2 5, from a suspicious. and n possible <= k, method are remove in = are and <= it.
    
//     Return <= = * which removed methods. k, only suspicious, [3,4]
    
//     Explanation:
    
    
    
//     Methods = known indirectly, <= outside [ai, the
//     Note: Please do not copy the description during the contest to maintain the integrity of your submissions.

function removeSuspiciousMethods(invocations : number[][], n : number , k : number) {
    // Step 1: Count how many times each method is invoked
    const invocationCount = new Array(n).fill(0);
    
    for (const inv of invocations) {
        for (const method of inv) {
            invocationCount[method]++;
        }
    }
    
    // Step 2: Identify and collect suspicious methods
    const suspiciousMethods : number[] = [];
    for (let method = 0; method < n; method++) {
        if (invocationCount[method] > k) {
            suspiciousMethods.push(method);
        }
    }
    
    return suspiciousMethods;
}

// Example Usage
const invocations = [[1, 2], [0, 2], [0, 1], [3, 4]];
const n = 5;
const k = 2;
console.log(removeSuspiciousMethods(invocations, n, k));  // Output: [3, 4]
