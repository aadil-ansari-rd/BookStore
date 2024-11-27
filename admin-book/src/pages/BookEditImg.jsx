import { useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function BookEditImg() {
  let [book, setBook] = useState({
    bookName: "",
    authorName: "",
    language: "",
    shortDescription: "",
    description: "",
    price: 0,
    bookStatus: "",
    quantity: 0,
    publisher: "",
    isbnNo: "",
    bookImage: "",
  });

  let navigate = useNavigate();
  let params = useParams();
  let id = params.id;

  useEffect(() => {
    axios({
      url: "http://localhost:3000/book/" + id,
      method: "get",
    })
      .then((res) => {
        //console.log(res);
        setBook(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params]);

  function handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    setBook((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function editBook() {
    axios({
      url: "http://localhost:3000/edit/book/" + id,
      method: "put",
      data: book,
      header: {
        "content-type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log(res);
        navigate("/books");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Book Name</Form.Label>
        <Form.Control
          type="text"
          name="bookName"
          value={book.bookName}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Author Name</Form.Label>
        <Form.Control
          type="text"
          name="authorName"
          value={book.authorName}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Language</Form.Label>
        <Form.Select
          onChange={handleChange}
          aria-label="Select Language"
          name="language"
        >
          <option value={book.language}>{book.language}</option>
          <option value="Hindi">Hindi</option>
          <option value="English">English</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Short Description</Form.Label>
        <Form.Control
          type="text"
          name="shortDescription"
          value={book.shortDescription}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="textarea"
          name="description"
          value={book.description}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={book.price}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Book Staus</Form.Label>
        <Form.Select
          onChange={handleChange}
          aria-label="Select Language"
          name="bookStatus"
        >
          <option value={book.bookStatus}>{book.bookStatus}</option>
          <option value="New Book">New Book</option>
          <option value="Second Hand Book">Second hand Book</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="number"
          name="quantity"
          value={book.quantity}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Publisher</Form.Label>
        <Form.Control
          type="text"
          name="publisher"
          value={book.publisher}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>ISBN No</Form.Label>
        <Form.Control
          type="text"
          name="isbnNo"
          value={book.isbnNo}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Select Image</Form.Label>
        <Form.Control type="file" name="bookImage" onChange={handleChange} />
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
