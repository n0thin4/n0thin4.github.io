//alert('hello world')
function id(txt){
   return document.getElementById(txt)
}
var root=document.querySelector(':root')
function setCVar(varName, val){
   root.style.setProperty(`--${varName}`, val)
}
function fitSideOpenBtn(){
    textFit(id('side-open-btn'), {
        alignVert: true, // if true, textFit will align vertically using css tables
        alignHoriz: true, // if true, textFit will set text-align: center
        })
}
var unInpTiming=''

function showUnimportant(){
    clearTimeout(unInpTiming)
    setCVar('unimportant', '1')
    //setting the timing in order to make everything unimportant disappear.
    unInpTiming=setTimeout(function(){
        setCVar('unimportant', '0')
        unInpTiming=setTimeout(function(){
            document.getElementsByClassName('unimportant').forEach(function(e){
                e.visibility='hidden';
            })}, 500)
    },10000)
    document.getElementsByClassName('unimportant').forEach(function(e){
        e.visibility='visible';
    })
}
var sideBarOpen=false;
function toggleSideBar(){
    if (sideBarOpen){
        openSideBar()
    }else{
        closeSideBar()
    }
}
function clearTimes(timeouts){
    timeouts.forEach(function(e){
        clearTimeout(e)
    })
}
var sideEv=[]
function closeSideBar(){
    if (!sideBarOpen) return
    clearTimes(sideEv)
    sideBarOpen=false;
    
}
function openSideBar(){
    if (sideBarOpen) return
    clearTimes(sideEv)
    sideBarOpen=true
    
}

//plan: peak a pixel out, then have all of the things peak out if they are above a ceartian height
fitSideOpenBtn()