import { Header } from "../Header";
import { Footer } from "../Footer";

const products = [
  {
    id: 1,
    name: "Slim Fit Cotton Shirt",
    price: 1299,
    image: "https://lp2.hm.com/hmgoepprod?set=source[/c1/a3/c1a3f4a7a7b39f2d3887fffc24353f9a9cf1c2f4.jpg]&call=url[file:/product/main]"
  },
  {
    id: 2,
    name: "Regular Fit T-shirt",
    price: 799,
    image: "https://lp2.hm.com/hmgoepprod?set=source[/db/0d/db0d9b0c2741cb6e61151f44d7d8f38c29e5896d.jpg]&call=url[file:/product/main]"
  },
  {
    id: 3,
    name: "Relaxed Fit Hoodie",
    price: 1999,
    image: "https://lp2.hm.com/hmgoepprod?set=source[/7d/21/7d213a37f73dceff93dc1fa648b23f9a79f5ce3a.jpg]&call=url[file:/product/main]"
  },
  {
    id: 4,
    name: "Tapered Jeans",
    price: 2499,
    image: "https://lp2.hm.com/hmgoepprod?set=source[/8c/56/8c567a6e06e7422e54b2d1a352c87078eeb90ec0.jpg]&call=url[file:/product/main]"
  },
  {
    id: 5,
    name: "Bomber Jacket",
    price: 2999,
    image: "https://lp2.hm.com/hmgoepprod?set=source[/61/a9/61a961f4ff22e77e4e45b532129d5c4b2b94a2cf.jpg]&call=url[file:/product/main]"
  },
  {
    id: 6,
    name: "Relaxed Fit Cargo Pants",
    price: 1799,
    image: "https://lp2.hm.com/hmgoepprod?set=source[/b6/24/b624ea4edfa4a4b11ac5632a9faac6a63ef8c543.jpg]&call=url[file:/product/main]"
  },
  {
    id: 7,
    name: "Denim Shirt",
    price: 1499,
    image: "https://lp2.hm.com/hmgoepprod?set=source[/27/91/27914cc02efb86742ff49f47cb9b4df126a401f5.jpg]&call=url[file:/product/main]"
  },
  {
    id: 8,
    name: "Oversized Sweatshirt",
    price: 1599,
    image: "https://lp2.hm.com/hmgoepprod?set=source[/09/3a/093a29c9d3b8aee05e63d2537e32a5d4b8ff4f2e.jpg]&call=url[file:/product/main]"
  }
];

export const Men = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      {/* <div className="relative h-[70vh] bg-gray-100 flex items-center justify-center mb-10">
        <div className="absolute inset-0">
          <img
            src="https://lp2.hm.com/hmgoepprod?set=source[/46/32/46326f2a6b79c08e3e7b37a04b03ee1e9bdfbcb4.jpg]&call=url[file:/product/main]"
            alt="Mens Fashion"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-semibold mb-4 drop-shadow-lg">MEN'S COLLECTION</h1>
          <p className="text-lg mb-6 drop-shadow-md">Smart, casual & everything in between.</p>
          <button className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition-all">
            SHOP NOW
          </button>
        </div>
      </div> */}

      {/* Product Grid */}
      <div className="p-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">New Arrivals</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <img
                src={p.image}
                alt={p.name}
                className="rounded-lg w-full h-[350px] object-cover"
              />
              <p className="mt-3 text-sm">{p.name}</p>
              <p className="font-semibold">₹{p.price}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};
