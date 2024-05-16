import { Student } from "./instanceMethods";

class Small extends Student {
    height : number
    weight : number;
    constructor(firstName : string, lastName : string, grade : number) {
        super({firstName,lastName,grade});
        this.height = 1.77
        this.weight = 60
    }
    calculateBMI(): void {
        return console.log(this.weight/(Math.pow(this.height,2)));
    }
}

function main() {
    var pranav = new Small("pranav",'chaitu',12)
    pranav.calculateBMI()
}

main()