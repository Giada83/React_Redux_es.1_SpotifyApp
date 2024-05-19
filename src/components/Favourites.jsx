import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteFav } from "../redux/action";

const Favourites = () => {
  const favList = useSelector((state) => {
    return state.fav.library;
  });
  console.log("LIBRARY", favList);

  const dispatch = useDispatch();

  return (
    <Container>
      <Row className="d-flex justify-content-center mt-3 " id="favourite">
        <Col xs={10} md={{ span: 9, offset: 2 }}>
          <h2>My Favourite Songs</h2>
          <p className="fst-italic fw-lighter">Only the music you love . . . </p>
          <div className="fav-container">
            {favList.map((favSong, index) => {
              return (
                <div className="d-flex mb-1">
                  <div className="img-box">
                    <img src={favSong.album.cover_medium} alt="album cover"></img>
                  </div>
                  <div className="text-box text-box d-flex flex-column justify-content-between">
                    <div>
                      <p>
                        <span className="fw-semibold">Artist:</span> {favSong.artist.name}
                      </p>
                      <p>
                        <span className="fw-semibold">Title:</span> {favSong.title}
                      </p>
                    </div>
                    <div>
                      <Button
                        variant="outline-danger"
                        onClick={() => {
                          dispatch(deleteFav(index));
                        }}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
            <Link to="/">
              <Button variant="outline-secondary">Back Home </Button>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
