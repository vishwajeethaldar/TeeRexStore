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

export interface filterval {
    colors:{
        red:string;
        blue:string;
        green:string;
    };
    gender:{
        men:string;
        women:string;
    };
    price:{
        first:string;
        second:string;
        third:string;
    }
    types:{
        polo:string;
        hoodie:string;
        basic:string;
    }
}