/*
 * Practice on Elements
 */

// get all the hot class elements- change them to cool class
$('.hot').each(function () {
  $(this).removeClass('hot');
  $(this).addClass('cool');
});

// traverse the elements
$('#two').next().text('milk');
// add a new element by clicking the plus sign
$('#todo').append('<li>candy</li>');

console.log('right here')
// before and after are for siblings
// append and prepend are for parent
$('#add').click(addElement);
function addElement() {
  // add a new element
    //$('#todo').append('<li>cake</li>');
  // add a input text box
    $('#todo').append('<li><<input type="text"></li>');
  // whenever the user are done add the element
    $('input').blur(function(){
      $(this).parent().addClass('cool');
      var userInput = $(this).val();
      $(this).parent().text(userInput);
    });
}

// bind click with the event handler
$('li').click(changeStyle);
//  click the li element will change the changeStyle
//  three style : complete, cool, hot
function changeStyle() {
  if ($(this).hasClass('cool')) {
    $(this).removeClass('cool');
    $(this).addClass('complete');
  }else if($(this).hasClass('complete')){
    $(this).removeClass('complete');
    $(this).addClass('cool');
  }else{
    $(this).addClass('cool');
  }
}

// delete complete element by clicking the trash can
document.getElementById('remove').addEventListener('click', removeElement);

function removeElement() {
  // remove the marked elements  -- element with style complete
  $('li.complete').remove();
}
