// export function Triangle(sideA, sideB, sideC) {
//   this.sideA = sideA;
//   this.sideB = sideB;
//   this.sideC = sideC;
// }
//
//
// Triangle.prototype.checkTriangle = function() {
//   if ( ((this.sideA + this.sideB) < this.sideC) || ((this.sideB + this.sideC) < this.sideA) || ((this.sideA + this.sideC) < this.sideB) )
//   {
//     return true;
//   } else {
//     return false;
//   }
// };
//
// Triangle.prototype.checkEquilateral = function() {
//   if ((this.sideA === this.sideB) && (this.sideB === this.sideC))
//   {
//     return true;
//   } else {
//     return false;
//   }
// };
//
// Triangle.prototype.checkIsosceles = function() {
//   if ((this.sideA === this.sideB) || (this.sideB === this.sideC)  || (this.sideA === this.sideC))
//   {
//     return true;
//   } else {
//     return false;
//   }
// };
//
// Triangle.prototype.checkScalene = function() {
//   if (((this.sideA !== this.sideB) && (this.sideB !== this.sideC)  && (this.sideA !== this.sideC)) &&  ( ((this.sideA + this.sideB) > this.sideC) || ((this.sideB + this.sideC) > this.sideA) || ((this.sideA + this.sideC) > this.sideB) ) )
//   {
//     return true;
//   } else {
//     return false;
//   }
// };

// -----------------------

export class Triangle {
  constructor(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
  }

  checkTriangle() {
    if ( ((this.sideA + this.sideB) < this.sideC) || ((this.sideB + this.sideC) < this.sideA) || ((this.sideA + this.sideC) < this.sideB) )
      {
        return true;
      } else {
        return false;
      }
    }

    checkEquilateral() {
      if ((this.sideA === this.sideB) && (this.sideB === this.sideC))
      {
        return true;
      } else {
        return false;
      }
    }

    checkIsosceles() {
      if ((this.sideA === this.sideB) || (this.sideB === this.sideC)  || (this.sideA === this.sideC))
      {
        return true;
      } else {
        return false;
      }
    }
  };
