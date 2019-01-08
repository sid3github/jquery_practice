// $(document).ready(function() {
// //   // loaded the document
// //   $("button").click(function() {
// //     // search for button element and added click functionality
// //     $("p").hide(); // then searched for para element and made it hidden (all para)
// //   });
// //   $("a").click(function() {
// //     $("h1").hide();
// //   });
//   $("button").click(function() {
//     $("p:first").hide();
//   });
// });

// $(function(){
// $("span").click(function() {
//   $("img").fadeToggle(800, function(){ // also taking callback function.
//     $(".sample").css("text-align","center");
//   });
// });
// });

// jquery slider
// $(function(){
//   $('h1').click(function(){
//     $('.sample').slideToggle(1000);
//   })
// })

//jquery animation
// $(function(){
//     $('h1').click(function(){
//       $('.sample').animate({
//         height: '+=300px',// relatively adding the height.
//         width: '500px'
//       }, 1000);
//     });
//   });

//callbacks

// $(document).ready(function(){
//   $('h1').click(function(){
//     $('.sample').slideToggle(1000, function(){
//       alert('animation complete!');
//     });
//   })
// })

// chaining

// $(document).ready(function(){
//   $('h1').click(function(){
//     $('.sample').css('background','pink') // function chaining happening
//     .slideUp(2000)
//     .slideDown(2000);
//   });
// });

// jquery project

$(function(){
  $('.btn1').click(function(){
    alert('text is: ' + $('h1').text());
  });
});

$(function(){
  $('.btn2').click(function(){
    alert('html is ' + $('h1').html());
  });
});

$(function(){
  $('.btn3').click(function(){
    alert('value is: ' + $('input').val());
  });
});

$(function(){
  $('.btn4').click(function(){
    alert('attr is ' + $('a').attr('href'));
  });
});


