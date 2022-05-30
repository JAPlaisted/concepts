import React from "react";
import Articles from "../components/Articles";
import Hero from "../components/Hero";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <Articles />
    </div>
  );
}

export default Home;
