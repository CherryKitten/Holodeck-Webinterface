$("#submitButton").on("click", function(){
  let section = $("#sectionSelection").val()
  let redValue = $("#redValueSlider").val()
  let greenValue = $("#greenValueSlider").val()
  let blueValue = $("#blueValueSlider").val()
  let whiteValue = $("#whiteValueSlider").val()
  let linkText = "http://192.168.178.221/holodeck/"+section+"/"+redValue+","+greenValue+","+blueValue+","+whiteValue

//$("#testtext").text(linkText)
jQuery.get(linkText)
})

$(".presetClass").on("click", function(){
  setPreset($(this).attr('data-whichpreset'));
})

function setPreset(which){
//  $('#testtext').text("http://frickelicht.s0/holodeck/all/"+which);
jQuery.get("http://192.168.178.221/holodeck/all/"+which)
}
