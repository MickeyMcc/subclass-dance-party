var Enterprise = function(top, left, timeBetweenSteps, lineUpSpot) {

  Ship.call(this, top, left, timeBetweenSteps, lineUpSpot);

  this.$node.addClass('Enterprise');

  this.timeBetweenSteps *= 5;
};

Enterprise.prototype = Object.create(Ship.prototype);

Enterprise.prototype.constructor = Enterprise;

Enterprise.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Ship.prototype.step.call(this);

  this.move();
};


Enterprise.prototype.move = function() {
  if (!this.$node.hasClass('stop')) {
    
    this.top += Math.floor(Math.random() * 1000) - 500;
    this.left += Math.floor(Math.random() * 1000) - 500;

    this.$node.animate({
      top: this.top,
      left: this.left
    }, this.timeBetweenSteps);
  }

};
