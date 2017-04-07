$('.go-btn').click(function() {
  var input = $('.user-input').val();
  $('.placeholder').html(input);
});

var index = 0;

//0. When user clicks 'Change image'
$('.change-img').click(function() {
  //1.Figure out what number?
  index++;
  if (index > 10) {
    index = 0;
  }
  //2.Update the img src
  $('.meme img').attr('src','http://lorempixel.com/600/400/cats/' + index);
});
