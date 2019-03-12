import { Triangle } from "../src/js/triangle.js" ;
describe('Triangle', function() {

  it('should test whether a Triangle has three sides', function() {
    var triangle = new Triangle(3,4,5);
    expect(triangle.sideA).toEqual(3);
    expect(triangle.sideB).toEqual(4);
    expect(triangle.sideC).not.toEqual(6);
  });

  it('should test whether a Triangle can be formed from the inputs', function() {
    var notTriangle = new Triangle(2,3,9);
    expect(notTriangle.checkTriangle()).toEqual("not a triangle");
  });

  it('should test whether a Triangle has three equal sides', function() {
    var equilateralTriangle = new Triangle(9,9,9);
    expect(equilateralTriangle.checkEquilateral()).toEqual("is an equilateral triangle");
  });

  it('should test whether a Triangle has two equal sides', function() {
    var isoscelesTriangle = new Triangle(6,9,9);
    expect(isoscelesTriangle.checkIsosceles()).toEqual("is an isosceles triangle");
  });


  it('should test whether a Triangle has three unequal sides and can still form a triangle', function() {
    var scaleneTriangle = new Triangle(6,4,9);
    expect(scaleneTriangle.checkScalene()).toEqual("is a scalene triangle");
  });
});
