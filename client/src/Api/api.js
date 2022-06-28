const axios = require("axios");

const Api = axios.create({
    baseURL: "http://localhost:5000/api",
});

const getProjects = ({ first_name, last_name, phone, page, item_per_page }) =>
    Api.get(
        `/phone/?first_name=${first_name}&last_name=${last_name}&phone=${phone}&page=${page}&item_per_page=${item_per_page}`
    );

const createProject = ({ first_name, last_name, phone, page, country_code }) =>
    Api.post("/phone/add", {
        first_name,
        last_name,
        phone,
        page,
        country_code,
    });

const updateProject = ({ id, first_name, last_name, phone, country_code }) =>
    Api.put("/phone/update" + id, {
        id,
        first_name,
        last_name,
        phone,
        country_code,
    });

const deleteProject = ({ id }) => Api.delete("/phone/delete" + id);

export { getProjects, createProject, updateProject, deleteProject };
