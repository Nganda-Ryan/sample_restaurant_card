import fs from 'fs';

export default function handler(req, res) {
  if(req.method == 'GET'){
    try {
      const data = fs.readFileSync('data/db.json', 'utf-8');
      const jsonData = JSON.parse(data);
      const restaurant = jsonData.restaurants.find(item => item.id ===req.query.restaurant);
      
      if(!restaurant || restaurant.length <= 0) {
        res.status(500).json({code: 500, body: 'The provided ID does not exist'});
      }      

      res.status(200).json(restaurant);
    } catch (parseError) {
      res.status(500).json({code: 500, body: parseError});
      console.error('Error parsing JSON:', parseError);
    }

  }
}
