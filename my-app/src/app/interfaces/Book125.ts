export interface IBook{
    Name: string,
    Price: number,
    Description: string,
    Avatar: string,
    UpdateAt: string,
    StockQty: number,
    CDCode: number,
    PublicerCode: number,
}
export class Book{
    constructor(
    public Name:string="",
    public Price:number=0,
    public Description:string="",
    public Avatar:string="",
    public UpdateAt:string="",
    public StockQty:number=0,
    public CDCode:number=0,
    public PublicerCode:number=0,
    )
    {}
    }
    