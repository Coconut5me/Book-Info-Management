const express = require("express")
const app = express()
const port = 3000
const morgan = require("morgan")
app.use(morgan("combined"))
const bodyParser = require("body-parser")
app.use(bodyParser.json())
//create default API
app.get("/", (req, res) => {
    res.send("Hello Restful API")
})
app.listen(port, () => {
    console.log(`My Server listening on port ${port}`)
})
const cors = require("cors")
app.use(cors())
let database = [
    { 
        "Name": "Giáo trình Tin học cơ bản",
        "Price": 26000.00,
        "Description": "Nội dung của cuốn: Tin Học Cơ Bản Windows XP gồm có 7 chương: Chương 1: Một số vấn đề cơ bản. Chương 2: Sử dụng nhanh thanh công cụ và thanh thực đơn trong My Computer và Windows Explorer. Chương 3: Các thao tác trong windows XP. Chương 4: Các thiết lập trong Windows XP. Chương 5: Bảo trì máy tính. Chương 6: Các phím tắt Chương 7: Hỏi và đáp các thắc mắc. Xin trân trọng giới thiệu cuốn sách cùng bạn",
        "Avatar": "THCB.jpg",
        "UpdateAt": "25/10/2014 12:00:00 SA",
        "StockQty": "120",
        "CDCode": "7",
        "PublicerCode": "1",
    },
    { 
        "Name": "Giáo trình Cơ Sở Dữ Liệu Với Visual Basic 2005 Và ADO.NET 2.0",
        "Price": 12000.00,
        "Description": "Cuốn sách này gồm 3 phần sau: Phần 1: Xử lý văn bản trong Microsoft thiệu các nội dung sau: Chương 1: Căn bản về cơ sở dữ liệu. Chương 2: Các bộ kết nối và tương tác dữ liệu. Chương 3: Bộ chứa dữ liệu DataSet. Chương 4: Bộ điều hợp dữ liệu DataAdapter. Chương 5: Sử dụng các điều khiến ràng buộc dữ liệu. Chương 6: Tạo báo cáo với Crystal Report. Chương 7: ADO.NET và XML. Xin trân trọng giới thiệu cùng các bạn.",
        "Avatar": "TH004.png",
        "UpdateAt": "23/10/2013 12:00:00 SA",
        "StockQty": "25",
        "CDCode": "3",
        "PublicerCode": "2",
    },
    { 
        "Name": "Visual Basic 2005 Tập 3, Quyển 2: Lap Trình Web",
        "Price": 20000.00,
        "Description": "Visual Basic 2005 Tập 3, Quyển 2: Lập Trình Web Với Cơ Sở Dữ Liệu sẽ cung cấp kỹ thuật và hướng dẫn bạn: Tự học xây dựng ứng dụng Web quản lý CSDL toàn diện với ADO.NET 2.0 và ASP.NET. Khai thác các đối tượng và nguồn dữ liệu dành cho WebForm. Sử dụng các điều khiển dữ liệu đặc thù dành riêng cho ASP.NET và Web. Làm quen với những khái niệm xử lý dữ liệu hoàn toàn mới. Ràng buộc dữ liệu với các thành phần giao diện Web Forms. Thiết kế ứng dụng Web &quotQuản lý CD Shop&quot trực quan và thực tế. Cung cấp một kiến thức hoàn chỉnh về Web cho các bạn yêu thích ngôn ngữ Visual Basic và .NET Framework. Sách có kèm theo CD-ROM bài tập.",
        "Avatar": "LTWeb2005.jpg",
        "UpdateAt": "15/09/2014 12:00:00 SA",
        "StockQty": "240",
        "CDCode": "8",
        "PublicerCode": "4",
    },
]
app.get("/books125", cors(), (req, res) => {
    res.send(database)
})
app.get("/books125/:id", cors(), (req, res) => {
    id = req.params["id"]
    let p = database.find(x => x.CDCode == id)
    res.send(p)
})
app.post("/books125", cors(), (req, res) => {
    //put json book into database
    database.push(req.body);
    //send message to client(send all database to client)
    res.send(database)
})
app.put("/books125", cors(), (req, res) => {
    book = database.find(x => x.CDCode == req.body.CDCode)
    if (book != null) {
        book.Name = req.body.Name
        book.Price = req.body.Price
        book.Description = req.body.Description
        book.Avatar = req.body.Avatar
        book.UpdateAt = req.body.UpdateAt
        book.StockQty = req.body.StockQty
        book.CDCode = req.body.CDCode
        book.PublicerCode = req.body.PublicerCode
    }
    res.send(database)
})
app.delete("/books125/:id",cors(),(req,res)=>{
    id=req.params["id"]
    database = database.filter(x => x.CDCode !== id);
    res.send(database) 
    })