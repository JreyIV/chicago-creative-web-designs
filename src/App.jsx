import Nav from "./components/Nav";
import { Hero, About_home, Portfolio, About_me } from "./sections";

function App() {
  return (
    <main className="relative">
      <Nav />
      <section className="overflow-hidden">
        <Hero />
        <div className="spacer layer1">
          <About_home />
        </div>
      </section>
      <section className="">
        <Portfolio />
      </section>
      <section>
        <About_me />
      </section>
    </main>
  );
}

export default App;
