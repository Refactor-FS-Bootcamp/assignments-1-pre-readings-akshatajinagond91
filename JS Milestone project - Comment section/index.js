
// let btn = document.querySelector("button");
// btn.addEventListener("click", addComment);

// let dataArray = JSON.parse(localStorage.getItem("userData")) || [];



// function addComment() {

//     if (document.querySelector("#name").value == "" || document.querySelector("#comment").value == "") {
//         alert(" Please Enter username and comment");
//     } else {
//         obj = {
//             name: document.querySelector("#name").value,
//             comment: document.querySelector("#comment").value,
//             likeCount:0,
//             disLikeCount:0
//         };
//         dataArray.push(obj);
//         localStorage.setItem("userData", JSON.stringify(dataArray));
//     }
//     console.log(dataArray);
//     displayData();
// }


// function displayData() {

//     let secondary = document.querySelector("#secondary");
//     secondary.innerHTML = "";

//     dataArray.forEach(function (element, index) {
//         let div = document.createElement("div");

//         let p1 = document.createElement("p");
//         p1.innerText = element.name;
//         let p2 = document.createElement("p");
//         p2.innerText = element.comment;

//         let lc= document.createElement("p");
//         lc.innerText=element.likeCount;

//         let likeimg = document.createElement("img");
//         likeimg.src = "https://www.pngitem.com/pimgs/m/40-406745_like-png-hand-thumb-sign-vector-graphic-pixabay.png";
//         likeimg.setAttribute("class","likeIcon");
//         likeimg.addEventListener("click",likesCount);
        
       
//         let dc = document.createElement("p");
//         dc.innerText=element.disLikeCount;

//         let dislikeimg = document.createElement("img");
//         dislikeimg.src = "https://tse2.mm.bing.net/th?id=OIP._e2qJcwjdsEVDoCGINoAjgHaEK&pid=Api&P=0";
       

//         let dlt = document.createElement("img");
//         dlt.src = "https://tse4.mm.bing.net/th?id=OIP.JymbH67S1jo-lRK9jNGHrQHaHa&pid=Api&P=0";
//         dlt.addEventListener("click", function () {
//             console.log("deleted" + index);
//             deleteComment(index)
//         });
      
//         let div2=document.createElement("div");
//         div2.setAttribute("id","icons");
//         div2.append(likeimg, lc, dislikeimg,dc,dlt)
//         div.append(p1, p2 ,div2 );
//         secondary.append(div);


//     });
// }




// function deleteComment(index) {
//     let deletedArray = dataArray.splice(index, 1);
//     localStorage.setItem("userData", JSON.stringify(deletedArray));
//     displayData();
// }


let commentsArr=JSON.parse(localStorage.getItem("comments"))||[];

const btn=document.querySelector("button");
btn.addEventListener("click",addComment);


let username=document.querySelector("#name");
let comment=document.querySelector("#comment");

if(username.value==""||comment.value==""){
    alert("enter username and comment");
}else{
    addcomment();
    display();
    deletecmt();

    username.value="";
    comment.value="";
}


function addComment(){
   

    const obj={
        user:username.value,
        userComment:comment.value,
        likes:0,
        dislikes:0
    };

    console.log(obj);
    commentsArr.push(obj);
    console.log(commentsArr);
    localStorage.setItem("comments",JSON.stringify(commentsArr));
    display();
}

function display(){
    const disp=document.querySelector(".container2");
    const commentsInfo=localStorage.getItem("comments");
     let dataUi="";
    if(commentsInfo===""){
        commentsArr=[];
    }else{
        commentsArr=JSON.parse(commentsInfo);
    }

     commentsArr.forEach(function(value) {
       dataUi+=`<div class="ui">
       <div class="display">
       <h3>${value.user}</h3>
       <p>${value.userComment}</p></div>
       <div class="display2">
    <div class="icondiv">
        <p><i>${value.likes} likes</i></p>
        <p id="icons"> <img src="https://www.pngitem.com/pimgs/m/40-406745_like-png-hand-thumb-sign-vector-graphic-pixabay.png" class="likeIcon" alt="">
        <img src="https://tse2.mm.bing.net/th?id=OIP._e2qJcwjdsEVDoCGINoAjgHaEK&pid=Api&P=0" class="dislikeIcon" alt=""></p>
        <p><i>${value.dislikes} Dislikes</i></p>
    </div>
       <div class="dltdiv">
         <img src="https://tse4.mm.bing.net/th?id=OIP.JymbH67S1jo-lRK9jNGHrQHaHa&pid=Api&P=0" class="delete" alt="">
       </div>
   </div>
</div>
<hr>` 

    });

    if(commentsArr.length !=0){
        disp.innerHTML=dataUi;
    }
   likesCount();
   dislikesCount();
   deletecmt();
 }

 
function likesCount(){
    const likesbtn=document.querySelectorAll(".likeIcon");
    likesbtn.forEach(function(iconLikes,index){
        iconLikes.addEventListener("click",function(){
            commentsArrObj=commentsArr[index];
            let likes=commentsArrObj.likes;
            likes++;
            commentsArrObj.likes=likes;
            commentsArr[index]=commentsArrObj;
            localStorage.setItem("comments",JSON.stringify(commentsArr));
            display();
        })
    })
}


function dislikesCount(){
    const dislikesbtn=document.querySelectorAll(".dislikeIcon");
    dislikesbtn.forEach(function(iconLikes,index){
        iconLikes.addEventListener("click",function(){
            commentsArrObj=commentsArr[index];
            let dislikes=commentsArrObj.dislikes;
            dislikes++;
            commentsArrObj.dislikes=dislikes;
            commentsArr[index]=commentsArrObj;
            localStorage.setItem("comments",JSON.stringify(commentsArr));
            display();
        })
    })
}


function deletecmt(){
    const deleteBtn=document.querySelectorAll(".delete");
    deleteBtn.forEach(function(dBtn,index){
        dBtn.addEventListener("click",function(){
            commentsArr.splice(index,1);
            localStorage.setItem("comments",JSON.stringify(commentsArr));
            display();
            if(commentsArr.length==0){
                const disp=document.querySelector(".container2");
                disp.innerHTML="";
            }else{
                disp.innerHTML=dataUi;
            }
        });
    });
}