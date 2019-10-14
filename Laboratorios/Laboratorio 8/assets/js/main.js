var rows = [];
var countID = 0;



var parseLateSwitch = (value) => {
    if(value){
        return "Tarde"
    }
    return "Temprano"
}

function addRow(carnet, schedule,late,tbody){

        var newRow = document.createElement("tr");
        var date = new Date();

        rows.push({
            "id":countID,
            "carnet":carnet,
            "schedule":schedule,
            "late":late
        });
        
        console.log(rows);

        newRow.innerHTML = 
        `<td><b>${carnet}<b></td>
        <td>${schedule}</td>
        <td>${date.toLocaleDateString()}</td> 
        <td>${late}</td>`

        var cellContainer = document.createElement("td");
        var deleteButton = document.createElement("button");
        var Input = document.createElement("input")

        deleteButton.classList.add("btn");
        deleteButton.classList.add("btn-danger");

        deleteButton.innerText = "Eliminar";
        deleteButton.value  = countID;

        deleteButton.addEventListener("click",event =>{
            var idElement = event.srcElement.value;
            var trtodelete = document.querySelector(`button[value='${idElement}']`).parentElement.parentElement;

            tbody.removeChild(trtodelete);            

            rows.forEach((iteam,index) => {
                if(iteam.id == idElement)
                {
                    rows.splice(index,1);
                }
            });

            tbody.removeChild(trtodelete);
            rows.forEach(iteam,index =>  {
                if(iteam.id == idElement)
                {
                    rows.splice(index,1);
                }
            });
        });

        cellContainer.appendChild(deleteButton);
        newRow.appendChild(cellContainer);

        cellContainer.appendChild(Input);
        newRow.appendChild(Input);

        newRow.appendChild(cellContainer);

        tbody.appendChild(newRow);
        countID++;
        
    };

window.onload = function()

{
    var submit_btn = document.querySelector("#submit_btn");
    var carnet_field = document.querySelector("#carnet_field");
    var schedule_field = document.querySelector("#schedule_field");
    var late_switch = document.querySelector("#late_switch");
    var tBody = document.querySelector("#table_body");

    var carnetRegex = new RegExp('[0-9]{8}')

    console.log(submit_btn);

    submit_btn.addEventListener("click",function()
    {
        var carnet = carnet_field.value;
        var schedule = schedule_field.options[schedule_field.selectedIndex].text;
        var late = parseLateSwitch(late_switch.checked);
        if(carnetRegex.test(carnet)){
            addRow(carnet,schedule,late,tBody);
        }else{
            alert("Formato no valido")
        }
        
        console.log(carnet);
        console.log(schedule);
        console.log(late);
    })

    carnet_field.addEventListener("keyup",(event)=>{
        var carnet = carnet_field.value;
        //console.log(event.keyCode);
        if(carnetRegex.test(carnet)){
            console.log("Correcto")
            submit_btn.disabled = false;
        }
        else{
            console.log("Error")
            submit_btn.disabled = true;
        }
        carnetRegex.test(carnet)
    })    
}