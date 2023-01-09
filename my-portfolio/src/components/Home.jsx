import { useScrollHandler } from "../hooks/useScrollHandler";
import About from "./About";
import Card from "./Card";
import Image from "./Image";

function Home() {
  const scroll = useScrollHandler();
  console.log(scroll);
  if (scroll > 1000) {
  }
  return (
    <main>
      <div className="page1">
        <div className="home">
          <Card></Card>
        </div>
        <Image image="wave"></Image>
        <About></About>
      </div>
      <div id="page2">wwwwwwwwwwww</div>
    </main>
  );
}

export default Home;
