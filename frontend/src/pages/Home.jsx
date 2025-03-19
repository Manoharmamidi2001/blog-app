import { useEffect, useState } from "react";
import BlogCard from "../components/Card"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BlogHeader from "../components/Header";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:2110/api/blogs/getdata")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setBlogs(data.slice(0, 9)); // Ensure data is an array
        }
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <>
    <BlogHeader/>
    <Container fluid className="py-5">
      <Row>
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <Col key={blog.id} sm={12} md={6} lg={4} className="mb-4">
              <BlogCard title={blog.title} body={blog.description} image={blog.social_image} link={blog.canonical_url}/>
            </Col>
          ))
        ) : (
          <p className="text-center">Loading blogs...</p>
        )}
      </Row>
    </Container>
    </>
  );
};

export default BlogList;
