import Admin from '../../models/Admin';

class ListAdminsController {
  async show(req, res) {
    await Admin.find({}, (err, users) => {
      if (err) {
        res.send('Something went really wrong!!!');
      }
      return res.json(users).status(200);
    });
  }
}

export default new ListAdminsController();
