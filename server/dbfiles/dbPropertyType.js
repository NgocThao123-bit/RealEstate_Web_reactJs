const config = require('./dbconfig');
const sql = require('mssql');

const getAllPropertyType = async()=>{
    try {
        let pool = await sql.connect(config);
        let theseHouses = await pool.request().query(
            'select * from PropertyTypes'
        );
       

        return theseHouses.recordset;
    } catch (e) {
        console.log('Database connection errorr in get all house, error posted next line. ');
        console.log(e);
    }
}

const getHouseTypeById = async(houseId)=>{
    try {
        let pool = await sql.connect(config);
        let thisHouse = await pool.request()
        .input('houseID', sql.Int, houseId)
        .execute('House_Type');
        
        return thisHouse.recordset;
    } catch (e) {
        console.log('DATABASE QUERY ERROR IN getHouseById Error Posted Next Line');
        console.log(e);
    }
}

// const getHouseByType = async(typeHouse)=>{
//     try {
//         let pool = await sql.connect(config);
//         let thisHouse = await pool.request()
//         .input('input_parameter', sql.VarChar, typeHouse)
//         .query('select * from HouseInfo where type = @input_parameter');
//         console.dir(typeHouse)
//         return thisHouse.recordset;
//     } catch (e) {
//         console.log('DATABASE QUERY ERROR IN getHouseByType Error Posted Next Line');
//         console.log(e);
//     }
// }

// const getHouseByLocation = async(location)=>{
//     try {
//         let pool = await sql.connect(config);
//         let thisHouse = await pool.request()
//         .input('input_parameter', sql.VarChar, location)
//         .query('select * from HouseInfo where FREETEXT ( location, @input_parameter)');
        
//         return thisHouse.recordset;
//     } catch (e) {
//         console.log('DATABASE QUERY ERROR IN getHouseByLocation Error Posted Next Line');
//         console.log(e);
//     }
// }

// const addHouse = async(house) =>{
//     try {
//         let pool = await sql.connect(config);
//         let addedHouse = await pool.request()
//         .input('name',sql.VarChar, house.name)
//         .input('description',sql.VarChar, house.description)
//         .input('location',sql.VarChar, house.location)
//         .input('price',sql.Int, house.price)
//         .input('beds',sql.Int, house.beds)
//         .input('baths',sql.Int, house.baths)
//         .input('sqft',sql.Decimal, house.sqft)
//         .input('type',sql.VarChar, house.type)
//         .input('map',sql.VarChar, house.map)
//         .input('propertyTypeID',sql.Int, house.propertyTypeID)
//         .input('listingPhoto',sql.VarChar, house.listingPhoto)
//         .execute('InsertOrUpdateHouse');
//         console.log(addedHouse.recordsets)
//         return addedHouse.recordsets;
//     } catch (e) {
//         console.log('DATABASE Post ERROR IN addhouse Error Posted Next Line');
//         console.log(e);
//     }
// }


module.exports = {getAllPropertyType,getHouseTypeById}