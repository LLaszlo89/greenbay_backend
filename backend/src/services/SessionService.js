import jwt from "jsonwebtoken";
import { createError } from "../models/customError.js";

export class SessionService {
  constructor({ userRepository, passwordValidationService }) {
    this.userRepository = userRepository;
    this.passwordValidationService = passwordValidationService;
  }

  async login({ username, password }) {
    if (!username) {
      throw createError(401, { message: "Username is missing" });
    } else if (!password) {
      throw createError(401, { message: "Password is missing" });
    } else {
      const user = await this.userRepository.user(username);
      if (user.results.length <= 0) {
        throw createError(404, { message: "User not exists" });
      } else if (
        !(await this.passwordValidationService.passwordCheck(
          password,
          user.results[0].password
        ))
      ) {
        throw createError(401, { message: "Password is incorrect" });
      } else {
        const tokenData = {
          user_id: user.results[0].id,
          user_name: user.results[0].name,
        };
        return {
          token: jwt.sign(tokenData, process.env.ACCESS_TOKEN_SECRET),
          cash_balance: user.results[0].cash_balance,
          name: user.results[0].name,
          picture: user.results[0].profile_pic,
        };
      }
    }
  }

  async addNewUser({ name , email ,password , cash_balance , profile_pic}){
  
    try {
      const hashed_pass = await this.passwordValidationService.hashedPassword(password)
     return await this.userRepository.saveNewUser(name , email , hashed_pass , cash_balance , profile_pic)
    } catch (error) {
      console.log(error)
    }
  }

  verifyToken(token) {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
  }
}
