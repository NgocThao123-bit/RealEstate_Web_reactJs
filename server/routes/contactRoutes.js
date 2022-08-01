const express = require('express');
const router = express.Router();

const dbContact = require('../dbfiles/dbContact');

router.route('/getAll').get((request, response)=>{
    dbContact.getContacts().then(result =>{
        console.log(result);
        response.json(result);
      
    })
})

router.route('/:contactId').get((request, response)=>{
    dbContact.getThisContacts(request.params.contactId).then(result =>{
        console.log(result);
        response.send(result);

    })
})


router.route('/addContact').post((request, response) =>{
    let contact = request.body
    console.log(contact)
    dbContact.addContact(contact).then(result =>{
        console.log(result)
        response.status(201).json(result);
    })
} )
router.route('/updateContact').put((request, response) =>{
    let contact = request.body
    console.log(contact)
    dbContact.updateContact(contact).then(result =>{
        console.log(result)
        response.status(201).json(result);
    })
} )

router.route('/delete/:contactId').delete((request, response)=>{
  
    dbContact.deleteById(request.params.contactId).then(result =>{
   
        response.json(result);
    })
})

module.exports = router;