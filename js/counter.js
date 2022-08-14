function countTo(mySum,id){
    let from = 0;
    let to = mySum;
    let step =  to > from ? 1 : -1;
    let interval = mySum ;
    if(from == to){
   
        document.querySelector(id).
        textContent=from;
        return;
    }
    let counter=setInterval(function(){
        from+=step;
        document.querySelector(id).
        textContent = from;
        if(from == to){
            clearInterval(counter);
        }
    });
}
