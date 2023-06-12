import mongoose, {Schema, model, models} from "mongoose";

const PromptSchema = new Schema({
    prompt: {
        type: String,
        require: [true, 'Prompt is Required'],
    },
    tag:{
        type: String,
        require: [true, 'Tag is Required'],
    },
})

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;