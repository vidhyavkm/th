var res= fetch("https://restcountries.com/v3.1/all")
// console.log(res)

// res.then((data)=> {
// console.log(data.json())

res.then((data)=>data.json()).then((data1)=>{console.log(data1)

//write a code to print the countries in asia region using fetch.

// console.log(data1[17].region)
var asiancount = data1.filter((obj)=>obj.region==="Asia")
console.log(asiancount);

//for the above code print the sum of the total population of the countries in asian region

var population = asiancount.reduce((previousValue, currentValue) => previousValue + currentValue.population,0)
console.log(population);
})

// for the give api , print TN state's confirmed,deceased, recovered, tested using fetch.

var result = fetch("https://data.covid19india.org/v4/min/data.min.json");

console.log(result)
result.then((element)=>element.json()).then((element1)=>{
    console.log(element1);
    var result1 = element1.TN;

    console.log(`Confirmed:${result1.total.confirmed}`)
    console.log(`Confirmed:${result1.total.deceased}`)
    console.log(`Confirmed:${result1.districts.Chennai.total.confirmed}`)
})

var res1 = fetch("https://631d6ffc789612cd07aa9c00.mockapi.io/Users")
res1.then((foo)=>foo.json()).then((foo1)=>console.log(foo1));