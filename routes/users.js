const express = require('express');
const router = express.Router();

router.get('/:name',function(req,res){
    // res.send('这是用户页'+req.params.name);
    res.render('users',{
        name: req.params.name
    })
})

module.exports = router;