const Drone = require('./index');
const config = require('./config.json');

Drone.create = function (options) {
    return new Drone({ ...options, uuid: config.uuid });
}

module.exports = Drone;
