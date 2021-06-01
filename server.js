const fs = require("fs");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "client/build")));

// const socketIo = require("socket.io");
const http = require("http");
const server = http.createServer(app);
// const io = socketIo(server);
const options = { cors: true, origins: ["http://127.0.0.1:3000"] };
const io = require("socket.io")(server, options);

server.listen(port, () => {
  console.log("Example app listening on port 8000!");
});

app.get("/api/fruit/", (req, res) => {
  fs.readFile("fruit.json", (err, data) => {
    const products = JSON.parse(data);
    res.send(products);
  });
});

app.get("/api/milk/", (req, res) => {
  fs.readFile("milk.json", (err, data) => {
    const products = JSON.parse(data);
    res.send(products);
  });
});

app.get("/api/list/", (req, res) => {
  fs.readFile("products.json", (err, data) => {
    const list = JSON.parse(data);
    res.send(list);
  });
});

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname + "/client/build/index.html"));
// });

// push arry
app.post("/api/cart/", (req, res) => {
  fs.readFile("products.json", (err, data) => {
    const products = JSON.parse(data);
    const title = req.body.title;
    const id = req.body.id;
    const image = req.body.image;
    const kamut = req.body.kamut;
    products.push({
      id: id,
      image: image,
      title: title,
      kamut: kamut,
    });
    fs.writeFile("products.json", JSON.stringify(products), (err) => {
      res.send(products);
    });
    io.emit("AddProduct");
  });
});

// const { id } = useParams();

// delete
app.delete("/api/list/:id", (req, res) => {
  fs.readFile("products.json", (err, data) => {
    const products = JSON.parse(data);
    const todoId = +req.params.id;
    const todoIndex = products.findIndex((todo) => todo.id === todoId);
    products.splice(todoIndex, 1);
    fs.writeFile("products.json", JSON.stringify(products), (err) => {
      res.send("delete");
    });
    io.emit("AddProduct");
  });
});

// search
// app.get("/todos", (req, res) => {
//   console.log("QUERY:", req.query);
//   const search = req.query.search;
//   fs.readFile("products.json", (err, data) => {
//     const todos = JSON.parse(data);
//     if (search) {
//       const filteredTodos = todos.filter((todo) => todo.title.includes(search));
//       res.send(filteredTodos);
//     } else {
//       res.send(todos);
//     }
//   });
// });

// app.put("/todos/:id", (req, res) => {
//   fs.readFile("products.json", (err, data) => {
//     const todos = JSON.parse(data);
//     const todoId = +req.params.id;
//     const todoIndex = todos.findIndex((todo) => todo.id === todoId);
//     todos[todoIndex].title = req.body.title;
//     fs.writeFile("products.json", JSON.stringify(todos), (err) => {
//       res.send("YOU SUCCEED!!!");
//     });
//   });
// });
// const http = require("http");

// http
//   .createServer((request, response) => {
//     response.writeHead(200, { "Content-Type": "text/plain" });

//     response.end("Hello barak\n");
//   })
//   .listen(8000);

// console.log("Server running at http://127.0.0.1:8000/");
