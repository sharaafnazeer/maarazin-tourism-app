export default function queryParamsBuilderOnObject(params) {
    const queryParams = [];

    for (let key in params) {
        if (params.hasOwnProperty(key)) {
            const value = params[key];
            const encodedKey = encodeURIComponent(key);
            const encodedValue = encodeURIComponent(value);
            queryParams.push(`${encodedKey}=${encodedValue}`);
        }
    }

    return queryParams.join('&');
}