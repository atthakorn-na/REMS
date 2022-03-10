export function getList() {
    return fetch('http://localhost:9000/lists')
      .then(data => data.json())
  }