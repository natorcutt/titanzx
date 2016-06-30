//$( ".cross" ).hide();
//$( "#menu" ).hide();
//$( ".hamburger" ).click(function() {
  //  $( "#menu" ).slideToggle( "slow", function() {
       // $( ".hamburger" ).hide();
       // $( ".cross" ).show();
//});
//});

//$( ".cross" ).click(function() {
  //  $( "#menu" ).slideToggle( "slow", function() {
          //$( ".cross" ).hide();
              // $( ".hamburger" ).show();
//});
//});


//Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
 //document.getElementsByIdName("topnav")[0].classList.toggle("responsive");


   $( ".cross" ).hide();
$( "topnav" ).hide();
$( "icon" ).click(function() {
    $( "#topnav" ).slideToggle( "slow", function() {
       $( "icon" ).hide();
      $( ".cross" ).show();
});
});
    $( ".cross" ).click(function() {
    $( "topnav" ).slideToggle( "slow", function() {
          $( ".cross" ).hide();
               $( "icon" ).show();
});
    });
    
   

                    

//document.getElementById("nav01").innerHTML =
//"<ul id='menu'>" +
//"<li><a href='index.html'>Home</a></li>" +
//"<li><a href='customers.html'>Data</a></li>" +
//"<li><a href='about.html'>About</a></li>" +
//"</ul>"; 



//document.getElementById('icon').addEventListener('click', checkNav);

//window.addEventListener("keyup",function(e) { 
 //   if (e.keyCode ==27) closeNav ();
//}, false); 

//function checkNav() {
 //   if (document.body.classList.contains('icon-active')) {
        closeNav ();
  //  } else { 
        openNav();
  //  }
//}

//function openNav() { 
  //  document.body.classList.add('icon-active');
//}