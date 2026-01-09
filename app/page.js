import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const featuredBooks = [
    { title: "Modern CSS with Tailwind", image: "/images/book1.png" },
    { title: "The Next.js Handbook", image: "/images/book2.png" },
    { title: "Mindset", image: "/images/book3.jpg" },
  ];

  return (
    <div className="bg-zinc-50 min-h-screen px-6 py-12 flex flex-col items-center gap-16">
      {/* Welcome Section */}
      <main className="w-full max-w-3xl text-center flex flex-col items-center gap-8">
        <Image
          src="/images/book1.png"
          alt="The Cozy Corner"
          width={120}
          height={160}
          priority
        />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900">
          Welcome to The Cozy Corner
        </h1>
        <p className="text-zinc-600 text-base md:text-lg leading-relaxed max-w-xl">
          A cozy online bookstore with hand-picked recommendations for every reader.
        </p>

        <div className="flex gap-4 mt-4">
          <Link
            href="/books"
            className="px-6 py-2 bg-black text-white rounded-xl hover:bg-zinc-800 shadow transition"
          >
            Browse Books
          </Link>
          <Link
            href="/about"
            className="px-6 py-2 border rounded-xl hover:bg-zinc-100 transition"
          >
            Learn More
          </Link>
        </div>
      </main>

      {/* Featured Books Row */}
      <section className="w-full max-w-6xl">
        <h2 className="text-3xl font-semibold mb-6 text-zinc-900 text-center">
          Featured Books
        </h2>
        <div className="flex gap-6 overflow-x-auto px-2 scroll-smooth snap-x">
          {featuredBooks.map((book) => (
            <div
              key={book.title}
              className="min-w-[200px] flex-shrink-0 bg-white rounded-xl shadow hover:shadow-md transition transform hover:scale-105 snap-start"
            >
              <Image
                src={book.image}
                alt={book.title}
                width={200}
                height={300}
                className="rounded-t-xl"
              />
              <div className="p-3 text-center">
                <h3 className="text-lg font-serif font-semibold mb-1 text-zinc-900">
                  {book.title}
                </h3>
                <Link
                  href="/books"
                  className="inline-block bg-black text-white px-3 py-1 rounded hover:bg-zinc-800 text-sm"
                >
                  Browse
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
