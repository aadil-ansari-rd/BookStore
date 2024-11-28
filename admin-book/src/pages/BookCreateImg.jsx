//This code is only for the situation when you want to send file data to the 
//backend server
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";


function BookCreateImg() {
  const navigate = useNavigate(); //usenavigate is used for moving one page to another page

  let [bookName, setBookName] = useState("");
  let [authorName, setAuthorName] = useState("");
  let [language, setLanguage] = useState("");
  let [shortDescription, setShortDescription] = useState("");
  let [description, setDescription] = useState("");
  let [price, setPrice] = useState("0");
  let [bookStatus, setBookStatus] = useState("0");
  let [quantity, setQuantity] = useState("0");
  let [publisher, setPublisher] = useState("");
  let [isbnNo, setIsbnNo] = useState("");
  let [file, setFile] = useState("");

  function addBook() {

    let formData = new FormData();
    formData.append("bookName", bookName);
    formData.append("authorName", authorName);
    formData.append("language", language);
    formData.append("shortshortDescription", shortDescription);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("bookStatus", bookStatus);
    formData.append("quantity", quantity);
    formData.append("publisher", publisher);
    formData.append("isbnNo", isbnNo);
    formData.append("file", file);

    axios({
      url: "http://localhost:3000/add/book",
      method: "post",
      data: formData,
      header: {
        "content-type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.success) {
          navigate("/books");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  function cancel(){
    navigate('/books')
  }
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col className="border  rounded">
          <h1 className="text-center">Add Book</h1>
          <hr />
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Book Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Book Name"
                onChange={(e) => setBookName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Author Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Author Name"
                onChange={(e) => setAuthorName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Language</Form.Label>
              <Form.Select
                onChange={(e) => setLanguage(e.target.value)}
                aria-label="Select Language"
              >
                <option value="">Select a language</option>
                <option value="Hindi">Hindi</option>
                <option value="English">English</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Short Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Sort Description"
                onChange={(e) => setShortDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="textarea"
                placeholder="Description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Book Status</Form.Label>
              <Form.Select
                onChange={(e) => setBookStatus(e.target.value)}
                aria-label="Select Language"
              >
                <option value="">Select Book Status</option>
                <option value="new">New Book</option>
                <option value="second hand">Second hand Book</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Quantity"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Publisher</Form.Label>
              <Form.Control
                type="text"
                placeholder="Publisher"
                onChange={(e) => setPublisher(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>ISBN No</Form.Label>
              <Form.Control
                type="text"
                placeholder="ISBN No"
                onChange={(e) => setIsbnNo(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Select Image</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </Form.Group>

            <Button variant="dark" className="w-100" onClick={addBook}>
              Add Book
            </Button>
            <Button variant="warning" className="w-100 my-3" onClick={()=>cancel()}>
              Cancel
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
export default BookCreateImg;
