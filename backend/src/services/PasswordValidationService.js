import bcrypt from 'bcrypt';

export class PasswordValidationService {
  constructor() {}

  async hashedPassword(pass) {
    return await bcrypt.hash(pass, 10);
  }

  async passwordCheck(pass, db_pass) {
    return await bcrypt.compare(pass, db_pass);
  }
}
