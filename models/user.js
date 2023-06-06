import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email:{
        type: String,
        unique: [true, 'E-mail already exists!'],
        require: [true, 'E-mail is Required'],
    },
    username:{
        type: stringify,
        required: [true, 'Username is required!'],
        //username should match this regex
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image:{ type: String,}
});

// * Models is object provided by Mongoose that stores all the registered models.
// * Since it is not constantly running server we need to check if the model is already created to prevent the redefining of the same model multiple times.
// * We need to do this because we need to call this route every single time when the connection is established.

const User = models.User || model("User", UserSchema);

export default User;