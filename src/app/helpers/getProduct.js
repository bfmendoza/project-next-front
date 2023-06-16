import axios from "axios";

const getProduct = async () =>{
    const {data} = await axios.get('https://bfmendoza-special-space-waddle-g9wqpwp95j9hw5v9-3000.preview.app.github.dev/products',null,{
    headers: {
        'Access-Control-Allow-Methods': '*',
    }
    })
    console.log(data);
    return data;
}

export default getProduct;