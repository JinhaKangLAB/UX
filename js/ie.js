const box = document.querySelector("#box");
const article = document.querySelectorAll("article");

for(let i=0;i<article.length;i++){

article[0].addEventListener("mouseenter",()=>{
 box.classList.add("caseOne");
});

article[0].addEventListener("mouseleave",()=>{
    box.classList.remove("caseOne");
   });

   
article[1].addEventListener("mouseenter",()=>{
    box.classList.add("caseTwo");
   });
   
   article[1].addEventListener("mouseleave",()=>{
       box.classList.remove("caseTwo");
      });
}