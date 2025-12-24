let start=false;
let level=0;

let arr=["red","yellow","blue","green"
];
let gameseq=[];
let userseq=[];
let h3=document.querySelector("h3");








document.addEventListener("keydown",()=>{
    
    if(!start){
        level=0;

        start=true;
        console.log("key was pressed");
        

        console.log("game started")
      
        levelup();


        
    }

});

    function levelup(){
        level++
          
        h3.innerText=`level${level}`;
        btn_flash();
        userseq=[];


       
    }
 function btn_flash() {
    let num = Math.floor(Math.random() * 4); // Fix 1: Added () to Math.random
    let color = arr[num];
    let btn = document.querySelector(`.${color}`);
    gameseq.push(color);

    
    btn.classList.add("flash");

    

    setTimeout(() => {
        btn.classList.remove("flash"); // Fix 2: Added semicolon
    }, 500);


}
function btn_press(){
   
    this.classList.add("press");
    setTimeout(
        ()=>{
             this.classList.remove("press");

        },250
     

    );
      let color=this.classList[1];

       


      
      userseq.push(color);
      

      console.log(userseq);
      check(userseq.length-1);





    


}
let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btn_press);

}
function check(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(()=>{
              levelup();
            },
              250);

              


        }
        
    }
    else{
            h3.innerText="game over! press any key to start";
            gameseq=[];
            userseq=[];
            
            start=false;


        }
    
}








