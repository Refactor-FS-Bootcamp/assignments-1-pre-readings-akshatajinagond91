

function EcomProducts(n,p,t){
   this.name=n;
   this.price=p;
   this.type=t;
}

let arr=[];
function Submit(e){
   e.preventDefault()

   let form=document.getElementById('form');

   let name=form.name.value;
   let price=form.price.value;
   let type=form.type.value;

   let products=new EcomProducts(name,price,type);
   // console.log(products);
   arr.push(products);
   console.log(arr);
}
let bedroom={
   name:"bedroom"
};
let kitchen={
   name:"kitchen",
   cookfood: function(order){
      console.log(`serving ${order} in ${this.name}`);
   }
};

// kitchen.cookfood.call(bedroom,"maggie");

let arr1=[1,2,3];
console.log(arr1);

Array.prototype.akshu=function(value){
 let index=this.length;
 this[index]=value;
};

arr1.akshu(6);
console.log(arr1);

// ----------------------------------------------------------

let myName="Akshata jinagond";


function counter(){
let count=0;

let text=document.getElementById("text");

let id=setInterval(function(){
   if(text.value===myName){
      alert("you won!");
      clearInterval(id);
   }
   
   if(count===6){
      text.disabled=true;
   alert("you lost!");
   clearInterval(id);
   }
   
      if(count==59){
         clearInterval(id);
      }
      let h2=document.getElementById("count");
      h2.innerText=count;
count++;
   },1000);
}

// counter();

// --------------------------------------------------------------------- 
function greeting(){
   return("hello akshu");
}
console.log("hiii");

setTimeout(greeting,5000);

// ------------------------------slide show--------------
let id;
let i=0;

function addImage(){
   let img_url=document.getElementById("image_url");
   let images=JSON.parse(localStorage.getItem("images"))||[];
   images.push(img_url.value);

   localStorage.setItem("images",JSON.stringify(images));
   img_url.value=null;
}

function slideShow(){
   let images=JSON.parse(localStorage.getItem("images"));
   let container=document.getElementById("slide_show");
   

  id= setInterval(function(){
if(i===images.length){
   i=0;
}
      let img=document.createElement("img");
      img.src=images[i];
      container.innerHTML=null;
      container.append(img);
      i++;
   },2000);
}

function pause(){
   clearInterval(id);
}

// ----------------------promises--------------------------------------------------

function bankServer(){
   return false;
}

let payment_promise=new Promise(function(resolve,reject){
let pin=bankServer();

setTimeout(function(){
   if(pin){
      resolve("payment successfull");
   }else{
      reject("try again later");
   }
},3000);
});

// console.log(payment_promise);
// ---------------------------------------------------------------------------------------------------------------------------

/* let image=document.getElementById("pay_image");

payment_promise.then(function(res){
   console.log(res);
   image.src="https://cdn.dribbble.com/users/1154535/screenshots/3288650/dribbble-success-2.gif";
});

payment_promise.catch(function(rej){
  console.log(rej);
   image.src="https://c.tenor.com/F_1qppREwFcAAAAC/rejet%C3%A9-rejected.gif";
});

*/

// -------------------------------------------------------------------------------------------------------------------

let image=document.getElementById("pay_image");

async function content(){
 
   try{
      let res= await payment_promise;
      image.src="https://cdn.dribbble.com/users/1154535/screenshots/3288650/dribbble-success-2.gif";

      console.log(res);
   }catch(err){
      image.src="https://c.tenor.com/F_1qppREwFcAAAAC/rejet%C3%A9-rejected.gif";

      console.log(err);
   }

}

content();

// ------------fetch-------------------------------------------------------------------------------------------

const url="https://reqres.in/api/users?pge=2";

fetch(url).then(function(res){
   return res.json();
   }).then(function(res){
      console.log(res);
      append(res.data);
   }).catch(function(err){
      console.log(err);
   });


   function append(data){

      let container=document.getElementById("container");
      data.forEach(el => {
         
        let img=document.createElement("img");
         img.src=el.avatar;
         let p=document.createElement("p");
         p.innerText=`${el.firt_name} ${el.last_name}`;

         let div=document.createElement("div");
         div.append(img,p);
         container.append(div);
      });
   }


   // ---------using async await--------------------------------

   const URL="https://fakestoreapi.com/products";

   async function getData(){
      try{
         let RES= await fetch(URL);
         let DATA= await RES.json();
         appendData(DATA);
         console.log(DATA);
         console.log("hi");
      }
      catch(err){
         console.log(err);
      }
      
   }
   getData();



   function appendData(data){
      data.sort(function(a,b){
return a.price-b.price;
      });

     data= data.filter(function(el){
return el.category==="jewelery";
      });
      let container2=document.getElementById("container2");
  data.forEach(function(el){
 let img=document.createElement("img");
 img.src=el.image;
 let p=document.createElement("p");
 p.innerText=el.price;
 let div=document.createElement("div");
 div.append(img,p);
 container2.append(div);
});
   }

   // ---------------------------------------------------------------------

   // -------------- creating own methods using ES6----------------------------------

    class Stack{
      constructor(){
         this.length=0;
         this.Stack=[];
      }

      push(...arr){
         arr.forEach((el)=>{
            let index=this.length;
            this.Stack[index]=el;
            this.length++;

         });

         }

         remove(){
            let index=this.length-1;
            delete this.Stack[index];
            
           this.Stack.length--;
           this.length--;
      }

      peak(){
         return this.Stack[this.length-1];
      }
    }

   let s= new Stack();
   
   s.push(1,2,3,4);
   
let last= s.peak();
   console.log(s);
   console.log(last);


   // ---------------------------------------local storage----------------------------------------------------------- 


  localStorage.setItem("name1","akshata");
  localStorage.setItem("name2","amruta");

  let n=localStorage.getItem("name1");
  
  let p=document.querySelector("p");
  p.innerText=n;

  let array=["akshata","amruta","akshay"];
  let array2={name1:"akshata",name2:"amruta",name3:"akshay"};

  localStorage.setItem("names",JSON.stringify(array));
localStorage.setItem("names2",JSON.stringify(array2) );


  let ans=JSON.parse(localStorage.getItem("names"));
  let ans2=JSON.parse(localStorage.getItem("names2"));
  console.log(ans2);
  console.log(ans);

//   ------------------------------------------------------------------------------------------------------------------

 
   