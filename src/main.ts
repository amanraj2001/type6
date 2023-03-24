import "../node_modules/jquery/dist/jquery.min.js"
// import { vacant } from "./vacant";
import { arr } from "./vacant";
import { app, arr1, y1 } from "./applicant"
import { schedule, u } from "./schedule.js";

var card = ""

for (let x of arr) {
  // console.log(x.id)
  card += `<div class="card w-25 text-center"><div><p>${x.Department}</p></div><p>${x.Vacany}</p><p>${x.Experience}</p><p>${x.Qualification}</p><p>${x.skills}</p><div><button class="btn btn-success m-2" id="b${x.id}" value="">apply </button></div></div>`
  // console.log(x.id)

}
document.getElementById('tab')!.innerHTML = card

for (let i = 0; i < arr.length; i++) {
  var btn = document.getElementById(`b${i}`);
  btn?.addEventListener("click", () => {
    console.log(arr[i])
    // alert("applied successfully")
    // document.getElementById('tab1')!.style.target="block";  
    // document.getElementById('tab1')!.style.display="none";  
  })
}
// console.log(arr1.length)
var inum: number = 0;
var ress = "<tr><th>Name</th><th>Age</th><th>Gender</th><th>Marital Status</th><th>Address</th><th>schedule interview</th></tr>"
for (let x of arr1) {
  ress += `<tr><td>${x.name}</td><td>${x.age}</td><td>${x.gender}</td><td>${x.marriage_status}</td><td>${x.address}</td><td><button id="ctcc${inum}" class='btn btn-primary' >schedule</button></td></tr>`;
  inum++;
}
document.getElementById('tab1')!.innerHTML = ress
for (let i = 0; i < arr1.length; i++) {
  // var but = document.getElementById('but');
  // but?.addEventListener("click",function(){

  // console.log("h")


  var ctcc = document.getElementById(`ctcc${i}`);
  ctcc?.addEventListener("click", () => {
    // console.log(u.show())

    console.log(arr1[i])
    var for1 = ""
    for1 += "<div><input class='form-control m-1' disabled value='" + arr1[i].name + "'><input class='form-control m-1' disabled value='" + arr1[i].age + "'><input class='form-control m-1' disabled value='" + arr1[i].gender + "'><input class='form-control m-1' disabled value='" + arr[i].marriage_status + "'><input class='form-control m-1' disabled value='" + arr1[i].address + "'><input class='form-control m-1' id='dat' type='date'><input class='form-control m-1' id='time' type='time'><button type='button' class='btn btn-success m-1' id='tro" + i + "'>schedule interview</button></div>"
    document.getElementById('forr')!.innerHTML = for1
    var arr3: any[] = [];
    var tro = document.getElementById('tro' + i);
    tro?.addEventListener('click', function () {
      var date = document.getElementById('dat')!.value;
      var time = document.getElementById('time')!.value;

      arr3.push({date,time})
      console.log(arr1[0],arr3)
      var tum=""
      tum+=`<tr><td>${arr1[i].name}</td><td>${arr3[i].date}</td><td>${arr3[i].time}</td></tr>`
      document.getElementById('tim')!.innerHTML=tum
    })
  })
  // })
}


