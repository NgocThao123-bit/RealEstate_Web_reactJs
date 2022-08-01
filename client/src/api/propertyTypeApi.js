import http from "./index";
const getAll = () => {
  return http.get("/propertyType/propertyTypes");
};
const gethouseTypeById = id => {
  return http.get(`/propertyType/${id}`);
};
const PropertyTypeApi = {
    getAll,
    gethouseTypeById,
    // getHouseByType,
    // getHousByLocation,
    // create,
  //   update,
  //   remove,
  //   removeAll,
  //   findByTitle
  };
  export default PropertyTypeApi;