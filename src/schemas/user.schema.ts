import * as mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  dateofbirth: { type: Date, required: true },
  dateOfRegistry: { type: Date, default: Date.now },
  profession: { type: String, required: true },
  rut: { type: String, required: true },
  cellphone: { type: String, required: true },
});

export default UserSchema;
