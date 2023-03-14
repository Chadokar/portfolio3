import logo from "./logo.svg";
import "./App.css";

function App() {
  let text = document.getElementById("text");
  let leaf = document.getElementById("leaf");
  let hill1 = document.getElementById("hill1");
  let hill2 = document.getElementById("hill2");
  let hill3 = document.getElementById("hill3");
  let hill4 = document.getElementById("hill4");
  let hill5 = document.getElementById("hill5");

  window.addEventListener("scroll", () => {
    let value = window.scrollY;
    text.style.marginTop = value * 2.5 + "px";
    leaf.style.top = value * -1.5 + "px";
    leaf.style.left = value * 1.5 + "px";
    hill5.style.left = value * 1.5 + "px";
    hill4.style.left = value * -1.5 + "px";
    hill1.style.top = value * 1 + "px";
  });

  return (
    <body>
      <header>
        <h2 className="logo">Logo</h2>
        <nav className="navigation">
          <a href="#" className="button active">
            Home
          </a>
          <a href="#" className="button ">
            About
          </a>
          <a href="#" className="button ">
            Service
          </a>
          <a href="#" className="button ">
            Contact
          </a>
        </nav>
      </header>

      <section className="parallax">
        <img src={require("./img/hill1.png")} id="hill1" alt="" />
        <img src={require("./img/hill2.png")} id="hill2" alt="" />
        <img src={require("./img/hill3.png")} id="hill3" alt="" />
        <img src={require("./img/hill4.png")} id="hill4" alt="" />
        <img src={require("./img/hill5.png")} id="hill5" alt="" />
        <img src={require("./img/tree.png")} id="tree" alt="" />
        <h2 id="text">Parallex Website</h2>
        <img src={require("./img/leaf.png")} id="leaf" alt="" />
        <img src={require("./img/plant.png")} id="plant" alt="" />
      </section>
      <section className="sec">
        <h2>Parallax Scrolling Website</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          architecto temporibus nulla libero? At iusto quo quibusdam modi
          veritatis. Maiores, rerum, qui est alias consectetur aspernatur nisi
          optio nulla labore temporibus tempora et pariatur? Modi accusantium
          molestias unde nulla nostrum nihil asperiores quisquam aliquid numquam
          iste, ex repellendus perspiciatis autem cum vitae dolores ab vel,
          adipisci corrupti voluptatem qui. Placeat quod debitis dolorum magnam
          nostrum cupiditate deleniti a molestias rem. Iure dignissimos facilis
          ducimus commodi quas vero, unde reprehenderit laudantium animi est
          necessitatibus officiis, aspernatur pariatur omnis voluptatem a
          architecto quo voluptate atque consequuntur magnam! Quae amet
          perferendis sit harum aliquam accusantium ratione est eligendi numquam
          illo. Vitae temporibus rem, suscipit veritatis rerum magni fuga
          dolores hic illo natus voluptatem ad repudiandae! Consequuntur, natus.
          Officiis, temporibus! Dolorem aut temporibus unde! <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          architecto temporibus nulla libero? At iusto quo quibusdam modi
          veritatis. Maiores, rerum, qui est alias consectetur aspernatur nisi
          optio nulla labore temporibus tempora et pariatur? Modi accusantium
          molestias unde nulla nostrum nihil asperiores quisquam aliquid numquam
          iste, ex repellendus perspiciatis autem cum vitae dolores ab vel,
          adipisci corrupti voluptatem qui. Placeat quod debitis dolorum magnam
          nostrum cupiditate deleniti a molestias rem. Iure dignissimos facilis
          ducimus commodi quas vero, unde reprehenderit laudantium animi est
          necessitatibus officiis, aspernatur pariatur omnis voluptatem a
          architecto quo voluptate atque consequuntur magnam! Quae amet
          perferendis sit harum aliquam accusantium ratione est eligendi numquam
          illo. Vitae temporibus rem, suscipit veritatis rerum magni fuga
          dolores hic illo natus voluptatem ad repudiandae! Consequuntur, natus.
          Officiis, temporibus! Dolorem aut temporibus unde! <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          architecto temporibus nulla libero? At iusto quo quibusdam modi
          veritatis. Maiores, rerum, qui est alias consectetur aspernatur nisi
          optio nulla labore temporibus tempora et pariatur? Modi accusantium
          molestias unde nulla nostrum nihil asperiores quisquam aliquid numquam
          iste, ex repellendus perspiciatis autem cum vitae dolores ab vel,
          adipisci corrupti voluptatem qui. Placeat quod debitis dolorum magnam
          nostrum cupiditate deleniti a molestias rem. Iure dignissimos facilis
          ducimus commodi quas vero, unde reprehenderit laudantium animi est
          necessitatibus officiis, aspernatur pariatur omnis voluptatem a
          architecto quo voluptate atque consequuntur magnam! Quae amet
          perferendis sit harum aliquam accusantium ratione est eligendi numquam
          illo. Vitae temporibus rem, suscipit veritatis rerum magni fuga
          dolores hic illo natus voluptatem ad repudiandae! Consequuntur, natus.
          Officiis, temporibus! Dolorem aut temporibus unde! <br />
          <br />
        </p>
      </section>
    </body>
  );
}

export default App;
