
let usd=document.getElementById('usd')
let egp=document.getElementById('egp')




usd.onkeyup=function(){
    egp.value= usd.value *50
}

egp.onkeyup=function(){
    usd.value= egp.value /50
}
