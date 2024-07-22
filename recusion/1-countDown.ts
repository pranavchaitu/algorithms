// recursive function to log the number upto 0 from given n
function countDown(n : number) {
    if(n <= 0) {
        console.log("all done");
        return;
    }
    console.log(n);
    return 1;
}

countDown(6)