// let k =document.getElementById('getData')
// k.addEventListener('click',function(){getDate()})
function getDate(){
    let country = document.getElementById("country").value;
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=9a67ecdf49271c47722d3a7f22b34e46`
)
.then((res) => res.json())
.then((data) => {
    // let{ lat,lon} =data[0];
    // console.log("this is lat: ",lat, "this is lon:",lon);
    console.log(data)
});


}