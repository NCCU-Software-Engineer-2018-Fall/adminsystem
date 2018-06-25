const endpoint = 'http://140.119.163.105:9000';

export const dofetch = function(url = '/', type = 'GET') {
  return fetch(endpoint + url, {
    method: type,
    mode: 'cors',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(res => res.text())
    .then(input => JSON.parse(input));
};
