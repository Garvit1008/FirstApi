const Product = require('../models/product');

/**
 * The function `getAllproducts` retrieves products based on company, page, and limit parameters and
 * returns the data in JSON format.
 * @param req - The `req` parameter in the `getAllproducts` function is the request object, which
 * contains information about the HTTP request made to the server. It includes details such as the
 * request query parameters, body, headers, and more. In this case, the function is using `req.query`
 * to access
 * @param res - The `res` parameter in the `getAllproducts` function is the response object that will
 * be sent back to the client. It is used to send the response data, such as JSON data or status codes,
 * back to the client making the request. In this case, the function is sending a JSON
 */
const getAllproducts = async(req,res)=>{
    const{company} = req.query;
  const  queryobject = {}
    if(company){
        queryobject.company = company
    }
    // let page = Number(req.query.page)||1;
    // let limit = Number(req.query.limit)||5;
    // let skip =(page-1)*limit;
/* The code snippet `const myData = await Product.find(queryobject).skip(skip).limit(limit)` is
querying the database to find products based on the `queryobject` criteria, skipping a certain
number of documents specified by `skip`, and limiting the number of documents returned to `limit`. */
    const myData = await Product.find(queryobject);
     res.status(200).json({myData});
}
const getTestingproducts = async(req,res)=>{
    const myData = await Product.find(req.query)
    res.status(200).json({myData});
}
module.exports = {getAllproducts,getTestingproducts};