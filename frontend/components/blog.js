import axios from "axios";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    axios
      .get("http://jonwoodring.local/wp-json/wp/v2/posts")
      .then((res) => {
        setPosts(res.data);
      });
  }

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div class="container">
      <div class="blog-container">
        <p className="blog-date">
          {new Date(Date.now()).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <div>
          {
            posts.map((item) => {
              <div>
                <h2 className="blog-title">{item.title.rendered}</h2>
                <p
                  className="blog-excerpt"
                  dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}
                />
              </div>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default Blog;
