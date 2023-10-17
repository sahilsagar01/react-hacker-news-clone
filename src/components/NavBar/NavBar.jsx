import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import HomeIcon from "@mui/icons-material/Home";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import WorkIcon from "@mui/icons-material/Work";
import "./NavBar.css";
import { useEffect, useState } from "react";

function NavBar() {
  const [applyStyle, setApplyStyle] = useState({
    home: false,
    askstories: false,
    showstories: false,
    jobstories: false,
  });

  useEffect(() => {
    const changesApply = () => {
      try {
        setApplyStyle({
          home: false,
          askstories: false,
          showstories: false,
          jobstories: false,
        });
        console.log(localStorage.getItem("nav"));
        setApplyStyle((pV) => {
          return {
            ...pV,
            [localStorage.getItem("nav")]: true,
          };
        });
      } catch (err) {
        console.log(err);
      }
    };
    changesApply();
  }, [localStorage.getItem("nav")]);
  // .navigaction_items:hover{
  //   border-bottom: 2px solid #ff6600;
  //   transform: translateY(-3px);

  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar_container">
          <Container fluid>
            <Navbar.Brand className="nav_brand" href="#">
              <NewspaperIcon className="nav_brand_icon" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <div className="office_canva_logo">
                    <NewspaperIcon className="nav_brand_canva" />{" "}
                    <div>
                      <span>H</span>acker news
                    </div>
                  </div>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 gap-4 mx-5 pe-3 nav_container">
                  <div
                    style={{
                      borderBottom: applyStyle.home
                        ? "2px solid #ff6600"
                        : "none",
                      transform: applyStyle.home ? "translateY(-3px)" : "",
                    }}
                    className="navigaction_items"
                  >
                    <a href="/">
                      <HomeIcon
                        sx={{ fontSize: "2rem", cursor: "pointer" }}
                        className="navigaction_icon"
                      />
                    </a>
                    <Nav.Link className="navigaction_text" href="/">
                      Home
                    </Nav.Link>
                  </div>
                  <div
                    style={{
                      borderBottom: applyStyle.askstories
                        ? "2px solid #ff6600"
                        : "none",
                      transform: applyStyle.askstories
                        ? "translateY(-3px)"
                        : "",
                    }}
                    className="navigaction_items"
                  >
                    <a href="/ask">
                      <AssignmentLateIcon
                        sx={{ fontSize: "2rem", cursor: "pointer" }}
                        className="navigaction_icon"
                      />
                    </a>
                    <Nav.Link className="navigaction_text" href="/ask">
                      Ask
                    </Nav.Link>
                  </div>
                  <div
                    style={{
                      borderBottom: applyStyle.showstories
                        ? "2px solid #ff6600"
                        : "none",
                      transform: applyStyle.showstories
                        ? "translateY(-3px)"
                        : "",
                    }}
                    className="navigaction_items"
                  >
                    <a href="/show">
                      <LiveTvIcon
                        sx={{ fontSize: "2rem", cursor: "pointer" }}
                        className="navigaction_icon"
                      />
                    </a>
                    <Nav.Link className="navigaction_text" href="/show">
                      Show
                    </Nav.Link>
                  </div>
                  <div
                    style={{
                      borderBottom: applyStyle.jobstories
                        ? "2px solid #ff6600"
                        : "none",
                      transform: applyStyle.jobstories
                        ? "translateY(-3px)"
                        : "",
                    }}
                    className="navigaction_items"
                  >
                    <a href="/job">
                      <WorkIcon
                        sx={{ fontSize: "2rem", cursor: "pointer" }}
                        className="navigaction_icon"
                      />
                    </a>
                    <Nav.Link className="navigaction_text" href="/job">
                      Jobs
                    </Nav.Link>
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;
