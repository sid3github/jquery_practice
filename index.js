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

$(function(){
  $('h1').click(function(){
    $('.sample').slideToggle(1000);
  })
})