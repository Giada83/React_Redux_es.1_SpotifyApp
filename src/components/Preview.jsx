import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { playMusic } from "../redux/action";

const Preview = (props) => {
  const [song, setSong] = useState([]);

  const dispatch = useDispatch();

  const homeMusic = async () => {
    try {
      const res = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=` + props.param);
      if (res.ok) {
        const { data } = await res.json();
        setSong(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    homeMusic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {song
        .filter((_, i) => i < 4)
        .map((musicData) => {
          return (
            <Col
              className="text-center"
              key={musicData.id}
              style={{ cursor: "pointer" }}
              onClick={() => dispatch(playMusic(musicData))}
            >
              <img className="img-fluid" src={musicData.album.cover_medium} alt="track" />
              <p>
                Track: {musicData.title}
                <br></br>
                Artist: {musicData.artist.name}
              </p>
            </Col>
          );
        })}
    </>
  );
};

export default Preview;
