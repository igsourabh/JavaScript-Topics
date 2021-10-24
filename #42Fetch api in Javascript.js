
let apibtn = document.getElementById("btnApi")
let div = document.getElementById("api")

function getdata() {
    url = "https://api.github.com/users";
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    })
}

getdata()


