import Nav from "./components/Nav";
import { Hero } from "./sections";

function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="overflow-hidden">
        <Hero />
        <div className="spacer layer1"></div>
      </section>
    </main>
  );
}

export default App;
