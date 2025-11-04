// importing the express package
import express from 'express';

//establishing a constant app of express
const app = express();



const PORT = 3006; // Choose an available port number

// sets the view engine
app.set('view engine', 'ejs');

// location where the webpage should look
app.use(express.static('public'));


app.get('/friends', (req, res) => {
  const friends = ['Mickey', 'Goofy', 'Minnie', 'Daisy'];
  res.render('friends', { friends });
});

// the default route 
app.get('/', (req, res) => {

  const person = {name: 'Donald Duck', occupation: 'Plumber'}

  res.render('home', { person});

});

// Start the server and listen on the specified port 
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));