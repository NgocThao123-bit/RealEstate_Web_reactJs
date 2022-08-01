const config = require('./dbconfig');
const sql = require('mssql');

const getContacts = async()=>{
    try {
        let pool = await sql.connect(config);
        let theseContacts = await pool.request().query(
            'select * from Contacts'
        );

        return theseContacts.recordset;
    } catch (e) {
        console.log('Database connection errorr in get This Contact, error posted next line. ');
        console.log(e);
    }
}

const getThisContacts = async(contactID)=>{
    try {
        let pool = await sql.connect(config);
        let theseContacts = await pool.request()
        .input('input_parameter', sql.Int, contactId)
        .query('select * from Contacts where contactID = @input_parameter');
        return theseContacts;
    } catch (e) {
        console.log('DATABASE QUERY ERROR IN getThisContact Error Posted Next Line');
        console.log(e);
    }
}

const addContact = async(contact) =>{
    try {
        let pool = await sql.connect(config);
        let addedContact = await pool.request()
        .input('contactID',sql.Int, contact.contactID)
        .input('lastName',sql.VarChar, contact.lastName)
        .input('firstName',sql.VarChar, contact.firstName)        
        .input('phoneNumber',sql.VarChar, contact.phoneNumber)       
        .input('email',sql.VarChar, contact.email)
        .input('message',sql.VarChar, contact.message)
        .input('status',sql.Bit, contact.status)
        .execute('InsertContact');
        return addedContact.recordsets;
    } catch (e) {
        console.log('DATABASE Post ERROR IN addContact Error Posted Next Line');
        console.log(e);
    }
}
const updateContact = async(contact) =>{
    try {
        let pool = await sql.connect(config);
        let addedContact = await pool.request()
        .input('contactID',sql.Int, contact.contactID)
        .input('lastName',sql.NVarChar, contact.lastName)
        .input('firstName',sql.NVarChar, contact.firstName)        
        .input('phoneNumber',sql.VarChar, contact.phoneNumber)       
        .input('email',sql.NVarChar, contact.email)
        .input('message',sql.NVarChar, contact.message)
        .input('status',sql.Bit, contact.status)
        .execute('UpdateContact');
        return addedContact.recordsets;
    } catch (e) {
        console.log('DATABASE Post ERROR IN updateContact Error Posted Next Line');
        console.log(e);
    }
}

const deleteById = async(Id)=>{
    try {
        let pool = await sql.connect(config);
        let thisHouse = await pool.request()
        .input('input_parameter', sql.Int, Id)
        .query('DELETE FROM Contacts where contactID = @input_parameter');
        console.dir(houseId)
        return thisHouse.recordset;
    } catch (e) {
        console.log('DATABASE QUERY ERROR IN deleteHouseById Error Posted Next Line');
        console.log(e);
    }
}

module.exports = {getContacts, getThisContacts, addContact,updateContact, deleteById}