import Col from "react-bootstrap/Col";
import { useSelector } from "react-redux";
import { playMusic } from "../redux/action";
import { useDispatch } from "react-redux";

const SearchForm = () => {
  const searchResults = useSelector((state) => state.search.music);
  console.log("search results", searchResults);

  const dispatch = useDispatch();

  return (
    <>
      {searchResults.map((musicData) => {
        return (
          <Col
            className="text-center"
            key={musicData.id}
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(playMusic(musicData))}
          >
            <img className="img-fluid w-100" src={musicData.album.cover_medium} alt="track" />
            <p>
              Track: {musicData.title}
              <br></br>
              Artist: {musicData.artist.name}
              <br></br>
            </p>
          </Col>
        );
      })}
    </>
  );
};

export default SearchForm;
