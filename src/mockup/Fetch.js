export function get(endpoint) {
    const delay = Math.floor(Math.random() * 100);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!data.hasOwnProperty(endpoint)) {
          const validEndpoints = Object.keys(data)
            .map((endpoint) => ` - "${endpoint}"`)
            .join("\n ");
          reject(
            `"${endpoint}" is an invalid endpoint. Try getting data from: \n ${validEndpoints}`
          );
        }
  
        const response = { status: 200, data: data[endpoint] };
  
        resolve(response);
      }, delay);
    });
  }