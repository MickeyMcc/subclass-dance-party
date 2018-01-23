var Enterprise = function(top, left, timeBetweenSteps, lineUpSpot) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  Ship.call(this, top, left, timeBetweenSteps, lineUpSpot);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //this.timeBetweenSteps = timeBetweenSteps;
  //console.log(constructor.step);
  //this.oldStep = Ship.prototype.step;
  //console.log(this.oldStep);
  this.$node.addClass('Enterprise');

  this.timeBetweenSteps *= 5;
  // return blinkyDancer;
};

Enterprise.prototype = Object.create(Ship.prototype);

Enterprise.prototype.constructor = Enterprise;

// Enterprise.prototype.oldStep = function() {
//   setTimeout(this.step.bind(this), this.timeBetweenSteps);
// };
Enterprise.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Ship.prototype.step.call(this);

  this.move();
};


Enterprise.prototype.move = function() {
  if (!this.$node.hasClass('stop')) {
    setTimeout(this.move.bind(this), this.timeBetweenSteps);

    var newTop = Math.floor(Math.random()*1250);
    var newLeft = Math.floor(Math.random()*2000);
    //var newDuration = Math.floor(Math.random()*this.timeBetweenSteps);

    this.$node.animate({
      top: newTop,
      left: newLeft
    }, this.timeBetweenSteps, this.move.bind(this)
    );
  } 
};
