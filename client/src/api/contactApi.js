
import http from "./index";
const getAll = () => {
  return http.get("/contact/getAll");
};
const getContactById = id => {
  return http.get(`/contact/${id}`);
};
const create = data => {
  return http.post("/contact/addContact", data);
};
const update =  data => {
  return http.put(`/contact/updateContact`, data);
};
const remove = id => {
  return http.delete(`/contact/delete/${id}`);
};

const ContactApi = {
  getAll,
  create,
  update,
  remove,
  getContactById,

};
export default ContactApi;