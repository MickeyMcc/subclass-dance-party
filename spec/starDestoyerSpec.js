describe('StarDestoyer', function() {

  var destoyer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    destoyer = new StarDestoyer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(destoyer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes it move', function() {
    sinon.spy(destoyer.$node, 'animate');
    destoyer.step();
    expect(destoyer.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call move at least once per second', function() {
      sinon.spy(destoyer, 'move');
      expect(destoyer.move.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(destoyer.move.callCount).to.be.equal(1);
      
    });
  });
});