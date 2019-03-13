import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Triangle } from "./js/triangle.js" ;

$(document).ready(function(){
  $("form#triangle").submit(function(event){
    var sideA = parseInt($("input#sideA").val());
    var sideB = parseInt($("input#sideB").val());
    var sideC = parseInt($("input#sideC").val());

    var testTriangle = new Triangle(sideA, sideB, sideC);
    // not triangle
    if ( testTriangle.checkTriangle() === true )  {
      $(".response-wrapper").show();
      $(".not-triangle").show();
      $(".equilateral").hide();
      $(".isosceles").hide();
      $(".scalene").hide();
    }
    // equilateral
    else if ( testTriangle.checkEquilateral() === true )   {
      $(".response-wrapper").show();
      $(".not-triangle").hide();
      $(".equilateral").show();
      $(".isosceles").hide();
      $(".scalene").hide();
    }
    // isosceles
    else if  ( testTriangle.checkIsosceles() === true )  {
      $(".response-wrapper").show();
      $(".not-triangle").hide();
      $(".equilateral").hide();
      $(".isosceles").show();
      $(".scalene").hide();
    }
    //scalene
    else {
      $(".response-wrapper").show();
      $(".not-triangle").hide();
      $(".equilateral").hide();
      $(".isosceles").hide();
      $(".scalene").show();
    }
    event.preventDefault();
  });

  $("button#reset").click(function(){
    $("input#sideA").val("");
    $("input#sideB").val("");
    $("input#sideC").val("");
    $(".response-wrapper").hide();
  });
});
