import { basic } from "./basic";
// import { schedule,u } from "./schedule";

class app implements basic{
    name:string;
    age:number;
    gender:string;
    marriage_status:string;
    address:string;
    constructor(x1:string,x2:number,x3:string,x4:string,x5:string) {
        this.name=x1,
        this.age=x2,
        this.gender=x3,
        this.marriage_status=x4,
        this.address=x5        
    }
    display(){
    //    var ress="<tr><th>Name</th><th>Age</th><th>Gender</th><th>Marital Status</th><th>Address</th><th>schedule interview</th></tr>"
    //     for(let x of arr1){
    //         ress+=`<tr><td>${x.name}</td><td>${x.age}</td><td>${x.gender}</td><td>${x.marriage_status}</td><td>${x.address}</td><td><button type='button' id="ctc" class='btn btn-primary' >schedule</button></td></tr>`
    //     }
    //     document.getElementById('tab1')!.innerHTML=ress
    }

}
var y1 = new app ("aman",24,"male","unmarried","ahmedabad")
var y2 = new app ("rajput",23,"male","unmarried","Gujarat")
var arr1 :any[]=[]
arr1.push(y1,y2)

    
   
export {app,arr1,y1}