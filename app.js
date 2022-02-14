// const pinGenerate=document.querySelector('#pinGenerate');
//!....4 digit random number generate.....
function generateRandom(){
    const randomNumber=Math.round(Math.random()*10000);

    const totalDigit=(randomNumber+'').length;
    if(totalDigit>3){
        document.querySelector('#pinValue').value=randomNumber;
    }else{
        // console.log(randomNumber);
        generateRandom();
    }
    return document.querySelector('#pinValue').value;
}

document.querySelector('#pinGenerate').addEventListener('click',()=>{
    generateRandom();
})

//!.....typed value pass to the input......
document.querySelector('#parent').addEventListener('click',(event)=>{
    // console.log(typeof(event.target.innerText));
    const calcValue=event.target.innerText;

    const calInputValue=document.querySelector('#calc-input').value;
    // console.log(calInputValue);
    if(isNaN(calcValue)){
        if(calcValue=='C'){
            document.querySelector('#calc-input').value='';
        }
    }else{
        document.querySelector('#calc-input').value=calInputValue+calcValue;
    }

})
//!.....typed value checked......
// document.querySelector('#submit').addEventListener('click',(event)=>{
//     event.preventDefault();
//     const calcValue=document.querySelector('#calc-input').value;
//     // console.log(calcValue);
//     const pinValue=document.querySelector('#pinValue').value;
//     if(calcValue===pinValue){
//         document.querySelector('#match').style.display='block';
//         document.querySelector('#notMatch').style.display='none';
//     }else{
//         document.querySelector('#match').style.display='none';
//         document.querySelector('#notMatch').style.display='block';
//     }
// })
//!....try check....
function tryMoreCheck(){
    let tryValue=document.querySelector('#tryValue').innerText;
    // console.log(tryValue);
    const pinValue=document.querySelector('#pinValue').value;
    const calcValue=document.querySelector('#calc-input').value;

    document.querySelector('#pinGenerate').addEventListener('click',()=>{
        document.querySelector('#tryValue').innerText=3;
    })

    
    if(pinValue!=calcValue){
        if(tryValue>0){
            document.querySelector('#tryValue').innerText=parseInt(tryValue)-1;
            //!....success or fail message......
            document.querySelector('#match').style.display='none';
            document.querySelector('#notMatch').style.display='block';
        }
    }
    else if(pinValue==calcValue){
        document.querySelector('#tryValue').innerText=3;
        //!....success or fail message......
        document.querySelector('#match').style.display='block';
        document.querySelector('#notMatch').style.display='none';
    }


    if(tryValue==1){
        document.querySelector('#submit').setAttribute('disabled',true);
    }
}

//!....submit button.....
document.querySelector('#submit').addEventListener('click',()=>{
    tryMoreCheck();
})