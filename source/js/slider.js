let active = false;

document.querySelector('.example__slider').addEventListener('mousedown',function(){
  active = true;
});

document.body.addEventListener('mouseup',function(){
  active = false;
});
document.body.addEventListener('mouseleave',function(){
  active = false;
});
document.body.addEventListener('mousemove',function(e){
  if (!active) return;
  let x = e.pageX;
  x -= document.querySelector('.example__slide').getBoundingClientRect().left;
  scrollIt(x);
});

function scrollIt(x){
    let transform = Math.max(0,(Math.min(x,document.querySelector('.example__slide').offsetWidth)));
    let widthBefore = document.querySelector('.example__slide').offsetWidth - transform;
    document.querySelector('.example__image-block--before').style.width = transform+'px';
    document.querySelector('.example__image-block--after').style.width = widthBefore+'px';
    document.querySelector('.example__slider').style.left = transform-20+'px';
}

scrollIt(document.querySelector('.example__slide').offsetWidth / 2);


const myObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    const width = Math.floor(entry.contentRect.width);

    if (width > 500) {
      scrollIt(document.querySelector('.example__slide').offsetWidth / 2);
    }}
    scrollIt(document.querySelector('.example__slide').offsetWidth / 2);
});

  myObserver.observe(document.querySelector('.example__slide'));

document.querySelector('.example__slider').addEventListener('touchstart',function(){
  active = true;
});
document.body.addEventListener('touchend',function(){
  active = false;
});
document.body.addEventListener('touchcancel',function(){
  active = false;
});
