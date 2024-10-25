var array = ["red", "green", "blue", "yellow", "deeppink", "purple"];
var myInterval = null;


function removeElement() {
    let last = array.pop();
    array.unshift(last)
    console.log(array)
    $("#val1").css("background-color",array[0])
    $("#val2").css("background-color",array[1])
    $("#val3").css("background-color",array[2])
    $("#val4").css("background-color",array[3])
    $("#val5").css("background-color",array[4])
    $("#val6").css("background-color",array[5])
}

$("#btn").click(function(){
    clearInterval(myInterval,1000)
    myInterval = setInterval(removeElement,1000)
})
$("#btn1").click(function(){
    clearInterval(myInterval,1000)
})