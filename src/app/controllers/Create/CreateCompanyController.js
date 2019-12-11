import md5 from 'md5';
import Company from '../../models/Company';

class CreateCompanyController {
  async store(req, res) {
    const { companyName, companyDocument } = req.body;

    const company = await Company.findOne({ companyDocument });

    if (!company) {
      const companyToken = md5(companyDocument);

      await Company.create({
        companyName,
        companyDocument,
        companyToken,
      })
        .then(data => {
          return res.send(data);
        })
        .catch(error => {
          return res.send({ erro: error });
        });
    }

    return res.send({ erro: 'Company already exists' });
  }
}

export default new CreateCompanyController();
