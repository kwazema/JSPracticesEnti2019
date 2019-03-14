// MAKE GET HTTP REQUEST, JSON OBJECT EXPECTED

const request = (url, options, callback) => {
    if (typeof options === 'function') {
      callback = options;
      options = {};
    }
  
    options = options || {};
  
    const headers = options.headers || (options.headers = {});
    headers.Accept = 'application/json';
  
    fetch(url, options)
      .then(response => {
        return response.json();
      })
      .then(json => callback(json), callback);
  };
  