
const { Schema, default: mongoose } = require("mongoose");

const usersSchema = new Schema({
    name: String,
    description: String
},
{
    timestamps: true,
});

const Users = mongoose.models.userapi || mongoose.model("userapi", usersSchema);

export default Users;