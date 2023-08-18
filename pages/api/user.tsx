export default async function handler(req, res) {

    const response = await fetch('https://some-api.com/users');
    const data = await response.json();
  
    res.status(200).json(data);
  
  }