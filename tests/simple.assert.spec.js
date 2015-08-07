describe('first test', function() {
    var counter = 0;

    beforeEach(function() {
        counter = 0;
    });

    it('Increments value', function() {
        counter++;
        expect(counter).toBe(1);
    });

    it('Decrease value', function() {
        counter--;
        expect(counter).toBe(-1);
    });

    it('Fail', function() {
       expect(1).toBe(false);
    });

});