
// Declaring 'app', which represents the API. 
// Express is declared as middleware
const express = require ('express');
const app = express();
const PORT = 8080;




// All info passed through the API goes 
// through this middleware and is converted to json
app.use(express.json() )


// function to call the API
app.listen(
    PORT,
    // 'callback' to let me know when the API is ready
    () => console.log(`yo mama on ${PORT}`)
)

const jokes = [
    { id: 1, joke: "Why did the scarecrow win an award?" },
    { id: 2, joke: "What's the most expensive haircut?" },
    { id: 3, joke: "What part of the bread factory do lobsters work in?" },
    { id: 4, joke: "Where do lizards go when their tails fall off?" },
    { id: 5, joke: "A dog walks into a pet store, mad as fuck. What does he say?" },
    { id: 6, joke: "What happened to the cat who ate a ball of yarn?" },
  ];

  const answers = [
    { id: 1, answer: "Because he was outstanding in his field!" },
    { id: 2, answer: "Chemotherapy." },
    { id: 3, answer: "The crust station." },
    { id: 4, answer: "The retail store." },
    { id: 5, answer: "I got a bone to pick." },
    { id: 6, answer: "She had mittens." },
  ];

// Adding a get endpoint for the API. Whenever a user requests the URL, 
// it calls this callback function. (Request/Response)
app.get('/joke', (req, res) => {
    res.status(200).send({
        joke: jokes,
        answer: answers
    })
});

// Shuts down the bot when CTRL+C is pressed
process.on('SIGINT', async () => {
    console.log("SIGINT received (CTRL+C)");
    process.exit(0);
  });


// Seperate endpoint that captures dynamic values from the URL
app.post('/joke/:id', (req, res) => {

    const {id} = req.params;


// Exception filter
 //   if (!size){
 //       res.status(418).send ({message: 'We need a size!'})
 //   }

    res.send({
        joke: jokes,
        answer: answers
    })
});