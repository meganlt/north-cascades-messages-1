const express = require('express');
const router = express.Router();

let messages = [];

router.get( '/', ( req, res )=>{
    res.send( messages );
})

router.post( '/', ( req, res )=>{
    messages.push( req.body );
    res.sendStatus( 200 );
})

module.exports = router;
