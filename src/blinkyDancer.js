var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //this.timeBetweenSteps = timeBetweenSteps;
  //console.log(constructor.step);
  //this.oldStep = makeDancer.prototype.step;
  //console.log(this.oldStep);
  this.timeBetweenSteps *= 5;
  // return blinkyDancer;
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// makeBlinkyDancer.prototype.oldStep = function() {
//   setTimeout(this.step.bind(this), this.timeBetweenSteps);
// };
makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);

  this.move();
};


makeBlinkyDancer.prototype.move = function() {
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
