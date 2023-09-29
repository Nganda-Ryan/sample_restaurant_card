// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs';
// import path from 'path';

export default function handler(req, res) {
  
  if(req.method == 'GET'){

    try {
      const data = fs.readFileSync('data/db.json', 'utf-8');
      const jsonData = JSON.parse(data);
      
      res.status(200).json(jsonData);
    } catch (parseError) {
      res.status(500).json({code: 500, body: parseError});
      console.error('Error parsing JSON:', parseError);
    }
  }
}
