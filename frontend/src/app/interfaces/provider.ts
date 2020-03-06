export interface ProviderRoot {
    success:boolean;
    quantity:number;
    provider:Provider;
    providers:Provider[];
};

export interface Provider {
    _id?:Number;
    name:String;
    cuit:Number;
    email:String;
    address:String;
    phone:Number;
    ri:Boolean;
};