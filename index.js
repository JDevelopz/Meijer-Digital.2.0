//fade in and out pages
function fadeInPage() {
 if (!window.AnimationEvent) { return; }
 var fader = document.getElementById('fader');
    fader.classList.add('fade-out');
}

document.addEventListener('DOMContentLoaded', function() {
   if (!window.AnimationEvent) { return; }
   var anchors = document.getElementsByTagName('a');

       for (var idx=0; idx<anchors.length; idx+=1) {
         if (anchors[idx].hostname !== window.location.hostname ||
           anchors[idx].pathname === window.location.pathname) {
           continue;
       }

       anchors[idx].addEventListener('click', function(event) {
            var fader = document.getElementById('fader'),
                anchor = event.currentTarget;

            var listener = function() {
                window.location = anchor.href;
                fader.removeEventListener('animationend', listener);
            };
            fader.addEventListener('animationend', listener);

            event.preventDefault();

            fader.classList.add('fade-in');
       });
   }
});

window.addEventListener('pageshow', function (event) {
  if (!event.persisted) {
    return;
  }
  var fader = document.getElementById('fader');
  fader.classList.remove('fade-in');
});



$(".c-intro button").hover(
    function(e){
    // $(this).removeClass("btn-warning");
    // $(this).addClass("btn-w");
    $(this).text("Fast response");
  }, // over
    function(e){
    // $(this).removeClass("btn-w");
    // $(this).addClass("btn-warning");
    $(this).text("Request quote"); }  // out
);



let to = $('.field').clientHeight - $('.bal').clientHeight;

animate(){
  duration: 2000,
  timing: makeEaseOut(bounce),
  draw(progress) {
    $('.bal').style.top = to * progress + 'px'
  }
});

//fade in pages
$(document).ready(function() {

$('body').css('display', 'none');

$('body').fadeIn(1000);



$('.link').click(function(event) {

event.preventDefault();

newLocation = this.href;

$('body').fadeOut(1000, newpage);

});



function newpage() {

window.location = newLocation;

}

});

// Website.html text animation scroll
//fade content in on scroll
$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top;
      // + $(this).outerHeight();

      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});
