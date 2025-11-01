import { Header } from "../Header";
import { Footer } from "../Footer";

const products = [
  {
    id: 1,
    name: "Cotton Printed T-shirt",
    price: 499,
    image: "https://lp2.hm.com/hmgoepprod?set=source[/71/73/7173b2df78a4b1a14e67e8cfe4fa26c57c1ac3f8.jpg]&call=url[file:/product/main]"
  },
  {
    id: 2,
    name: "Denim Shorts",
    price: 799,
    image: "https://lp2.hm.com/hmgoepprod?set=source[/4f/22/4f2274c703f9ed3c5f4c8b57a6e3f5f9a02f65a7.jpg]&call=url[file:/product/main]"
  },
  {
    id: 3,
    name: "Hoodie with Print",
    price: 999,
    image: "https://lp2.hm.com/hmgoepprod?set=source[/b4/35/b43563e7c2b6edbfa0cc6c1d29bfa3a33a7a88ce.jpg]&call=url[file:/product/main]"
  },
  {
    id: 4,
    name: "Cotton Joggers",
    price: 899,
    image: "https://lp2.hm.com/hmgoepprod?set=source[/5a/61/5a616a099bdb402a4cc0633a02f962c979a1d73a.jpg]&call=url[file:/product/main]"
  },
  {
    id: 5,
    name: "2-pack Pyjamas",
    price: 1199,
    image: "https://lp2.hm.com/hmgoepprod?set=source[/88/3a/883a4a2d98b4f44648cb3d74d39f84a8c79993fa.jpg]&call=url[file:/product/main]"
  },
  {
    id: 6,
    name: "Cotton Dress",
    price: 999,
    image: "https://lp2.hm.com/hmgoepprod?set=source[/3f/9a/3f9a55f1a06b90cc9cc933aef0d00dfb5cdbdb79.jpg]&call=url[file:/product/main]"
  },
  {
    id: 7,
    name: "Kids Sneakers",
    price: 1799,
    image: "https://lp2.hm.com/hmgoepprod?set=source[/0a/73/0a73713da6ad14b16d41d35e9832dd157d0c7e39.jpg]&call=url[file:/product/main]"
  },
  {
    id: 8,
    name: "Sweatshirt Set",
    price: 1299,
    image: "https://lp2.hm.com/hmgoepprod?set=source[/2c/7a/2c7a731c28a9d92de9e2d63713aebd5224f1e8c0.jpg]&call=url[file:/product/main]"
  }
];

export const Kids = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      {/* <div className="relative h-[70vh] bg-gray-100 flex items-center justify-center mb-10">
        <div className="absolute inset-0">
          <img
            src="https://lp2.hm.com/hmgoepprod?set=source[/7e/14/7e146ebcc3d5a55ad6f68925907e2a50533e7c31.jpg]&call=url[file:/product/main]"
            alt="Kids Fashion"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-semibold mb-4 drop-shadow-lg">KIDS' COLLECTION</h1>
          <p className="text-lg mb-6 drop-shadow-md">Fun, comfy & colorful styles for all ages.</p>
          <button className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition-all">
            SHOP NOW
          </button>
        </div>
      </div> */}

      {/* Product Grid */}
      <div className="p-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Trending Now</h2>
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
