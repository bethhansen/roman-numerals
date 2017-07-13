$(document).ready(function() {

  $("form.romanNumeral").submit(function(event) {
    event.preventDefault();
    var input = $("input:text").val();
    alert(input);
    var splitInput = input.split("");
    alert(splitInput);

  //   function makeArray(number) {
  //     alert("hi");
  //   var splitInput = number.split("");
  // };

    // alert(makeArray(input));
  });
});
