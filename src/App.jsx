import Nav from "./components/Nav";
import { Hero, About_home, Portfolio, About_me, Pricing } from "./sections";

function App() {
  return (
    <main className="relative max-w-[1600px] mx-auto">
      <Nav />
      <section className="overflow-hidden">
        <Hero />
        <div className="spacer layer1">
          <About_home />
        </div>
      </section>
      <section>
        <Portfolio />
      </section>
      <section>
        <Pricing />
      </section>
      <section>
        <About_me />
      </section>
    </main>
  );
}

export default App;
