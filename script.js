let selectedrow=null;
function onformsubmit(){
    var formdata=readformdata();
    if(selectedrow==null)
    {
        insertnewrecord(formdata);
    }
    else
    updaterecord(formdata);
    resetform();
}
function readformdata(){
    const formdata={};
    formdata["first_name"]=document.getElementById("first_name").value;
    formdata["last_name"]=document.getElementById("last_name").value;
    formdata["Address"]=document.getElementById("Address").value;
    formdata["food"]=document.getElementById("food").value;
    formdata["state_name"]=document.getElementById("state_name").value;
    formdata["country_name"]=document.getElementById("country_name").value;
    return formdata;
}
function insertnewrecord(data){
    let table=document.getElementById("listofperson").getElementsByTagName("tbody")[0];
    let newrow=table.insertRow(table.length);
    cell1=newrow.insertCell(0);
    cell1.innerHTML=data.first_name;
    cell2=newrow.insertCell(1);
    cell2.innerHTML=data.last_name;
    cell3=newrow.insertCell(2);
    cell3.innerHTML=data.Address;
    cell4=newrow.insertCell(3);
    cell4.innerHTML=data.food;
    cell5=newrow.insertCell(4);
    cell5.innerHTML=data.state_name;
    cell6=newrow.insertCell(5);
    cell6.innerHTML=data.country_name;
}
function resetform(formdata)
{
    document.getElementById("first_name").value="";
    document.getElementById("last_name").value="";
    document.getElementById("Address").value="";
    document.getElementById("food").value="";
    document.getElementById("state_name").value="";
    document.getElementById("country_name").value="";
    selectedrow=null;
}
function updaterecord(formdata){
    selectedrow.cell[0].innerHTML=formdata.first_name;
    selectedrow.cell[1].innerHTML=formdata.last_name;
    selectedrow.cell[2].innerHTML=formdata.Address;
    selectedrow.cell[3].innerHTML=formdata.food;
    selectedrow.cell[4].innerHTML=formdata.state_name;
    selectedrow.cell[5].innerHTML=formdata.country_name;
}
