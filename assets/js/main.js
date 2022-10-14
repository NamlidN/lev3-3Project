function dl(){
    let a =document.getElementById("d")
    a.classList.toggle("blaka")
    let bu =document.getElementById("bu")
    
    if(bu.innerHTML=="Light mode"){
    let bu =document.getElementById("bu")
    bu.innerHTML="Dark mode"
    }else{
    bu.innerHTML="Light mode"  
    } 
}