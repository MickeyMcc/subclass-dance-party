// Creates and returns a new dancer object that can step
var Ship = function(top, left, timeBetweenSteps, lineUpSpot) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.lineUpSpot = lineUpSpot;
  //var dancer = {};

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="ship"></span>');
  
  this.step();
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

  //return dancer;
};

Ship.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  console.log('im trying');
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Ship.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  if (!this.$node.hasClass('stop')) {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  } else {
    this.lineUp();
  }
};

Ship.prototype.lineUp = function() {
  this.$node.animate({
    top : 450,
    left : this.lineUpSpot
  });
  this.step.bind(this);
};

