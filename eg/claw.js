/*
  Connects to drone, opens & closes claw twice, disconnects and terminates
*/
var Drone = require('../');
var drone = new Drone();
var connected = false;
setTimeout(function() {
  if (!connected) {
    console.error('Didn\'t connect to any drones');
    process.exit();
  }
}, 8000);

console.log('Trying to connect...');
drone.connect(function (err) {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('Connected');
  connected = true;

  console.log('toggle claw');
  drone.toggleClaw(function() {
    console.log('toggle claw');
    drone.toggleClaw(function() {
      console.log('toggle claw');
      drone.toggleClaw(function() {
        console.log('toggle claw');
        drone.toggleClaw(function() {
          drone.disconnect();
          process.exit(0);
        });
      });
    });
  });
});
