
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


// fetch api 2

function postData(){
    url = "https://reqres.in/api/users";
    data = '{"name": "morpheus","job": "leader"}'
    params = {
        method:'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    }
    fetch(url, params).then(response=> response.json())
    .then(data => console.log(data)
    )

postData()




