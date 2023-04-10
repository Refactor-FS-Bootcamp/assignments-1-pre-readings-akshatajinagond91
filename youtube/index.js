// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=kgf&videoType=any&key=AIzaSyD1z_WboAtL9itQ8S8vttYCzYRXNQwpWfU


let q="";

let search= async()=>{
    let query=document.getElementById("query").value;
   let data= await getData(query);
   q=query;
   append(data);
  
}

let getData= async (query)=>{

    let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&videoType=any&key=AIzaSyD1z_WboAtL9itQ8S8vttYCzYRXNQwpWfU `;

    let res= await fetch(url);
    let data= await res.json();
    
    return data.items;
    console.log(data);

}

let append=(data)=>{

    let container=document.getElementById("container");
    container.innerHTML=null;

    data.forEach(element => {
       
        let h3=document.createElement("h3");
        h3.innerText=element.snippet.title;

        let img=document.createElement("img");
        img.src=element.snippet.thumbnails.medium.url;

        let div=document.createElement("div");
        div.setAttribute("class","video");
        div.onclick=()=>{
            saveVideo(element);
        };
        div.append(h3,img);
       container.append(div);
    });
}

let saveVideo=(data)=>{
    localStorage.setItem("video",JSON.stringify(data));
    window.location.href="video.html";
};

let filter=async ()=>{
    let data= await getData(q);
 data= data.filter((el)=>{
   return el.snippet.channelId==="UCyoXW-Dse7fURq30EWl_CUA";
 });
 append(data);
};

// ternery operator---------------------------------------------------------

let n=9;

let param=undefined;

n%2==0 ? (param="Akshata") : n%2!==0 ? (param="hello girl") : (param="hey") ;

console.log(param);


