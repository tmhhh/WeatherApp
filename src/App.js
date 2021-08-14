import MainSection from "./components/MainSection";
import AdditionalSection from "./components/AdditionalSection";
import WeatherContextProvider from "./contexts/weatherContext";
const formStyle = {
  background: "linear-gradient(#e66465, #9198e5)",
  width: "400px",
  paddingTop: "20px",
  borderRadius: "10px",
};
function App() {
  return (
    <div style={formStyle}>
      <WeatherContextProvider>
        <MainSection />
        <AdditionalSection />
      </WeatherContextProvider>
    </div>
  );
}

export default App;
