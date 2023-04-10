


document.querySelector("button").addEventListener("click",saveData);

let notesArray= JSON.parse(localStorage.getItem("userData"))||[];

let currentDate = new Date();
let cDay = currentDate.getDate()
let cMonth = currentDate.getMonth() + 1
let cYear = currentDate.getFullYear()


function saveData(event){
    event.preventDefault();
    window.location.reload();

    let title=document.querySelector("input").value;
    if(title===""){
        alert ("Title can not be empty..!");
    }
    else{
        let obj={
            title:document.querySelector("input").value,
            note: document.querySelector("textarea").value,
            date:`${cDay}-${cMonth}-${cYear}`
         }
       notesArray.push(obj);
       
    }
    
   localStorage.setItem("userData",JSON.stringify(notesArray));
   console.log(notesArray);
//    displayNotes(notesArray);

}


function displayNotes(notesArray){
  
    let parent=document.getElementById("cards");
    parent.innerHTML="";

    notesArray.forEach( function(element,index) {
        let div=document.createElement("div");
        let title=document.createElement("h3");
        title.h3=element.title;
        let note=document.createElement("p");
        note.innerText=element.note;
        let date=document.createElement("p");
        date.innerText=element.date;
        let dlt=document.createElement("button");
        dlt.innerText="Dele Note";
        dlt.addEventListener("click",function(){
            deleteNode(index);
        });
        let edit=document.createElement("button");
        edit.innerText="Edit Note";
        edit.addEventListener("click",function(){
            console.log("edit function triggered");
            console.log(index);
            editNote(index);
        });
        div.append(title,note,date,dlt,edit);
        cards.append(div);

    });
}

function deleteNode(index){
notesArray.splice(index,1);
 localStorage.setItem("userData",JSON.stringify(notesArray));
 window.location.reload();
  }


//   edit functionality-----------------------------------


  function editNote(index){
   let newEditedArray= notesArray.slice(index,index+1);
    console.log(newEditedArray);

    newEditedArray.forEach(function(element){
        let div=document.createElement("div");
        let title=document.createElement("input");
        title.value=element.title;
        title.setAttribute("class","title");
        let note=document.createElement("textarea");
        note.innerText=element.note;
        note.setAttribute("class","note");
        let date=document.createElement("p");
        date.innerText=element.date;
        let save=document.createElement("button");
        save.innerText="save";
        save.addEventListener("click",function(){
            console.log("save note");
            saveNewNote();
            
                element.title=title.value;
               element.note=note.value;
            console.log(newEditedArray);
            
        });
        div.append(title,note,date,save);
        cards.append(div);
    });
    
  }

function saveNewNote(){
    
}