

  //sticky nav

  const headerRow=document.querySelector(".header-row");
window.addEventListener("scroll",function(e){
if(50 < window.scrollY){
    headerRow.classList.add("sticky");

}else{
    headerRow.classList.remove("sticky");
}
})