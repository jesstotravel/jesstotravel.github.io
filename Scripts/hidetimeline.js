$(document).ready(function(){
  $("#timeline").click(function(e){
    e.stopPropagation();
  $(".active").toggle();
 });});
$(function(){
$(document).click(function(){
    $('.active').hide();
});
$(".active").click(function(e){
    e.stopPropagation();
});
});