import { useState } from "react";
import "./App.css";

function App() {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "lorem ipsum...",
      author: "mario",
      id: 1,
    },
    {
      title: "Welcome party!",
      body: "lorem ipsum...",
      author: "yoshi",
      id: 2,
    },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  return (
    <div className="App">
      <div className="blogs">
        {blogs.map((blog) => (
          <div className="list" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
