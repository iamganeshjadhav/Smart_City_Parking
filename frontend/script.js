let parkingList = [];

function addEntry() {

    const vehicleNumber = document.getElementById("vehicleNumber").value;
    const vehicleType = document.getElementById("vehicleType").value;
    const zone = document.getElementById("zone").value;

      if (vehicleNumber === "") {   
        alert("Enter vehicle number");
        return;
    }  

    const entry = {                
        number: vehicleNumber,
        type: vehicleType,
        zone: zone,
        time: new Date().toLocaleString()
    };  

    parkingList.push(entry);

     displayData();
}

function displayData() { 

    const tableBody = document.getElementById("parkingData");

    tableBody.innerHTML = "";

    
    parkingList.forEach(v => {      

        const row = `
            <tr>
                <td>${v.number}</td>
                <td>${v.type}</td>
                <td>${v.zone}</td>
                <td>${v.time}</td>
            </tr>
        `;

        tableBody.innerHTML += row;

    });      
}