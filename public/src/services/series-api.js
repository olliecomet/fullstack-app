const URL = '/api';

export function getAllSeries() {
    const url = `${URL}/series`;
    return fetch(url)
        .then(response => response.json());
}