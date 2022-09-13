async function createdata(){
    let data ={
        Name:"Vidhya",
        Email:"vidh@gmail.com",
        Phone:"123456789"
    }
    var res = await fetch("https://631d6ffc789612cd07aa9c00.mockapi.io/Users",{
        method:"POST",
        body:JSON.stringify(data),
        headers:{
            "Content-type":"application/json;charset=UTF-8",
        }
    })
    var resjson = await res.json()
    console.log(resjson);
}
createdata();

async function readdata(){
    var res= await fetch("https://631d6ffc789612cd07aa9c00.mockapi.io/Users")
    var resjson = await res.json();
    console.log(resjson)
}
readdata();

async function updatedata(){
    let data ={
        Name:"Dhiya",
        Email:"dhiya@gmail.com",
        Phone:"1234567890"
    }
    var res = await fetch("https://631d6ffc789612cd07aa9c00.mockapi.io/Users" + "/8",{
        method:"PUT",
        body:JSON.stringify(data),
        headers:{
            "Content-type":"application/json;charset=UTF-8",
        }
    })
    var resjson = await res.json()
    console.log(resjson);
}
updatedata();

async function deletedata(){
  
    var res = await fetch("https://631d6ffc789612cd07aa9c00.mockapi.io/Users" + "/10",{
        method:"DELETE",
    })
    var resjson = await res.json()
    console.log(resjson);
}
deletedata();