import HeroCard from "./components/card";
import Center from "./components/center";
import Hero from "./pages/hero";
import Nav from "./pages/nav";

function App() {
  return (
    <div className="min-h-full">
      <Center>
        <Nav />
        <Hero />
        <HeroCard />
      </Center>
    </div>
  );
}

export default App;
