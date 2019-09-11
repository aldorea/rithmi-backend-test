import mongoose, {Schema, model} from 'mongoose';

export interface Sample extends mongoose.Document{
    date: Date,
    heartStatus: Number,
    pulse: Number,
    hasECG: Boolean,
    anomaly: Boolean,
    user: Number
};

const SampleSchema = new Schema({
    date: Date,
    heartSt7atus: Number,
    pulse: Number,
    hasECG: Boolean,
    anomaly: Boolean,
    user: Number
});

export default model<Sample>('Sample', SampleSchema);