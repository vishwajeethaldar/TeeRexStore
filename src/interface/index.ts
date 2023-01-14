export interface product {
    "id": number,
    "imageURL":string
    "name": string,
    "type": string,
    "price": number,
    "currency": string,
    "color": string,
    "gender": string,
    "quantity": number,
    "addedtocart":boolean,
    "count":number
}


export interface IContext {
    products:Array<product>;
    totalcartItem:number
}

