import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsSuitHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addFav } from "../redux/action";

const BottomNav = () => {
  let selectedSong = useSelector((state) => state.player.album_selected);
  console.log("PLAYER", selectedSong);

  const dispatch = useDispatch();

  return (
    <Container fluid className="bg-container pt-1 fixed-bottom">
      <Row className="h-100">
        <Col lg={{ span: 10, offset: 2 }}>
          <Row className="h-100 flex-column justify-content-center align-items-center">
            <Col xs={6} md={4} className="playerControls">
              <div className="d-flex">
                <Link to="/">
                  <img src="/img/shuffle.png" alt="shuffle" />
                </Link>
                <Link to="/">
                  <img src="img/prev.png" alt="prev" />
                </Link>
                <Link to="/">
                  <img src="img/play.png" alt="play" />
                </Link>
                <Link to="/">
                  <img src="img/next.png" alt="next" />
                </Link>
                <Link to="/">
                  <img src="img/repeat.png" alt="repeat" />
                </Link>
              </div>
              <div className="mt-3" style={{ height: "3px", backgroundColor: "#414141", color: "white" }}>
                <div role="progressbar"></div>
              </div>
            </Col>

            <Col xs={8} className="text-center">
              {selectedSong !== null && (
                <div className="d-flex align-items-center justify-content-center">
                  <p className="player-text mt-1">
                    <span className="fw-semibold">On play :</span> "{selectedSong?.artist.name}",{" "}
                    <span className="fst-italic"> {selectedSong?.title}</span>
                    <BsSuitHeart
                      color="secondary"
                      className="ms-2  heart-icon"
                      style={{ cursor: "pointer" }}
                      id="heartIcon"
                      onClick={() => dispatch(addFav(selectedSong))}
                    />
                  </p>
                </div>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default BottomNav;
