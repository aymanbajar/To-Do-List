let add = document.getElementById("add");

let todotext =document.getElementById("text")

let container = document.getElementsByClassName("container")[0]

add.addEventListener('click',() =>{
    if (todotext.value.trim() === "") {
        alert("Please enter a task!");
        return; 
    }

    var radioInput = document.createElement('input');
    radioInput.setAttribute('type', 'radio');

     var div =document.createElement("div");
     div.innerHTML=todotext.value;
     div.style.fontSize ="30px";
     div.style.padding="15px";

     var del  = document.createElement("label")
     del.innerHTML ="✘";
    del.style.fontSize ="30px";
    del.style.padding ="-5px"
    del.style.marginTop="10px";
    del.style.color="red"
    

     del.addEventListener('click',() =>{
        container.removeChild(currentdiv)
     })
     radioInput.addEventListener('click',()=>{
        div.style.textDecorationLine ="line-through";
     })
     
     var currentdiv  = document.createElement('div');
     currentdiv.append(radioInput,div,del);
     currentdiv.style.display='flex'

     container.appendChild(currentdiv)
     
    


})