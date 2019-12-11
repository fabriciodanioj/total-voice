/* eslint-disable no-shadow */
/* eslint-disable no-console */
import bcrypt from 'bcrypt';

import Admin from '../../models/Admin';
import Company from '../../models/Company';

class CreateAdminController {
  async store(req, res) {
    try {
      const { name, email, password, companyId, token } = await req.body;

      const checkEmail = await Admin.findOne({ email });

      if (email.length < 5) {
        res.send({ error: 'Please, insert a e-mail.' });
      }

      if (!checkEmail) {
        if (password.length >= 8) {
          const salt = bcrypt.genSaltSync(10);

          const passwordToSave = bcrypt.hashSync(password, salt);

          const { companyToken } = Company.findById(companyId);

          if (companyToken === token) {
            const user = await Admin.create({
              name,
              email,
              password: passwordToSave,
              companyId,
            });

            return res.json(user);
          }
          return res.send({ error: 'Company token is invalid' });
        }
        return res.send({ error: 'Password must be 8 or more digits' });
      }

      return res.send({ error: 'E-mail already exists' });
    } catch (error) {
      return res.status(400).send({ error: 'Registration failed' });
    }
  }
}

export default new CreateAdminController();
