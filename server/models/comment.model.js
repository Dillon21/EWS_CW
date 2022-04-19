import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name: {
      type: String,
      trim: true,
      required: 'Name is required'
    },

    comment: {
      type: String,
      trim: true,
      required: 'Comment is required'
    },

    created: {
        type: Date,
        default: Date.now
      }
})

const userModel = mongoose.model('Comments', UserSchema);
userModel.createIndexes();
export default userModel