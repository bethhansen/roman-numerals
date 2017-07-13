$(document).ready(function() {
var romanNumerals = [];

  $("form.romanNumeral").submit(function(event) {
    event.preventDefault();
    var input = $("input:text").val();
    // alert(input);
    var splitInput = input.split("");//this will take user input and return it to a split array
    var zero = splitInput.slice(0,1);
    alert(zero);
    var one = splitInput.slice(0,1)
    var two = splitInput.slice(0,1)
    var three = splitInput.slice(0,1)

    // alert(splitInput);
    if (zero == "1") {
      romanNumerals.push("M");
      // alert(romanNumerals);
    } else if (zero == "2") {
      romanNumerals.push("MM");
    } else if (zero == "3") {
      romanNumerals.push("MMM");
      alert(romanNumerals);
    }
  });
});
