const config = require('./dbconfig');
const sql = require('mssql');

const getAllHouse = async()=>{
    try {
        let pool = await sql.connect(config);
        let theseHouses = await pool.request().query(
            'select * from HouseInfo'
        );

        return theseHouses.recordset;
    } catch (e) {
        console.log('Database connection errorr in get all house, error posted next line. ');
        console.log(e);
    }
}

const getHouseById = async(houseId)=>{
    try {
        let pool = await sql.connect(config);
        let thisHouse = await pool.request()
        .input('input_parameter', sql.Int, houseId)
        .query('select * from HouseInfo where houseID = @input_parameter');
       
        return thisHouse.recordset;
    } catch (e) {
        console.log('DATABASE QUERY ERROR IN getHouseById Error Posted Next Line');
        console.log(e);
    }
}

const getListPhotoById = async(houseId)=>{
    try {
        let pool = await sql.connect(config);
        let thisHouse = await pool.request()
        .input('input_parameter', sql.Int, houseId)
        .query('select * from listPhoto where houseID = @input_parameter');
      
        return thisHouse.recordset;
    } catch (e) {
        console.log('DATABASE QUERY ERROR IN getListPhotoById Error Posted Next Line');
        console.log(e);
    }
}

const getHouseByType = async(typeHouse)=>{
    try {
        let pool = await sql.connect(config);
        let thisHouse = await pool.request()
        .input('input_parameter', sql.VarChar, typeHouse)
        .query('select * from HouseInfo where type = @input_parameter');
       
        return thisHouse.recordset;
    } catch (e) {
        console.log('DATABASE QUERY ERROR IN getHouseByType Error Posted Next Line');
        console.log(e);
    }
}

const getHouseByLocation = async(location)=>{
    try {
        let pool = await sql.connect(config);
        let thisHouse = await pool.request()
        .input('input_parameter', sql.VarChar, location)
        .query('select * from HouseInfo where FREETEXT ( location, @input_parameter)');
        
        return thisHouse.recordset;
    } catch (e) {
        console.log('DATABASE QUERY ERROR IN getHouseByLocation Error Posted Next Line');
        console.log(e);
    }
}

const addHouse = async(house) =>{
    try {
        let pool = await sql.connect(config);
        let addedHouse = await pool.request()
        .input('name',sql.VarChar, house.name)
        .input('description',sql.VarChar, house.description)
        .input('location',sql.VarChar, house.location)
        .input('price',sql.Money, house.price)
        .input('beds',sql.Int, house.beds)
        .input('baths',sql.Int, house.baths)
        .input('sqft',sql.Decimal, house.sqft)
        .input('type',sql.VarChar, house.type)
        .input('map',sql.VarChar, house.map)
        .input('propertyTypeID',sql.Int, house.propertyTypeID)
        .input('listingPhoto',sql.VarChar, house.listingPhoto)
        .input('status',sql.Bit, house.status)
        .execute('InsertOrUpdateHouse');
        return addedHouse.recordsets;
    } catch (e) {
        console.log('DATABASE Post ERROR IN addhouse Error Posted Next Line');
        console.log(e);
    }
}

const filterHouse = async(location,type,price,propertyID) =>{
    try {
        let pool = await sql.connect(config);
        let addedHouse = await pool.request()       
        .input('location',sql.VarChar, location)
        .input('price',sql.Money, price)       
        .input('type',sql.VarChar, type)        
        .input('propertyTypeID',sql.Int, propertyID)       
        .execute('filterHouse');
        return addedHouse.recordset;
    } catch (e) {
        console.log('DATABASE Post ERROR IN filterHouse Error Posted Next Line');
        console.log(e);
    }
}

const updateHouse = async(house) =>{
    try {
        let pool = await sql.connect(config);
        let addedHouse = await pool.request()
        .input('houseID',sql.Int, house.houseID)
        .input('name',sql.VarChar, house.name)
        .input('description',sql.VarChar, house.description)
        .input('location',sql.VarChar, house.location)
        .input('price',sql.Money, house.price)
        .input('beds',sql.Int, house.beds)
        .input('baths',sql.Int, house.baths)
        .input('sqft',sql.Decimal, house.sqft)
        .input('type',sql.VarChar, house.type)
        .input('map',sql.VarChar, house.map)
        .input('propertyTypeID',sql.Int, house.propertyTypeID)
        .input('listingPhoto',sql.VarChar, house.listingPhoto)
        .input('status',sql.Bit, house.status)
        .execute('UpdateHouse');
        console.log(addedHouse.recordsets)
        return addedHouse.recordsets;
    } catch (e) {
        console.log('DATABASE Post ERROR IN addhouse Error Posted Next Line');
        console.log(e);
    }
}

const deleteHouseById = async(houseId)=>{
    try {
        let pool = await sql.connect(config);
        let thisHouse = await pool.request()
        .input('input_parameter', sql.Int, houseId)
        .query('DELETE FROM HouseInfo where houseID = @input_parameter');
        console.dir(houseId)
        return thisHouse.recordset;
    } catch (e) {
        console.log('DATABASE QUERY ERROR IN deleteHouseById Error Posted Next Line');
        console.log(e);
    }
}
const deleteAllHouse = async(houseId)=>{
    try {
        let pool = await sql.connect(config);
        let thisHouse = await pool.request()
        .query(`DELETE from HouseInfo WHERE houseID IN (${houseId})`);
        console.dir(houseId)
        return thisHouse.recordset;
    } catch (e) {
        console.log('DATABASE QUERY ERROR IN deleteHouseById Error Posted Next Line');
        console.log(e);
    }
}
const orderHouseByPrice = async(typeOrder)=>{
    try {
        let pool = await sql.connect(config);
        let thisHouse = await pool.request()
        .query(`SELECT * FROM HouseInfo ORDER BY price ${typeOrder}`);
       
        return thisHouse.recordset;
    } catch (e) {
        console.log('DATABASE QUERY ERROR IN getHouseByType Error Posted Next Line');
        console.log(e);
    }
}
const findHouseByProperty = async(propertyID)=>{
    try {
        let pool = await sql.connect(config);
        let thisHouse = await pool.request()
        .query(`select * from HouseInfo where propertyTypeID = ${propertyID}`);
       
        return thisHouse.recordset;
    } catch (e) {
        console.log('DATABASE QUERY ERROR IN getHouseByType Error Posted Next Line');
        console.log(e);
    }
}

module.exports = {
    getAllHouse, 
    getHouseById, 
    getHouseByType, 
    getHouseByLocation, 
    addHouse,
    deleteHouseById,
    updateHouse,
    getListPhotoById,
    orderHouseByPrice,
    findHouseByProperty,
    deleteAllHouse,
    filterHouse,
}