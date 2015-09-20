$("#result").hide();
$("#largestNumber").hide();
$( ".highlight" ).hide();

var data = new Array();

$("#target").submit(function(event){
    var largestNum;
    var largestNumArray = new Array();
    var userInput;
    //get user data
    userInput = $("input").val();
    // check if user sends empty string
    if(userInput === ""){
        $("#largestNumber").hide();
        $(".result").remove();
        $("#result").removeClass('summary').addClass('warning').fadeIn( "slow").append("<h3 class='text-center result'>" + "Enter arrays consecutively : [2,4,3] then press 'Add Array' button, then [6,3,7] and so on"+"</h3>");

    } else {

        //insert user values into data array
        data.push(userInput); // adding elements to array
        // Make input box blank
        $( "input" ).val("");

        // Display the elements of the array
        $(".result").remove();
        $("#largestNumber").hide();
        $("#result").removeClass('warning').addClass('summary').fadeIn( "slow").append("<h5 class='text-center result'>"+ "Your Array has ("+ data.length +") element(s): "+"<br><br>"+ "[ "+ data+" ]"+"<br><br>" +"<button id='list' class='btn btn-block btn-info custom'><i class='fa fa-plus-square'></i> Show Result </button>"+ "</h5>");
    }//end else


    // find largest Num
    $('#list').click(function() {
        //empty array on click
        largestNumArray = [];

        console.log(data);

        //convert ["[1,2,3]","[4,5,6]"] to [[1,2,3],[4,5,6]]
       var arr = data.map(JSON.parse);
        console.log("parsed Array "+" "+arr);
        // Sort each sub-array
        for(var i = 0; i < data.length ; i++){

            largestNum = arr[i].sort(function(a,b){return b-a;})[0];
            largestNumArray.push(largestNum);
        }

        // Display array of largest numbers
        $(".largestNumber").remove();
        $("#largestNumber").fadeIn("slow").append("<h5 class='text-center result largestNumber'>"+" largest numbers in your array : "+"<br><br>"+ "["+ largestNumArray+"]"+"</h5>");
    });

    event.preventDefault();
});// End Submit function



// View Code Aria
$(".showCode").click(function(){
    $( ".highlight" ).toggle( "slow");
    $( ".showCode" ).toggle( "slow");
});

//Blink text
function blinker() {
    $('.blink').fadeOut(1000);
    $('.blink').fadeIn(1000);
}

setInterval(blinker, 5000);
