// alert('uyer/gsfgsd');

var numbers = new Array(1,2,3,4,5)
var colors = ['red', 'green', 'yellow']
// alert(colors[0]);

// alert(numbers[3]);

colors.push('purple');

// colors[4] = 'aqua'

// alert(colors[3])

// alert(colors.length + numbers.length)

for(var i = 0; i < 3; i++){
  console.log('Its working');
};

numbers.forEach(function (x) {
  console.log(x);
});

colors.forEach(function(color){
  console.log(color + ' is my favourute color');
});

for (var i = 0; i < numbers.length; i++){
  console.log('current number is '  + numbers[i]);
};

var counter = 0;
while (counter < numbers.length){
    console.log('current number from while loop is '  + numbers[counter]);
    counter++;
};

// $().ready(function (){
//   $('body').click(function(){
//     console.log('the body has been clicked')
//   });
//   $()
// });
jQuery(document).ready(function(){
  $('#submitButton').click(function(){
    alert('submit button clicked');
  });
  // $('#createButton').click(function(){
  //   alert('create clicke')
  // })
  $('#createButton').click(function(){
    var first = $('#firstName').val();
    var last = $('#lastName').val();
    var numbers = $('#luckyNumbers').val();

    var newEmail = (first + last + numbers + '@gmail.com');

    $('#personEmail').val(newEmail);
  });
});
