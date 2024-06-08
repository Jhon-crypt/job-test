import Header from "./components/header/header";
import MiniNav from "./components/section/miniNavSection"

export default function Home() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <MiniNav />
      </div>

    </>
  );
}
