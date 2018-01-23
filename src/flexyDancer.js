var FlexyDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.timeBetweenSteps *= 4;
  this.$node.addClass('flexyDancer');
  // return blinkyDancer;
};

FlexyDancer.prototype = Object.create(makeDancer.prototype);

FlexyDancer.prototype.constructor = FlexyDancer;

// FlexyDancer.prototype.oldStep = function() {
//   setTimeout(this.step.bind(this), this.timeBetweenSteps);
// };


FlexyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  //this.oldStep();

  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.flex();
};

FlexyDancer.prototype.flex = function() { 
  setTimeout(this.flex.bind(this), this.timeBetweenSteps);

  var height = Math.floor(Math.random()* 100);
  width = 2 * height;
  //var width = Math.floor(Math.random()* 60);
  var newTop = Math.floor(Math.random()*1100);
  var newLeft = Math.floor(Math.random()*1900);

  this.$node.animate({
    height: height,
    width: width,
    top: newTop,
    left: newLeft
  }, this.timeBetweenSteps, this.flex.bind(this)
  );
};
