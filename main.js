var btn = document.getElementById("btn");
var pic =  document.querySelector(".user-photo")
btn.addEventListener("click",randomGenerator);

function randomGenerator()
{
    var url = fetch("https://randomuser.me/api/");
    url
    .then((response)=> {return response.json()})
    .then((data)=> finalData(data));
}




function finalData(data)
{
    var ans = data.results[0];
    
    document.querySelector(".user-photo").innerHTML = `<img src=${ans.picture.large}>`;
    document.querySelector(".user-name").innerHTML = `<b>User name</b> :  ${ans.name.first} ${ans.name.last}`;
    document.querySelector(".user-email").innerHTML = `<b>user email</b> : ${ans.email}`;
    document.querySelector(".gender").innerHTML = `<b>Gender </b> :${ans.gender}`;
    document.querySelector(".dob").innerHTML = `<b>date of birth </b> : ${ans.dob.age}`
    document.querySelector(".number").innerHTML = `<b>mobile number</b> : ${ans.cell}`
    document.querySelector(".user-city").innerHTML = `<b>city</b> : ${ans.location.city}`;
    document.querySelector(".user-state").innerHTML = `<b>state</b> : ${ans.location.state}`;
    document.querySelector(".user-country").innerHTML = `<b>country</b> : ${ans.location.country}`;
    
    console.log(ans)
}



