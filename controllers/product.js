const Product = require('../models/product');

const getAllproducts = async(req,res)=>{
    const{company} = req.query;
  const  queryobject = {}
    if(company){
        queryobject.company = company
    }
    let page = Number(req.query.page)||1;
    let limit = Number(req.query.limit)||3;
    let skip =(page-1)*limit;
    const myData = await Product.find(queryobject).skip(skip).limit(limit)
     res.status(200).json({myData});
}
const getTestingproducts = async(req,res)=>{
    const myData = await Product.find(req.query)
    res.status(200).json({myData});
}
module.exports = {getAllproducts,getTestingproducts};
