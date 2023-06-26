import EBusApp from "../components/EBusApp";
import Footer from "../components/Footer";
import MobileMap from "../components/MobileMap";

function MobileApp() {
  return (
    <>
      <div className="bg-gradient-to-br from-sky-300 via-green-300 to-sky-300 overflow-hidden">
        <EBusApp />
      </div>

      <MobileMap />

      <Footer />
    </>
  );
}

export default MobileApp;
