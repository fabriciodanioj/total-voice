import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { secret } from '../../../Config/auth.json';

import Admin from '../../models/Admin';

class AdminSessionController {
  async index(req, res) {
    const { email, password } = await req.body;

    const admin = await Admin.findOne({ email }).select('+password');

    if (!admin) {
      return res.status(401).send({ error: 'Admin not found' });
    }

    const match = await bcrypt.compare(password, admin.password);

    if (!match) {
      return res.status(401).send({ error: 'Password is wrong' });
    }

    admin.password = undefined;

    const token = jwt.sign({ id: admin.id }, secret, {
      expiresIn: 86400,
    });

    return res.status(202).json({ admin, token });
  }
}

export default new AdminSessionController();
