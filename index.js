$('#header a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body')
      .animate({
        scrollTop: $(hash).offset().top
      },1000);
  }
});

window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})
function toggle(){
  var header = document.getElementById('header');
  header.classList.toggle('active')
}
document.addEventListener('mousemove' ,ache);
// touchmove
function ache(e){
  this.querySelectorAll('.layer').forEach(layer => {
    const jk =layer.getAttribute('data-speed')
    const x=(window.innerWidth -e.pageX*jk)/100
    const y=(window.innerWidth -e.pageY*jk) /100
    layer.style.transform=`translateX(${x}px) translateY(${y}px)`
  } )
}


let dec1=document.getElementById("png1");
let dec2=document.getElementById("png2");
let dec3=document.getElementById("png3");
let dec4=document.getElementById("png4");
let dec5=document.getElementById("png5");
let dec6=document.getElementById("png6");
let dec7=document.getElementById("png7");
let dec8=document.getElementById("png8");
let dec9=document.getElementById("png9");
let dec10=document.getElementById("png10");
let dec11=document.getElementById("png11");
let dec12=document.getElementById("png12");
window.addEventListener('scroll',function(){
  var value=window.scrollY;
  dec1.style.top=value * 0.65 +"px";
  dec2.style.top=value * 0.5 +"px";
  dec3.style.top=value * 0.85 +"px";
  dec4.style.top=value * 0.755 +"px";
  dec5.style.top=value * 0.95 +"px";
  dec6.style.top=value * 0.45 +"px";
  dec7.style.top=value * 0.95 +"px";
  dec8.style.top=value * 0.65 +"px";
  dec9.style.top=value * 0.33 +"px";
  dec10.style.top=value * 0.99 +"px";
  dec11.style.top=value * 0.725 +"px";
  dec12.style.top=value * 0.665 +"px";

})
