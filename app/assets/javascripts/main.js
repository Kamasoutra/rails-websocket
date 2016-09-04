$(function() {
  // Here we instantiate a new WebSocketRails instance
  dispatcher = new WebSocketRails($("#echo").data("uri"), true);

  // We check each time a character is typed in the input field
  $("#new_message").keypress(function(event) {
    // If user hit "return" key and message is not empty => send message
    if (event.which == 13 && $("#new_message").val() !== "") {
      send($("#new_message").val());
      $("#new_message").val("");
      $("#new_message").focus();
    }
  });

  // We bind the incoming message event
  dispatcher.bind("new_message",
    function(message) {
      $("#messages").append("<li>" + message + "</li>");
    });

  // Here we send the message in the websocket
  function send(message) {
    dispatcher.trigger("new_message", "<span class='username' style='color:" + color + ";'>" + username + " :</span> " + message);
  }

  // Returns a random username
  function randomUsername() {
    return Math.random().toString(36).substr(2, 9);
  }

  var username = randomUsername();
  var color = randomColor({luminosity: 'light'});
});
