const fetchApi = ({url, method = "GET", query, body}) => {
    const queryString = queryStringGenerator(query);
    const apiUrl = urlGenerator(url, queryString);

    const options = {
        method,
        body: JSON.stringify(body)
    };

    return fetch(apiUrl, options).then(res => res.json());
};

const queryStringGenerator = (queryObject) => {
    const query = {};
    for (const param in queryObject) {
        if (queryObject.hasOwnProperty(param) && !!queryObject[param]) {
            if (param === "filter") {
                filterValueGenerator(queryObject[param], query)
            } else {
                query[param] = queryObject[param]
            }
        }
    }

    return query ? `?${new URLSearchParams(query).toString()}` : ""
};

const urlGenerator = (url, queryString) => {
    return `${process.env.REACT_APP_API_URL}${url}${queryString}`
};

const filterValueGenerator = (filterObject, queryObject) => {
    for (const param in filterObject) {
        if (filterObject.hasOwnProperty(param) && !!filterObject[param]) {
            queryObject[param] = filterObject[param]
        }
    }
};

export {
    fetchApi
}
