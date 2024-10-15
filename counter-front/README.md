# computools-counter

Test task counter + websockets

React and Nodejs task. This task has a time limit of 30 minutes.
Record your screen and attach the solution files with the screen recording.
• Create a React component called Counter. The component should show a counter value and a button. Each click on the button should increase the counter by one.
• Create a Nodejs server that listens to connections on WebSocket. Send a message to all connected clients once a second. The message should ask the clients for their current counter value.
• On the Counter component, listen to these messages and send back the current counter value.
• On the backend, print the responses.
