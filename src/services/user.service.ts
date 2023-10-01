import * as mongoose from 'mongoose';
import UserSchema from '../schemas/user.schema';

class UserService {
  private userModel = mongoose.model('User', UserSchema);

  async create(userData) {
    const user = new this.userModel(userData);
    await user.save();
    return user;
  }

  async read(userId) {
    const user = await this.userModel.findById(userId);
    return user;
  }

  async update(userId, newUserData) {
    const user = await this.userModel.findByIdAndUpdate(userId, newUserData, { new: true });
    return user;
  }

  async delete(userId) {
    const user = await this.userModel.findByIdAndDelete(userId);
    return user;
  }
}

export default UserService;
