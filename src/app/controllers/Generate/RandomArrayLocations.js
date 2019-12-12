/* eslint-disable no-plusplus */
/* eslint-disable radix */
import crypto from 'crypto';

class RandomArrayLocations {
  async index(req, res, next) {
    const { latitude, longitude } = req.body;
    const min = 5;
    const max = 4000;
    const response = [{ latitude, longitude, label: 'Truck' }];

    for (let i = 0; i < Math.floor(Math.random() * Math.floor(20)) + 1; i++) {
      const randomLat = JSON.parse(
        `${`${latitude}`.split('.')[0]}.${parseInt(
          Math.abs(`${latitude}`.split('.')[1]) +
            Math.abs((Math.random() * (max - min) + min) / 2)
        )}`
      );
      const randomLong = JSON.parse(
        `${`${longitude}`.split('.')[0]}.${parseInt(
          Math.abs(`${longitude}`.split('.')[1]) +
            Math.abs((Math.random() * (max - min) + min) / 2)
        )}`
      );
      const label = crypto
        .randomBytes(20)
        .toString('hex')
        .substring(0, 10);
      response.push({
        latitude: randomLat,
        longitude: randomLong,
        label,
      });
    }

    res.status(201).json(response);
  }
}

export default new RandomArrayLocations();
