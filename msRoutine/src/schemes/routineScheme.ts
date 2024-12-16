import {Schema, model} from 'mongoose';

const routineSchema = new Schema({
    userId: {type: String, require},
    name: {type: String, require},
    dateCreate: {type: String, require}
});

export const routineModel = model('routine', routineSchema);