"use strict";

 $(document).ready(function() {
   $('#ListofFriends').click(
       function() {
           $('h1').css('background-color', 'red');
       }

   );
});

$('div').dbclick(function() {
    $(this).css('font-size', '18px)';
    alert('paragraph  was double clicked!');
});

$('li').hover(
    function() {
        $(this).css('color', 'red');
    },
    function() {
        $(this).css('color', 'black');
    }
);

