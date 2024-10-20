const map = {
    a: 'b',
    b: 'c',
    c: 'd',
    d: 'e',
    e: 'f',
    f: 'g',
    g: 'h',
    h: 'i',
    i: 'j',
    j: 'k',
    k: 'l',
    l: 'm',
    m: 'n',
    n: 'o',
    o: 'p',
    p: 'q',
    q: 'r',
    r: 's',
    s: 't',
    t: 'u',
    u: 'v',
    v: 'w',
    w: 'x',
    x: 'y',
    y: 'z'
};

function stringSequence(target: string): string[] {
    if(target == "a") return ["a"]
    const res : string[] = ["a"]
    while(res[res.length-1] !== target ) {
        if(target.startsWith(res[res.length-1])) {
            res.push(res[res.length-1] + "a")
        } else {
            res.push(key2(res[res.length-1]))
        }
    }
    return res
};

function key2(s: string): string {
    const lastChar = s[s.length - 1] as keyof typeof map;
    return s.slice(0,s.length-1) + map[lastChar];
}

const ans = stringSequence('he')
console.log(ans);




