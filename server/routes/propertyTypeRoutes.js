const express = require('express');
const router = express.Router();
const dbPropertyType = require('../dbfiles/dbPropertyType');

router.route('/propertyTypes').get((request, response)=>{
    dbPropertyType.getAllPropertyType().then(result =>{
      
        response.json(result);
      
    })
})
router.route('/:houseId').get((request, response)=>{

    dbPropertyType.getHouseTypeById(request.params.houseId).then(result =>{
 
        response.send(result);
    })
})
module.exports = router;