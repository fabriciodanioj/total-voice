"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _crypto = require('crypto'); var _crypto2 = _interopRequireDefault(_crypto);

class RandomArrayLocations {
    async index(req, res, next) {
        let { latitude, longitude } = req.body;
        let min = 50, max = 4000, latNeg = latitude < 0, longNeg = longitude < 0;
        let response = [{latitude, longitude, label: "Truck"}];

        for(let i=0; i < Math.floor(Math.random() * Math.floor(20)); i++) {
            let randomLat = (Math.abs(parseInt(latitude)) + (Math.random() * (max - min) + min)) * (latNeg ? -1 : 1);
            let randomLong = (Math.abs(parseInt(longitude)) + (Math.random() * (max - min) + min)) * (longNeg ? -1 : 1);
            let label = _crypto2.default.randomBytes(20).toString('hex').substring(0, 10);
            response.append({
                latitude: randomLat,
                longitude: randomLong,
                label
            })
        }

        res.status(201).json(response);
    }
}


exports. default = new RandomArrayLocations();
