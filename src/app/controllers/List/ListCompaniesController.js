import Company from '../../models/Company';

class ListCompaniesController {
  async show(req, res) {
    await Company.find({}, (err, users) => {
      if (err) {
        res.send('Something went really wrong!!!');
      }
      return res.json(users).status(200);
    });
  }
}

export default new ListCompaniesController();
