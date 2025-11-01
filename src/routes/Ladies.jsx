import { Header } from "../Header";
import { Footer } from "../Footer";

const products = [
  {
    id: 1,
    name: "Cotton Oversized T-Shirt",
    price: 799,
    image: "https://lp2.hm.com/hmgoepprod?set=source[/52/28/52288957d5b9452c86b478d8798c355ee6ad1a6e.jpg]&call=url[file:/product/main]"
  },
  {
    id: 2,
    name: "Relaxed Fit Jeans",
    price: 1499,
    image: "https://lp2.hm.com/hmgoepprod?set=source[/9f/94/9f94b4d08b9e7c045d6b2a5d95a0d7cfb83a0cc4.jpg]&call=url[file:/product/main]"
  },
  {
    id: 3,
    name: "Ribbed Tank Top",
    price: 599,
    image: "https://lp2.hm.com/hmgoepprod?set=source[/f2/5e/f25e42340cf9d27c1cf88efc86a2b68f5b2402b0.jpg]&call=url[file:/product/main]"
  },
  {
    id: 4,
    name: "Denim Jacket",
    price: 2499,
    image: "https://lp2.hm.com/hmgoepprod?set=source[/34/61/3461d96b90a7c5c4b24a4f4f34b6a4b6d5f85c79.jpg]&call=url[file:/product/main]"
  },
  {
    id: 5,
    name: "Pleated Midi Skirt",
    price: 1799,
    image: "https://lp2.hm.com/hmgoepprod?set=source[/b5/4c/b54ccafc4d1e03a0a13e314a894784562d775b45.jpg]&call=url[file:/product/main]"
  },
  {
    id: 6,
    name: "Cotton Shirt Dress",
    price: 2299,
    image: "https://lp2.hm.com/hmgoepprod?set=source[/e3/23/e3236cdbec1c78115cc478b73f5e558682c9cbfa.jpg]&call=url[file:/product/main]"
  },
  {
    id: 7,
    name: "Slim Fit Blazer",
    price: 3499,
    image: "https://lp2.hm.com/hmgoepprod?set=source[/41/19/4119d624dbbcb45a2e51a40356e7b8afca2f9b86.jpg]&call=url[file:/product/main]"
  },
  {
    id: 8,
    name: "High Waist Trousers",
    price: 1999,
    image: "https://lp2.hm.com/hmgoepprod?set=source[/20/ea/20ea4a2dc3d25a57dcf324b52d5f4931d6352660.jpg]&call=url[file:/product/main]"
  }
];

export const Ladies = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      {/* <div className="relative h-[70vh] bg-gray-100 flex items-center justify-center mb-10">
        <div className="absolute inset-0">
          <img
            src="https://lp2.hm.com/hmgoepprod?set=source[/b8/a0/b8a0e54c5134dd243c3b2e1b0b26fd18ff3b3a5e.jpg]&call=url[file:/product/main]"
            alt="Ladies Fashion"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-semibold mb-4 drop-shadow-lg">LADIES COLLECTION</h1>
          <p className="text-lg mb-6 drop-shadow-md">Discover the latest trends in women's fashion.</p>
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
