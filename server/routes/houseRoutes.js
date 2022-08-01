const express = require('express');
const router = express.Router();
const dbHouses = require('../dbfiles/dbHouses');

router.route('/listingHouse').get((request, response)=>{
    dbHouses.getAllHouse().then(result =>{       
        response.json(result);      
    })
})

router.route('/house/:houseId').get((request, response)=>{
    
    dbHouses.getHouseById(request.params.houseId).then(result =>{
 
        response.send(result);
    })
})
router.route('/photoList/:houseId').get((request, response)=>{

    dbHouses.getListPhotoById(request.params.houseId).then(result =>{
 
        response.send(result);
    })
})
router.route('/houses/:typeHouse').get((request, response)=>{
   
    dbHouses.getHouseByType(request.params.typeHouse).then(result=>{
      
        response.send(result);
    })
})

router.route('/location/:location').get((request, response)=>{    
    dbHouses.getHouseByLocation(request.params.location).then(result=>{    
        response.send(result);
    })
})

router.route('/addHouse').post((request, response) =>{
    let house = request.body
   
    dbHouses.addHouse(house).then(result =>{
      
        response.status(201).json(result);
    })

} )

router.route('/filterHouse/:location/:type/:price/:propertyID').get((request, response) =>{
    
    let location =  request.params.location;
    let type =  request.params.type;
    let propertyID =  request.params.propertyID;
    let price =  request.params.price;
    
    dbHouses.filterHouse(location,type,price,propertyID).then(result =>{      
        response.send(result);        
    })

} )

router.route('/updateHouse').put((request, response) =>{
    let house = request.body
   
    dbHouses.updateHouse(house).then(result =>{
        
        response.status(201).json(result);
    })
} )

router.route('/delete/:houseId').delete((request, response)=>{
  
    dbHouses.deleteHouseById(request.params.houseId).then(result =>{
   
        response.json(result);
    })
})

router.route('/deleteAll/').delete((request, response)=>{
  
    dbHouses.deleteAllHouse(request.body).then(result =>{
   
        response.json(result);
    })
})

router.route('/price/:orderType').get((request, response)=>{
    
    dbHouses.orderHouseByPrice(request.params.orderType).then(result =>{
 
        response.send(result);
    })
})
router.route('/property/:propertyID').get((request, response)=>{
    
    dbHouses.findHouseByProperty(request.params.propertyID).then(result =>{
 
        response.send(result);
    })
})

module.exports = router;