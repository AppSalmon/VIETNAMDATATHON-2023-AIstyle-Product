import axios from "axios";

const setAuthToken = (token) => {
    axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common["Authorization"];
    }
};

export default setAuthToken;
