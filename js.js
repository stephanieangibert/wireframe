let hamburger=document.getElementById("hamburger");
let propagation=document.getElementById("propagation");
let navigation=document.getElementById("navigation");
hamburger.addEventListener("click",function(){
    hamburger.classList.toggle("fa-times");
    propagation.classList.toggle("spread");
    navigation.classList.toggle("section3bis");
})

let crayon=document.getElementById("crayon");
crayon.addEventListener("click",function(){
    console.log(document.getElementsByTagName("i"));
    document.getElementsByTagName("i")[1].classList.toggle("fa-thumbs-up");
   document.getElementById().classList.toggle("change");
})
let ico1=document.getElementsByTagName("i")[2];
let ico2=document.getElementsByTagName("i")[3];
let ico3=document.getElementsByTagName("i")[4];

let tableau=[ico1,ico2,ico3];
/* for(i=0;i<tableau.length;i++){
    console.log(tableau[i]);
} */
function machin(){
    let i=0;
while(i<tableau.length){
   
    console.log(tableau[i]);
    i++;

}

}
machin();
let jour=document.getElementById("jour");
let mois=document.getElementById("mois");
let an=document.getElementById("an");

jour.innerHTML=new Date().getDate();
mois.innerHTML=new Date().getMonth()+1;
an.innerHTML= new Date().getFullYear();



function anim(){
  
   let result=parseFloat( myImg.style.opacity);

    while(result>0){
       myImg.style.opacity=result;
    result-=0.1;
  
   } 


}
function machin(){
    let myImg = document.getElementById('photo1');
let resultat=myImg.style.opacity="1";
resultat=parseFloat(myImg.style.opacity);
resultat-=0.1;



    
}



    setTimeout(function(){
        for (let resultat = 1; resultat > 0; resultat-=0.1) {
            myImg.style.opacity=resultat;
          }


        machin();
    
    
   
    
    },5000);
    



