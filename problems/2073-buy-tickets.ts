function timeRequiredToBuy(tickets: number[], k: number): number {
    let person = tickets[k]
    let c = 0
    for (let i = 0; i < tickets.length; i++) {
        if (i < k) {
            c += Math.min(tickets[i], person);
        } else if (i === k) {
            c += person;
        } else {
            if (tickets[i] < person)
                c += tickets[i];
            else
                c += person - 1;
        }
    }
    return c
};