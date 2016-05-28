// different way (option)
// $(document).ready(fuction() {

// });

// preferred way for js opening/closing
$(function() {
    $(document).mouseup(function (e)
  {
      var container = $(".test");

      if (!container.is(e.target) // if the target of the click isn't the container...
          && container.has(e.target).length === 0) // ... nor a descendant of the container
      {
          $('#timeline li').removeClass('active');
      }
  });

  $('#timeline li > a').on('click', function(){
    console.log($(this));
    $(this).closest('li').addClass('active');
  })

});