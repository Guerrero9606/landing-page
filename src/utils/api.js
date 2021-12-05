const callApi = async (url, options = {}) => {
    options.headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
    };

    const response = await fetch('https://jalmed-backend.herokuapp.com' + url, options);
    const data = await response.json();
    return data;
};

export const api = {
    Users: {
        list() {
            return callApi("/api/v1/Users");
        },
        create(Users) {
            return callApi("/api/v1/Users", {
                method: "POST",
                body: JSON.stringify(Users),
            });
        },
        delete(id) {
            return callApi(`/api/v1/Users/${ id }`, {
                method: "DELETE",
            });
        },
        edit(Users,list) {
            return callApi(`/api/v1/Users/${ Users._id }`, {
                method: "PATCH",
                body: JSON.stringify(list),
            });
        },
        getUser(id) {
            return callApi(`/api/v1/Users/${ id }`);
        },
    }
};