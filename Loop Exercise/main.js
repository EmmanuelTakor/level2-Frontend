let bodyElement = document.getElementById("bodyElement")


let paragraph = document.createElement("p");



let users = ["kambang","sinclaire","prince","julius","joe"]

for (let i = 0;i< users.length; i++){
    users.forEach(function(e){

        bodyElement.innerHTML += paragraph.innerHTML += e;
    })
}

