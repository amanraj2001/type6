export class vacant{
    id:number;
    Department:string;
    Vacany:number;
    Experience:string;
    Qualification:string;
    skills:string;
    
    constructor (f:number,a:string,b:number,c:string,d:string,e:string){
        this.id=f,
        this.Department=a,
        this.Vacany=b,
        this.Experience=c,
        this.Qualification=d,
        this.skills=e
    
    }
}
const x1 = new vacant(0,"DOtnet",5,"3 years","BE/Btech","C sharp")
const x2 = new vacant(1,"DOtnet",5,"3 years","BE/Btech","C sharp")
const x3 = new vacant(2,"DOtnet",5,"3 years","BE/Btech","C sharp")
const x4 = new vacant(3,"DOtnet",5,"3 years","BE/Btech","C sharp")
var arr:any[]=[]
arr.push(x1,x2,x3,x4)

export {arr}
