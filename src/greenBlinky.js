var GreenBlinkyDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps *= 5;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.addClass('greenBlinky');
};

GreenBlinkyDancer.prototype = Object.create(makeDancer.prototype);

GreenBlinkyDancer.prototype.constructor = GreenBlinkyDancer;

GreenBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step

  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();


  // var newTop = Math.floor(Math.random() * 350);
  // var newLeft = Math.floor(Math.random() * 1024);
  // //var newDuration = Math.floor(Math.random()*this.timeBetweenSteps);

  // this.$node.animate({
  //   top: newTop,
  //   left: newLeft
  // }, this.timeBetweenSteps, function () {
  //   move();
  // });

  //this.step();
  //this.setPosition(this.top, this.left);
};


GreenBlinkyDancer.prototype.move = function() {
  setTimeout(this.move.bind(this), this.timeBetweenSteps);

  var newTop = Math.floor(Math.random()*1250);
  var newLeft = Math.floor(Math.random()*2000);
  //var newDuration = Math.floor(Math.random()*this.timeBetweenSteps);

  this.$node.animate({
    top: newTop,
    left: newLeft
  }, this.timeBetweenSteps, this.move.bind(this)
  );


};
