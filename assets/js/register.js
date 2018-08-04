$(document).ready(function() {
  $("#hideLogin").click(function() {
    console.log("login");
    $("#loginForm").hide();
    $("#registerForm").show();
  });

  $("#hideRegister").click(function() {
    $("#loginForm").show();
    $("#registerForm").hide(); //Pk ne se cache pas?
  });
});
