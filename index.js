const express = require('express');
const postsRoutes = require('./posts/posts-routes');

const server = express();

server.use(express.json());

server.use('/api/posts', postsRoutes);

server.get('/', (req, res) => {
  res.send(`
    <h2> WELCOME TO POSTS</h2>
    `);
});

server.listen(5000, () => {
  console.log('\n*** Server Running on http://localhost:5000 ***\n');
});





// {
//     title: "The post title", // String, required
//     contents: "The post contents", // String, required
//     created_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
//     updated_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
//   }

// {
//     text: "The text of the comment", // String, required
//     post_id: "The id of the associated post", // Integer, required, must match the id of a post entry in the database
//     created_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
//     updated_at: Mon Aug 14 2017 12:50:16 GMT-0700 (PDT) // Date, defaults to current date
//   }
