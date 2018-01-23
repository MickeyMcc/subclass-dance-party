var Falcon = function(top, left, timeBetweenSteps, lineUpSpot) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  Ship.call(this, top, left, timeBetweenSteps, lineUpSpot);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.timeBetweenSteps *= 4;
  this.$node.addClass('Falcon');
  // return blinkyDancer;
};

Falcon.prototype = Object.create(Ship.prototype);

Falcon.prototype.constructor = Falcon;

Falcon.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  //this.oldStep();

  Ship.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.flex();
};

Falcon.prototype.flex = function() {

  if (!this.$node.hasClass('stop')) {
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
  } 
};
