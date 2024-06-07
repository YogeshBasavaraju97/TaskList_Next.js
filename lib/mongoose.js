import mongoose from 'mongoose';

const ConnectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('connected');
  } catch (error) {
    console.log(error);
    console.log('Not connected');
  }
};

export default ConnectMongoDB;
