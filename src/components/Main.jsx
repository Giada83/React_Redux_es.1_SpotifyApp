import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import Preview from "./Preview";

const Main = () => {
  let searchResult = useSelector((state) => state.search.music);

  return (
    <Col xs={12} md={{ span: 9, offset: 3 }} className="mainPage">
      {/* link list */}
      <Row>
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <Link to="/">TRENDING</Link>
          <Link to="/">PODCAST</Link>
          <Link to="/">MOODS AND GENRES</Link>
          <Link to="/">NEW RELEASES</Link>
          <Link to="/">DISCOVER</Link>
        </Col>
      </Row>
      {/* Search Results */}
      <Row>
        <Col xs={10}>
          <div id="searchResults" style={{ display: searchResult.length > 0 ? "block" : "none" }}>
            <h2>Search results</h2>
            <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3">
              <SearchForm />
            </Row>
          </div>
        </Col>
      </Row>
      {/* Rock */}
      <Row>
        <Col xs={10}>
          <div id="rock">
            <h2>Rock Classics</h2>
            <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="rockSection">
              <Preview param={"queen"} />
            </Row>
          </div>
        </Col>
      </Row>
      {/* Pop */}
      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="popSection">
              <Preview param={"katyperry"} />
            </Row>
          </div>
        </Col>
      </Row>
      {/* HipHop */}
      <Row>
        <Col xs={10}>
          <div id="hiphop">
            <h2>HipHop</h2>
            <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="hipHopSection">
              <Preview param={"eminem"} />
            </Row>
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default Main;
