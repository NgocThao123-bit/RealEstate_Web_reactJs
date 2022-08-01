
import http from "./index";
const getAll = () => {
  return http.get("/listingHouse");
};
const getHouseById = id => {
  return http.get(`/house/${id}`);
};
const getListPhotoById = id => {
  return http.get(`/photoList/${id}`);
};
const orderHouseByPrice = orderType => {
  return http.get(`/price/${orderType}`);
};
const getHouseByType = type => {
  return http.get(`/houses/${type}`);
};
const getHouseByProperty = propertyID => {
  return http.get(`/property/${propertyID}`);
};
const getHousByLocation = location => {
  return http.get(`/location/${location}`);
};
const getHousByFilter = (location,type,price,propertyID) => {
  return http.get(`/filterHouse/${location}/${type}/${price}/${propertyID}`);
};
const create = data => {
  return http.post("/addHouse", data);
};
const update = data => {
  return http.put(`/updateHouse`, data);
  // return http.put(`/addHouse/${id}`, data);
};
const remove = id => {
  return http.delete(`/delete/${id}`);
};
const removeAll = ids => {
  return http.delete(`/deleteAll`, ids);
};
// const findByTitle = title => {
//   return http.get(`/tutorials?title=${title}`);
// };
const HouseApi = {
  getAll,
  getHouseById,
  getHouseByType,
  getHousByLocation,
  create,
  update,
  remove,
  getListPhotoById,
  orderHouseByPrice,
  getHouseByProperty,
  removeAll,
  getHousByFilter,
  //   findByTitle
};
export default HouseApi;