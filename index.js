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
function ache(e){
  this.querySelectorAll('.layer').forEach(layer => {
    const jk =layer.getAttribute('data-speed')
    const x=(window.innerWidth -e.pageX*jk)/100
    const y=(window.innerWidth -e.pageY*jk) /100
    layer.style.transform=`translateX(${x}px) translateY(${y}px)`
  } )
}
