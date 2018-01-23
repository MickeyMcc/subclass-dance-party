var StarDestoyer = function(top, left, timeBetweenSteps, lineUpSpot) {
  //var blinkyDancer = Ship(top, left, timeBetweenSteps);
  Ship.call(this, top, left, timeBetweenSteps, lineUpSpot);

  this.timeBetweenSteps *= 5;
 
  this.$node.addClass('starDestoyer');
};

StarDestoyer.prototype = Object.create(Ship.prototype);

StarDestoyer.prototype.constructor = StarDestoyer;

StarDestoyer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  Ship.prototype.step.call(this);
  this.move();
};

StarDestoyer.prototype.move = function() {
  if (!this.$node.hasClass('stop')) {
    //setTimeout(this.move.bind(this), this.timeBetweenSteps);
    
    this.top += Math.floor(Math.random() * 800) - 400;
    this.left += Math.floor(Math.random() * 800) - 400;
    //var newDuration = Math.floor(Math.random()*this.timeBetweenSteps);

    this.$node.animate({
      top: this.top,
      left: this.left
    }, this.timeBetweenSteps);
  }

};
