import Display from "./Display";
import HomeNav from "./HomeNav";

const Home = () => {
  return (
    <div className="max-w-[1520px] w-full h-screen">
      <HomeNav />
      <Display />
    </div>
  );
};

export default Home;
