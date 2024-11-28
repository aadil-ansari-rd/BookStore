//This code is only for the situation when you want an edit page and you also want
//to send file data to the backend server

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
function BookEditImg() {
  const [book, setBook] = useState({});
  const [file, setFile] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/book/${id}`)
      .then((res) => {
        setBook(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  function handleChange(e) {
    const { name, value } = e.target;
    setBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function editBook() {
    const formData = new FormData();

    for (const key in book) {
      formData.append(key, book[key]);
    }

    if (file) {
      formData.append("file", file);
    }

    axios.put(`http://localhost:3000/edit/book/${id}`, formData)
      .then((res) => {
        console.log(res);
        navigate("/books");
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Book Name</Form.Label>
        <Form.Control
          type="text"
          name="bookName"
          value={book.bookName || ""}
          onChange={handleChange}
        />
      </Form.Group>
 
     <Form.Group className="mb-3">
        <Form.Label>Author Name</Form.Label>
        <Form.Control
          type="text"
          name="authorName"
          value={book.authorName || ""}
          onChange={handleChange}
        />
      </Form.Group>

      
      <Form.Group className="mb-3">
        <Form.Label>Language</Form.Label>
        <Form.Select
          name="language"
          value={book.language || ""}
          onChange={handleChange}
        >
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Short Description</Form.Label>
        <Form.Control
          type="text"
          name="shortDescription"
          value={book.shortDescription || ""}
          onChange={handleChange}
        />
      </Form.Group><Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          name="description"
          value={book.description || ""}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="text"
          name="price"
          value={book.price || ""}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Book Status</Form.Label>
        <Form.Select
          name="bookStatus"
          value={book.bookStaus|| ""}
          onChange={handleChange}
        >
          <option value="First Hand">First Hand</option>
          <option value="Second Hand">Second Hand</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="text"
          name="quantity"
          value={book.quantity || ""}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Publisher</Form.Label>
        <Form.Control
          type="text"
          name="publisher"
          value={book.publisher || ""}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>ISBN No</Form.Label>
        <Form.Control
          type="text"
          name="isbnNo"
          value={book.isbnNo || ""}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Select Image</Form.Label>
        <Form.Control
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </Form.Group>

      <Container>
        <Button variant="dark" onClick={editBook}>
          Edit Book
        </Button>
      </Container>
    </Form>
  );
}

export default BookEditImg;
