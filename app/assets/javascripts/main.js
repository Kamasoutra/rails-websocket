$(function() {
  // Here we instantiate a new WebSocketRails instance
  dispatcher = new WebSocketRails($("#echo").data("uri"), true);

  // We check each time a character is typed in the input field
  $("#message").keypress(function(event) {
    // If user hit "return" key and message is not empty => send message
    if (event.which == 13 && $("#message").val() !== "") {
      send($("#message").val());
      $("#message").val("");
      $("#message").focus();
    }
  });

  // We bind the incoming message event
  dispatcher.bind("new_message",
    function(message) {
      $("#messages").append("<li>" + username + " : " + message + "</li>");
    });

  // Here we send the message in the websocket
  function send(message) {
    dispatcher.trigger("new_message", message);
  }

  function randUser() {
    return Math.random().toString(36).substr(2, 9);
  }

  var username = randUser();
});
