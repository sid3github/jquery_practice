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

$(function(){
$("span").click(function() {
  $("img").toggle(1000, function(){
    $(".sample").css("text-align","center");
  });
});
});