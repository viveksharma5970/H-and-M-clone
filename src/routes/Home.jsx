import { Header } from "../Header";
import { Footer } from "../Footer";
import { Link } from "react-router-dom";

export const Home = () => {
  const categories = [
    {
      id: 1,
      name: "LADIES",
      image:
        "https://lp2.hm.com/hmgoepprod?set=source[/d5/19/d519a81e39d51896f19ed9eb2c0c67bba6daff2b.jpg]&call=url[file:/product/main]",
      link: "/"
    },
    {
      id: 2,
      name: "MEN",
      image:
        "https://lp2.hm.com/hmgoepprod?set=source[/d4/34/d434ca7dbf3dce28d484d59784c5c0b991b531e0.jpg]&call=url[file:/product/main]",
      link: "/men"
    },
    {
      id: 3,
      name: "KIDS",
      image:
        "https://lp2.hm.com/hmgoepprod?set=source[/4c/8b/4c8b53c3b62c32a5e8b57a957dbba50960f4e16b.jpg]&call=url[file:/product/main]",
      link: "/kids"
    },
    {
      id: 4,
      name: "HOME",
      image:
        "https://lp2.hm.com/hmgoepprod?set=source[/c7/7e/c77ed9e4a2d2b78847e3e11f8d93d71f8cb5fa54.jpg]&call=url[file:/product/main]",
      link: "/home"
    }
  ];

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="relative h-[80vh] bg-gray-100 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://lp2.hm.com/hmgoepprod?set=source[/d1/45/d1451a1b3e3c1f49a2b0c22c63b46ac2c5b91a1c.jpg]&call=url[file:/product/main]"
            alt="New Season"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white drop-shadow-lg">
          <h1 className="text-6xl font-bold mb-4">NEW ARRIVALS</h1>
          <p className="text-lg mb-6">Fresh looks for the season.</p>
          <Link
            to="/"
            className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition-all"
          >
            SHOP NOW
          </Link>
        </div>
      </div>

      {/* Category Grid */}
      <div className="p-10 bg-white">
        <h2 className="text-3xl font-semibold mb-8 text-gray-800 text-center">
          SHOP BY CATEGORY
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              to={cat.link}
              key={cat.id}
              className="relative overflow-hidden rounded-lg cursor-pointer group"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-50 transition-all">
                <p className="text-white text-2xl font-semibold tracking-wider">
                  {cat.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Promo Banner */}
      <div className="bg-gray-100 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">
          GET READY FOR FESTIVE SEASON ✨
        </h2>
        <p className="text-gray-600 mb-6">
          Discover new colors, comfort fits, and trendy looks.
        </p>
        <Link
          to="/"
          className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-all"
        >
          SHOP NOW
        </Link>
      </div>

      <Footer />
    </>
  );
};
