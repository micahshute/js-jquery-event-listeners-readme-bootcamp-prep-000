function getIt(){
  $("p").on("click", function(){
    alert("Hey!")
  })
} 

function frameIt(){
  $('img').addClass('tasty')
}

function pressIt(){
  $('#typing').on('keydown', function(key){
    if(key.which === 71){
      alert('g key pressed');
    }
  })
}

function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.');
  })
}

getIt();frameIt();pressIt();submitIt();

$(document).ready(function(){

// call functions here

});
