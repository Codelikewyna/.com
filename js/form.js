
function send() {
  event.preventDefault();
  var name = document.querySelector("#name").value;
  var subject = document.querySelector("#title").value;
  var message = document.querySelector("#message").value;
    
  var body = "Good day, My name is " + name + "%0D%0A%0D%0AMessage: " + message;
  window.location.href = "mailto:codelikewyna@gmail.com?subject=" + subject + "&body=" + body;
}