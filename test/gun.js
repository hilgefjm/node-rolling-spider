const Drone = require('../hackatraining');
// const drone = Drone.create({ logger: console.log });
const drone = Drone.create();
let connected = false;
setTimeout(() => {
    if (!connected) {
        console.error('Didn\'t connect to any drones');
        process.exit();
    }
}, 8000);

console.log('Trying to connect...');
drone.connect((err) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log('Connected');
    connected = true;

    console.log('Firing gun');
    drone.fire();
    setTimeout(() => {
        console.log('Firing gun');
        drone.fire();
        setTimeout(() => {
            drone.disconnect();
            process.exit(0);
        }, 5000);
    }, 5000);
})
