import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const BlogCard = ({ title, body, image, link }) => {
  return (
    <Card className="shadow-sm border-0 rounded-3 h-100">
      <Card.Img variant="top" src={image} style={{ height: "180px", objectFit: "cover" }} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-truncate" title={title}>
          {title || "No Title"}
        </Card.Title>
        <Card.Text className="flex-grow-1">
          {body ? body.substring(0, 100) + "..." : "No content available"}
        </Card.Text>
        <div className="mt-auto">
          <a target="_blank" rel="noopener noreferrer" href={link}>
            <Button variant="primary" className="w-100">Read More</Button>
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;