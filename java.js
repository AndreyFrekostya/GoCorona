const screenWidth = window.screen.width
var welcome="Welcome to GoCorona"
if(screenWidth<819){

    var header_text=document.getElementById("home")
    header_text.innerHTML=welcome
    header_text.classList.add('mobile_header_text')
}

if(screenWidth<523){

    var header_text=document.getElementById("home")
    header_text.innerHTML='Welcome'+'<br>'+'to GoCorona';
    header_text.classList.add('mobile_header_text')
}
if(screenWidth<483){

    var header_text=document.getElementById("home")
    header_text.innerHTML='Welcome'
    header_text.classList.add('mobile_header_text')
}
if(screenWidth<432){

    var header_text=document.getElementById("home")
    header_text.innerHTML=''
    header_text.classList.add('mobile_header_text')
}
const burger=document.querySelector(".burger");
burger.addEventListener('click', function(){
    document.querySelector('.sub_menu').classList.toggle('_active')
})



const animItems= document.querySelectorAll('._anim_item')


if(animItems.length>0){
    window.addEventListener('scroll', animOnScroll())
    function animOnScroll(){
        for( let index = 0; index<animItems.length; index++){
            const animItem= animItems[index]
            const animeItemHeight= animItem.offsetHeight
            const animeItemOffset= offset(animItem).top
            const animStart = 4


            let animeItemPoint = window.innerHeight - animeItemHeight/animStart
            if(animeItemHeight>window.innerHeight){
                animeItemPoint = window.innerHeight - window.innerHeight/animStart
            }


            if((pageYOffset>animeItemOffset-animeItemPoint) && pageYOffset<(animeItemOffset+animeItemHeight)){
                animItem.classList.add('_active')
            }else{
                animItem.classList.remove('_active')
            }
        }
    }

    function offset(el) {
        const rect= el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop= window.pageYOffset || document.documentElement.scrollTop
        return{top:rect.top+scrollTop, left:rect.left+scrollLeft}
    }
    animOnScroll()
}








var hideItems= document.querySelectorAll('.hide_and_show');
    if(hideItems.length>0){
        const buttons=document.querySelectorAll('.btn_hide')
        for(let index=0; index<buttons.length; i++){
           const btn=buttons[index]
           const hideItem= hideItems[index]
           btn.addEventListener("click", function(){
               if(!hideItem.classList.contains('_active')){
                   btn.classList.add('_rotate')
                   hideItem.classList.add('_active')
               }else{
                btn.classList.remove('_rotate')
                hideItem.classList.remove('_active')
               }
           })
                
        }
    }


