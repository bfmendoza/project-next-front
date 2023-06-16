import mongoose from 'mongoose'

export default async function connectMongo() {

    try{
        return await mongoose.connect('mongodb+srv://cobfonsciareli:ZsYKiiZ3AAMbCbR8@testdb.roa1m8l.mongodb.net/')
    }catch (error) {
        return console.error(error)
    }

}

