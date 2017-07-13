$(document).ready(function() {
var romanNumerals = [];

  $("form.romanNumeral").submit(function(event) {
//Front End Logic//
    var input = $("input:text").val();
    function romanNumeralOutput(newArray) {
      $("#output").append("<li>" + newArray + "</li>");
    };
    romanNumeralOutput(romanNumerals.join(""));

    
//BackEnd Logic//
    var splitInput = input.split("");//this will take user input and return it to a split array
    var zero = splitInput.slice(0,1);
    var one = splitInput.slice(1,2)
    var two = splitInput.slice(2,3)
    var three = splitInput.slice(3,)

    // thousands position
    if (zero == "1") {
      romanNumerals.push("M");
    } else if (zero == "2") {
      romanNumerals.push("MM");
    } else if (zero == "3") {
      romanNumerals.push("MMM");
    }
    //  hundreds position
    if (one == "1") {
      romanNumerals.push("C");
    } else if (one == "2") {
      romanNumerals.push("CC");
    } else if (one == "3") {
      romanNumerals.push("CCC");
    } else if (one == "4") {
      romanNumerals.push("CD");
    } else if (one == "5") {
      romanNumerals.push("D");
    } else if (one == "6") {
      romanNumerals.push("DC");
    } else if (one == "7") {
      romanNumerals.push("DCC");
    } else if (one == "8") {
      romanNumerals.push("DCCC");
    } else if (one == "9") {
      romanNumerals.push("CM");
    }
    //ten postion
    if (two == "1") {
      romanNumerals.push("X");
    } else if (two == "2") {
      romanNumerals.push("XX");
    } else if (two == "3") {
      romanNumerals.push("XXX");
    } else if (two == "4") {
      romanNumerals.push("XL");
    } else if (two == "5") {
      romanNumerals.push("L");
    } else if (two == "6") {
      romanNumerals.push("LX");
    } else if (two == "7") {
      romanNumerals.push("LXX");
    } else if (two == "8") {
      romanNumerals.push("LXXX");
    } else if (two == "9") {
      romanNumerals.push("XC");
    }
//    ones position
    if (three == "1") {
      romanNumerals.push("I");
    } else if (three == "2") {
      romanNumerals.push("II");
    } else if (three == "3") {three
      romanNumerals.push("III");
    } else if (three == "4") {
      romanNumerals.push("IV");
    } else if (three == "5") {
      romanNumerals.push("V");
    } else if (three == "6") {
      romanNumerals.push("VI");
    } else if (three == "7") {
      romanNumerals.push("VII");
    } else if (three == "8") {
      romanNumerals.push("VIII");
    } else if (three == "9") {
      romanNumerals.push("IX");
    }
    event.preventDefault();
  });
});
