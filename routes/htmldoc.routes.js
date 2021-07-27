const{Router}=require("express");
const router= Router();
const {generate} = require("../controller/htmldoc.controller");
router.post("/generate", generate);

module.exports=router;