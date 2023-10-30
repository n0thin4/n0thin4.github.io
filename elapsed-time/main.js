//alert('hello world')
function id(txt){
   return document.getElementById(txt)
}
//adding visibility detector to detect when the user leaves the page
//need to add mouseover events to hide the UI if the users mouse is idle for a while
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      hideUnimportant()
    }
  });
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
    console.log(document.getElementsByClassName('unimportant'))
    unInpTiming=setTimeout(function(){
        hideUnimportant();
    },10000)
}
var idleEvent;
function idleMouse(){
    clearTimeout(idleEvent)
    idleEvent=setTimeout(hideUnimportant, 20000)
}
function hideUnimportant(){
    //hide stuff after 10 seconds
    setCVar('unimportant', '1')
    setTimeout(function(){
        setCVar('unimportant-vis', 'hidden')
    },500)
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