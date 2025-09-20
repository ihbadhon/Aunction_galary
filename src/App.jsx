import "./App.css";
import DivC from "./components/DivC";
import Footer from "./components/Footer";
import Home from "./components/home";

function App() {
  return (
    <>
      <Home></Home>
      {/* <div className="flex justify-center mt-10"> */}{" "}
      {/* <Auction></Auction> */}
      <DivC></DivC>
      {/* </div> */}
      <Footer></Footer>
    </>
  );
}

export default App;
