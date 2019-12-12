import Truck from '../../models/Truck';

class ListTrucksController {
  async show(req, res) {
    const { companyId } = req.body;

    await Truck.find({ owner: companyId }, (err, trucks) => {
      if (err) {
        res.send('Something went really wrong!!!');
      }
      return res.json(trucks).status(200);
    });
  }
}

export default new ListTrucksController();
