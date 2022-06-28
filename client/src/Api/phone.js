const axios = require("axios");

const Api = axios.create({
    baseURL: "http://localhost:5000/api",
});

const getPhoneNumbers = ({ query, page, item_per_page }) =>
    Api.get(
        `/phone?query=${query}&page=${page}&item_per_page=${item_per_page}`
    );

const createPhoneNumber = ({
    first_name,
    last_name,
    phone_number,
    country_code,
}) =>
    Api.post("/phone/add", {
        first_name,
        last_name,
        phone_number,
        country_code,
    });

const updatePhoneNumber = ({
    id,
    first_name,
    last_name,
    phone_number,
    country_code,
}) =>
    Api.post("/phone/update/" + id, {
        id,
        first_name,
        last_name,
        phone_number,
        country_code,
    });

const deletePhoneNumber = ({ id }) => Api.delete("/phone/delete/" + id);

export {
    getPhoneNumbers,
    createPhoneNumber,
    updatePhoneNumber,
    deletePhoneNumber,
};
