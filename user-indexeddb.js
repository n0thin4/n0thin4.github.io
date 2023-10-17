let openRequest = indexedDB.open('users', 1)
openRequest.onupgradeneeded=function(){
    alert('trying something out')
}
openRequest.onerror = function(){
    
}
function createUserAcc(name){

}
