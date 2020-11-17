let p1 = document.getElementById("p1");

let bold = document.getElementById("bold");
bold.addEventListener('click',textBold);
let color = document.getElementById("color");
color.addEventListener('click',textColor);
let enlarge =document.getElementById("enlarge");
enlarge.addEventListener('click',textEnlarge);

function textBold (){
    if(p1.style.fontWeight== 'bold'){
        p1.style.fontWeight = 'initial';
    }else{
    p1.style.fontWeight ='bold';
};
}
function textColor (){
   
    p1.style.color ='red';
}
 function textEnlarge(){
     if(p1.style.fontSize=='50px'){
         p1.style.fontSize ='';
     }else{
     p1.style.fontSize ='50px';
};
 }

