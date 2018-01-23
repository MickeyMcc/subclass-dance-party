var Falcon = function(top, left, timeBetweenSteps, lineUpSpot) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  Ship.call(this, top, left, timeBetweenSteps, lineUpSpot);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.timeBetweenSteps *= 3;
  this.$node.addClass('Falcon');
  // return blinkyDancer;
};

Falcon.prototype = Object.create(Ship.prototype);

Falcon.prototype.constructor = Falcon;

Falcon.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  //this.oldStep();
  Ship.prototype.step.call(this);

  this.flex();
};

Falcon.prototype.flex = function() {

  if (!this.$node.hasClass('stop')) {

    var height = Math.floor(Math.random() * 100);
    width = 2 * height;

    this.top += Math.floor(Math.random() * 1400) - 700;
    this.left += Math.floor(Math.random() * 1400) - 700;

    this.$node.animate({
      height: height,
      width: width,
      top: this.top,
      left: this.left
    }, this.timeBetweenSteps);
  } 
};
