import { Card } from "../ui/card";

const FooterAndBanner = () => {
  return (
    <>
    <Card
      // style={{
      //   position: "fixed",
      //   top: "20px",
      //   left: "20px",
      //   background: "rgba(72, 72, 94, 0.8)",
      //   padding: "10px 20px",
      //   borderRadius: "8px",
      //   color: "white",
      //   fontFamily: "Arial, sans-serif",
      //   zIndex: 1000,
      //   boxShadow: "0 2px 4px rgba(0,0,0,0.5)",
      // }}
      className="fixed top-4 left-4 z-10 p-4 bg-background/80 backdrop-blur-sm border-none"
    >
      <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>
        3D Room Creator
      </h1>
      <p style={{ fontSize: "14px" }}>
        This is a 3D room creator to help you design your room.
      </p>
      <p style={{ fontSize: "14px" }}>
        It allows you to explore a 3D model of a room in real-time and share
        it with your friends.
      </p>
    </Card>
    
    <Card
      // style={{
      //   position: "fixed",
      //   bottom: "20px",
      //   right: "20px",
      //   background: "rgba(38, 38, 49, 0.8)",
      //   padding: "10px 20px",
      //   borderRadius: "8px",
      //   color: "white",
      //   fontFamily: "Arial, sans-serif",
      //   zIndex: 1000,
      //   boxShadow: "0 2px 4px rgba(0,0,0,0.5)",
      // }}
      className="fixed bottom-4 right-4 z-10 p-4 bg-background/80 backdrop-blur-sm border-none"
    >
        <p style={{ fontSize: "14px" }}>
          Designed by{" "}
          <a
            className="font-bold"
            href="https://github.com/santiagobenedetti"
            target="_blank"
            rel="noopener noreferrer"
          >
            Santiago Benedetti{" "}
          </a>
          and{" "}
          <a
            className="font-bold"
            href="https://github.com/FranciscoAnnoni"
            target="_blank"
            rel="noopener noreferrer"
          >
            Francisco Annoni
          </a>
        </p>
      </Card>
    </>
  );
};

export default FooterAndBanner;
