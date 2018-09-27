
  function Result (form) {
    var TestVar = form.fname.value;
   
   document.getElementById("name").innerHTML=TestVar+",";
   $( "#p" ).replaceWith("The amount for each person is $");   
   var k=calc();
    document.getElementById("split").innerHTML=k;
  

};

function calc(x= parseFloat(document.getElementById("amount").value),y=parseInt(document.getElementById("people").value)){
   
    if(x<0||y<=0||isNaN(x)||x==null){
        
         return 0;
    }
    else{
        var split=x/y;
    return split;
    }
    }