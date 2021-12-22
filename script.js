function removeElement(){
    var element = document.querySelector("#join-btn");
    element.remove();
}

function search(){
    var element = document.querySelector("#searchbar");
    alert(element.value);
}

function vote(id){
    var element = document.querySelector(id);
    var newText = parseInt(element.innerText) + 1;
    console.log(newText);
    element.innerText = newText;
}