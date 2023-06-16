import { Schema, model, models } from "mongoose";


const clientSchema = new Schema({
    name: String
},
{
    timestamps:true,
    versionKey: false
})

const Client = models.Client || model("Client", clientSchema)

export default Client