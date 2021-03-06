const shopService = require('../services/Shop.service');

module.exports.create = async (req, rse, next)=>{
    try{
        const shop = await shopService.create(req.body);
        return res.status(200).json(shop);
    } catch (e){
        console.error(e);
        return res.status(500).json({ message: 'Something Went Wrong'});
    }
}