import { db } from "../data/connection";
const default_pic ="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTacIZyPxhaza5nDb3TWqrO51CExzSYEhQnvA&usqp=CAU";

export default class UserRepository {
  constructor() {}

  async saveNewUser(  name,  email,  password,  cash_balance,  profile_pic = default_pic ){
    try {
      return await db.query(
        "INSERT INTO users (name , email , password, cash_balance , profile_pic )VALUES(?,?,?,?,?)",
        [name, email, password, cash_balance, profile_pic]
      );
    } catch (error) {
      console.error(error);
    }
  }

  async user(name) {
    try {
      return await db.query("SELECT * FROM users WHERE name = ?", [name]);
    } catch (error) {
      console.error(error);
    }
  }

  async updateUser(user_name, cash_balance) {
    try {
      await db.query(`UPDATE users set cash_balance=? where name=?`, [ cash_balance,  user_name,]);
    } catch (error) {
      console.error(error);
    }
  }
}
