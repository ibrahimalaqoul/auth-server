'use strict';

module.exports = (req,res,next)=>{
res.status(403).json({
    status : 403,
    message : 'Page Not-Found'
})
}