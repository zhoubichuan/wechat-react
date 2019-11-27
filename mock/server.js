let http = require("http");
let url = require("url");
let fs = require("fs");

function readDate(route, callback) {
  //用来读取application.json中的数据
  fs.readFile(route, "utf8", function(err, data) {
    console.log(data);
    if (err || data === "") {
      return callback([]); //如果数据为空 传递空数组
    }
    callback(JSON.parse(data));
  });
}
function writeDate(route, data, callback) {
  //用来写入到json中的方法
  fs.writeFile(route, JSON.stringify(data), callback);
}

http
  .createServer(function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
    let { pathname, query } = url.parse(req.url, true);
    let id = parseInt(query.id); //看路径后面是否有id
    // 所有接口都以 /api开头  /api/sliders
    if (pathname === "/api/application") {
      console.log(req.method);
      switch (req.method) {
        case "GET": //查询一个返回对象 查询所有返回数组
          if (id) {
            readDate("./application.json", function(application) {
              res.end(JSON.stringify(application));
            });
          } else {
            readDate("./application.json", function(application) {
              console.log(application);
              res.end(JSON.stringify(application));
            });
          }
          break;
        case "POST": //返回增加的那一项
          let str = "";
          req.on("data", function(chunk) {
            str += chunk;
          });
          req.on("end", function() {
            let application = JSON.parse(str);
            readDate("./application.json", function(result) {
              result.data.push(application);
              writeDate("./application.json", result, function() {
                res.end(JSON.stringify(application));
              });
            });
          });
          break;
        case "PUT": //返回修改的那一项
          {
            let str = "";
            req.on("data", function(chunk) {
              str += chunk;
            });
            req.on("end", function() {
              let bookItem = JSON.parse(str);
              readDate(function(books) {
                books = books.map(book => {
                  if (book.id == id) {
                    return bookItem;
                  }
                  return book;
                });
                writeDate(books, function() {
                  res.end(JSON.stringify(bookItem));
                });
              });
            });
          }
          break;
        case "DELETE": //返回空对象
          if (id) {
            readDate(function(books) {
              books = books.filter(book => book.id != id); // 注意路径的id是字符串类型
              writeDate(books, function() {
                res.end(JSON.stringify({}));
              });
            });
          }
          break;
      }
    }
    if (pathname === "/api/information") {
      switch (req.method) {
        case "GET":
          readDate("./information.json", function(information) {
            res.end(JSON.stringify(information));
          });
      }
    }
    if (pathname === "/api/message") {
      switch (req.method) {
        case "GET":
          readDate("./message.json", function(message) {
            res.end(JSON.stringify(message));
          });
      }
    }
    if (pathname === "/api/record") {
      switch (req.method) {
        case "GET":
          readDate("./record.json", function(record) {
            res.end(JSON.stringify(record));
          });
      }
    }
  })
  .listen(3000, function() {
    console.log("已经连接3000接口");
  });
