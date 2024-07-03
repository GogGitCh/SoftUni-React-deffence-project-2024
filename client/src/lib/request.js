export const settingsBuilder = (data) => {
    const settings = {};

    if (data) {
        settings.headers = { "Content-Type": "application/json" };
        settings.body = JSON.stringify(data);
    }

    const token = localStorage.getItem("accessToken");

    if (token) {
        settings.headers = {
            ...settings.headers,
            "X-Authorization": token,
        };
    }

    return settings;
};

export const request = async (method, url, data) => {
    const res = await fetch(url, {
        method,
        ...settingsBuilder(data),
    });

    if (res.status === 204) {
        return {};
    }

    const result = await res.json();

    if (!res.ok) {
        throw result;
    }

    return result;
};

// export const request = (method, url, data) => {
//     return fetch(url, {
//         method,
//         ...settingsBuilder(data),
//     })
//         .then((res) => {
//             if (res.ok) {
//                 return res.json();
//             } else {
//                 if (res.status == 409){
//                     throw new Error("There is a user with this email")
//                 }
//                 throw new Error("Error thrown by the requester", res.status);
//             }
//         })
//         .catch((err) => {
//             // console.log(err);
//             throw err
//         });
// };

export const post = request.bind(null, "POST");
export const get = request.bind(null, "GET");
export const put = request.bind(null, "PUT");
export const patch = request.bind(null, "PATCH");
export const del = request.bind(null, "DELETE");
