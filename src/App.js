import { Container, Row } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import BottomNav from "./components/BottomNav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favourites from "./components/Favourites";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container fluid>
          <Row>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/library" element={<Favourites />} />
            </Routes>
            <BottomNav />
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
