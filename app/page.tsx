const products = [
  {
    name: "Aura Leather Bag",
    price: "$129",
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Luna Minimal Watch",
    price: "$189",
    category: "Watches",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Cloud Knit Sweater",
    price: "$89",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Nova Signature Shoes",
    price: "$159",
    category: "Footwear",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
  },
];

const categories = [
  "Fashion",
  "Accessories",
  "Watches",
  "Footwear",
];
const categoryImages: Record<string, string> = {
  Fashion:
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80",
  Accessories:
    "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1000&q=80",
  Watches:
    "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=1000&q=80",
  Footwear:
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#171717]">
      
      {/* Announcement */}
      <div className="bg-black px-4 py-2 text-center text-xs tracking-[0.2em] text-white">
        FREE SHIPPING ON ORDERS OVER $100
      </div>

      {/* Navbar */}
      <nav className="flex items-center justify-between border-b border-black/10 bg-[#f7f5f0] px-6 py-5 md:px-12">
        <h1 className="text-2xl font-semibold tracking-[0.25em]">
          LUXECART
        </h1>

        <div className="hidden gap-8 text-sm md:flex">
          <a href="#" className="transition hover:opacity-50">
            Home
          </a>
          <a href="#" className="transition hover:opacity-50">
            Shop
          </a>
          <a href="#" className="transition hover:opacity-50">
            Categories
          </a>
          <a href="#" className="transition hover:opacity-50">
            About
          </a>
        </div>

        <div className="flex items-center gap-5 text-sm">
          <button className="transition hover:opacity-50">
            Search
          </button>
          <button className="text-lg transition hover:opacity-50">
            ♡
          </button>
          <button className="text-lg transition hover:opacity-50">
            🛒
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-24 md:px-16 md:py-36">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs font-medium tracking-[0.3em] text-black/50">
            NEW COLLECTION 2026
          </p>

          <h2 className="max-w-4xl text-5xl font-medium leading-[0.95] tracking-tight md:text-8xl">
            Elevate Your
            <br />
            Everyday Style.
          </h2>

          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center">
            <p className="max-w-md text-sm leading-7 text-black/60">
              Discover carefully curated products designed
              to make everyday feel extraordinary.
            </p>

            <button className="w-fit bg-black px-8 py-4 text-sm tracking-wider text-white transition hover:bg-black/80">
              SHOP NOW →
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-t border-black/10 px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-3 text-xs tracking-[0.25em] text-black/50">
                EXPLORE
              </p>

              <h3 className="text-3xl font-medium">
                Shop by Category
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {categories.map((category) => (
              <div
  key={category}
  className="group relative aspect-square cursor-pointer overflow-hidden"
>
  <img
    src={categoryImages[category]}
    alt={category}
    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-black/20 transition group-hover:bg-black/30" />

  <div className="absolute bottom-0 left-0 p-6 text-white">
    <p className="text-lg font-medium">{category}</p>
    <p className="mt-1 text-xs text-white/80">
      Explore →
    </p>
  </div>
</div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-3 text-xs tracking-[0.25em] text-black/50">
                CURATED FOR YOU
              </p>

              <h3 className="text-3xl font-medium">
                Featured Products
              </h3>
            </div>

            <button className="hidden text-sm underline underline-offset-4 md:block">
              View all
            </button>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <article key={product.name} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#dedbd3]">
                  <div className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg">
                    ♡
                  </div>

                  <img
  src={product.image}
  alt={product.name}
  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
/>
                </div>

                <div className="pt-4">
                  <p className="text-xs text-black/50">
                    {product.category}
                  </p>

                  <div className="mt-1 flex items-center justify-between gap-4">
                    <h4 className="text-sm font-medium">
                      {product.name}
                    </h4>

                    <p className="text-sm">
                      {product.price}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Promotion */}
      <section className="mx-6 mb-20 bg-black px-6 py-20 text-white md:mx-12 md:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-xs tracking-[0.3em] text-white/50">
            LUXECART EDIT
          </p>

          <h3 className="max-w-3xl text-4xl font-medium leading-tight md:text-6xl">
            Less clutter.
            <br />
            More of what matters.
          </h3>

          <button className="mt-8 border border-white/30 px-7 py-3 text-sm transition hover:bg-white hover:text-black">
            DISCOVER THE COLLECTION
          </button>
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-black/10 px-6 py-20 md:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs tracking-[0.3em] text-black/50">
            STAY IN THE KNOW
          </p>

          <h3 className="text-3xl font-medium">
            Join the LuxeCart community.
          </h3>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-black/50">
            Get early access to new collections, exclusive offers
            and inspiration delivered to your inbox.
          </p>

          <div className="mx-auto mt-8 flex max-w-md border-b border-black">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 bg-transparent px-2 py-3 text-sm outline-none"
            />

            <button className="px-2 text-sm font-medium">
              JOIN →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black px-6 py-12 text-white md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
          <div>
            <h4 className="text-xl tracking-[0.2em]">
              LUXECART
            </h4>

            <p className="mt-3 max-w-xs text-sm leading-6 text-white/50">
              Thoughtfully curated products for modern living.
            </p>
          </div>

          <div className="flex gap-10 text-sm text-white/60">
            <a href="#" className="hover:text-white">
              Instagram
            </a>
            <a href="#" className="hover:text-white">
              Pinterest
            </a>
            <a href="#" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/40">
          © 2026 LuxeCart. All rights reserved.
        </div>
      </footer>
    </main>
  );
}