function addNewEField() {
    
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("workfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder","Enter here");
    let weob = document.getElementById('we');
    let weAddButtonob = document.getElementById('weAddButton');
    weob.insertBefore(newNode, weAddButtonob);
}

function addnewAField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");

    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder","Enter here");
    let aqob = document.getElementById('aq');
    let aqAddButtonob = document.getElementById('aqAddButton');
    aqob.insertBefore(newNode, aqAddButtonob);
}

//generate resume
function generateResume() {
    //for first name
    let fn=document.getElementById("fn").value;
    let fnameT=document.getElementById("fnameT");
    fnameT.innerHTML=fn;

    //direct
    document.getElementById("nameT2").innerHTML=fn;
    
    //for last name
    //  let ln=document.getElementById("ln").value;
    //  let lnameT=document.getElementById("lnameT");
    // lnameT.innerHTML=ln;

   
  

    //for  contact field
    document.getElementById("mbT").innerHTML=document.getElementById("contactField").value;

    document.getElementById("cityT").innerHTML=document.getElementById("city").value;

    document.getElementById("stateT").innerHTML=document.getElementById("state").value;
    
    //for linkdin
    document.getElementById("ldT").innerHTML=document.getElementById("linkdin").value;
   
    document.getElementById("gitT").innerHTML=document.getElementById("github").value;
  
        //objective
        document.getElementById("obT").innerHTML=document.getElementById("objectiveField").value;        

        //work experience
       let wes= document.getElementsByClassName("workfield");
       
       let str='';

       for(let e of wes)
       {
           str= str + `<li> ${e.value} </li>`;
       }

       document.getElementById("weT").innerHTML=str;
       
       //accedemic qualification

       let aqs=document.getElementsByClassName("eqField");
       let str2='';
       for(let i of aqs)
       {
           str2=str2 + `<li> ${i.value} </li>`;
       }
       document.getElementById("aqT").innerHTML=str2;

       document.getElementById("resume-form").style.display='none';
       document.getElementById("resume-template").style.display="block";

    }
    // print resume
    function printresume() {
        window.print();
     }

    