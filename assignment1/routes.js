const requestHandler = () => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title><head>");
    res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
    res.write("</html>");
    res.end();
  } else if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write(
      "<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>"
    );
    res.write("</html>");
    res.end();
  }
};

module.exports = requestHandler;
