const { User } = require("../models/index");
const bcrypt = require("bcrypt");
class UserRepository {
  async create(data) {
    try {
      const { email, password } = data;

      const user = await User.create({
        email: data.email,
        password: data.password,
      });
      return user;
    } catch (error) {
      console.log("Something went wrong on repository level");
      throw { error };
    }
  }
  async destroy(userId) {
    try {
      await User.destroy({
        where: {
          id: userId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong on repository level");
      throw { error };
    }
  }
  async getById(userId) {
    try {
      const user = await User.findByPk(userId, {
        attributes: ["email", "id"],
      });
      return user;
    } catch (error) {
      console.log("Something went wrong on repository level");
      throw { error };
    }
  }
  async getByEmail(userEmail) {
    try {
      const user = await User.findOne({
        where: {
          email: userEmail,
        },
      });
      return user;
    } catch (error) {
      console.log("Something went wrong on repository level");
      throw { error };
    }
  }
}
module.exports = UserRepository;
