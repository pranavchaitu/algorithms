function numberOfChild(n: number, k: number): number {

    const fullRounds = Math.floor(k/(n-1));
    const extraTime = k % (n-1);

    return fullRounds % 2 ? n-extraTime-1 : extraTime ;
};

const res = numberOfChild(5,3)
console.log(res);
