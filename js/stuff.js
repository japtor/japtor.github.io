/* js to get page scroll percentage to pull off animating on scroll position, based on:
  https://css-tricks.com/books/greatest-css-tricks/scroll-animation/
  https://codepen.io/scottkellum/pen/WWeXab
*/

window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

// why wont this work!? (code in other files may have changed since I tried this btw)
$('#menuReveal').click(function() {
  console.log('butt');
  $('#bigNav').css('display','block');
});
