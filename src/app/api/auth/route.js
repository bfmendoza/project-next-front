import axios from "axios";
import { NextResponse } from "next/server";
import connectMongo from "../connection";
import Client from "../../models/clientSchema";


export async function POST(request) {
    
    //const {data} = await request.json();
    
    await connectMongo()
    const client = await Client.create({name:"Crystal"})
    /*const {data} = await axios.get('https://bfmendoza-special-space-waddle-g9wqpwp95j9hw5v9-3000.preview.app.github.dev/products',null,{
        headers: {
            'Access-Control-Allow-Methods': '*',
        }
    })*/
    
    /*const form = await axios.post('https://bfmendoza-special-space-waddle-g9wqpwp95j9hw5v9-3000.preview.app.github.dev/signin',{
        email: "bfmendoza@avatar-global.com",
        password: "Avatar123"
    },{
    headers: {
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    })*/

    /*const dataUser = await fetch("https://bfmendoza-special-space-waddle-g9wqpwp95j9hw5v9-3000.preview.app.github.dev/auth/signin",
        {
            body: data,
            method:"POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    )*/

    //const userData = data.json();
    return NextResponse.json(client)

}