// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.

window.localStorage.setItem('logonattempt', "N");

(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    //$(window).load(function () { setTimeout(onDeviceReady, 100); });

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
       
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        //document.addEventListener( 'offline', onOffline.bind(this), false);
        //document.addEventListener( 'online', onOnline.bind(this), false);
        logon();

        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
        logon();
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
        logon();
    };
    
    function onOffline() {
      // Handle the offline event
      alert("You are offline!");
    }
	
    function onOnline() {
     // Handle the online event
     alert("You are online!");
    }
})();

function logon() {
  // check to see if the network is reachable
  $("#currop").html("checking internet access ...");
  checkConnection();
   //window.location.assign("http://dev1.insurance.ohio.gov/_forms/mlogin.aspx?ReturnUrl=%2foshiip%2fmtest%2f_layouts%2fAuthenticate.aspx%3fSource%3d%252Foshiip%252Fmtest&Source=%2Foshiip%2Fmtest");
}

 

function checkConnection() {
   var networkState = navigator.network.connection.type;
   var states = {};
   states[Connection.UNKNOWN]  = 'Unknown connection';
   states[Connection.ETHERNET] = 'Ethernet connection';
   states[Connection.WIFI]     = 'WiFi connection';
   states[Connection.CELL_2G]  = 'Cell 2G connection';
   states[Connection.CELL_3G]  = 'Cell 3G connection';
   states[Connection.CELL_4G]  = 'Cell 4G connection';
   states[Connection.NONE]     = 'No network connection';

   //alert('Connection type: ' + states[networkState]);
   if( states[networkState] == 'No network connection'){
     $(".panel-body").html("<br/><br><b style='color:red'>" +  states[networkState] + "</b>");
   } else{
     $("#currop").html("connecting ...");
     window.location.assign("http://bucifan.azurewebsites.net/OSU2015.html");
   }  
}   

function gotolookup(){
  window.location.assign("http://bucifan.azurewebsites.net/OSU2015.html");
}              