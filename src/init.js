$(document).ready(function() {
  window.dancers = [];
  var nextWidth = 10;
  var explosionCount = 0;
  $('body').on('click', '.ship', function(event) {
    console.log('boom');

    $(this).addClass('explosion');

    $(this).animate({
      height: 0,
      width: 0
    }, 2000);

    setTimeout(function() {
      $(this).toggle().bind(this);
    }, 3000);
    
    explosionCount++;
    $('#explosionCount').text( 'Explosions : ' + explosionCount);
  });



  $('.lineUp').on('click', function(event) {
    console.log('line up!');
    for (var i = 0; i < window.dancers.length; i++) {
      $(window.dancers[i][0]).toggleClass('stop');
    }

  });



  $('.addShipButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000,
      nextWidth
    );
    nextWidth = (nextWidth + 100) % 1600;
    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);
  });
});

