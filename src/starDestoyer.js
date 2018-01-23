var StarDestoyer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps *= 5;
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.addClass('starDestoyer');
};

StarDestoyer.prototype = Object.create(makeDancer.prototype);

StarDestoyer.prototype.constructor = StarDestoyer;

StarDestoyer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);

  this.move();
};


StarDestoyer.prototype.move = function() {
  setTimeout(this.move.bind(this), this.timeBetweenSteps);

  var newTop = Math.floor(Math.random()*1250) - 1000;
  var newLeft = Math.floor(Math.random()*2000) - 1000;
  //var newDuration = Math.floor(Math.random()*this.timeBetweenSteps);

  this.$node.animate({
    top: newTop,
    left: newLeft
  }, this.timeBetweenSteps, this.move.bind(this)
  );


};
