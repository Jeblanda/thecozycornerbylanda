import Image from "next/image";

export default function BooksPage() {
  const books = [
    { title: "Modern CSS with Tailwind", image: "/images/book1.png" },
    { title: "The Next.js Handbook", image: "/images/book2.png" },
    { title: "Mindset", image: "/images/book3.jpg" },
  ];

  return (
    <section className="bg-zinc-50 min-h-screen px-6 py-12">
      <h2 className="text-3xl font-semibold mb-8 text-center text-zinc-900">
        Book Recommendations
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {books.map((book) => (
          <div
            key={book.title}
            className="bg-white rounded-xl shadow hover:shadow-md transform hover:scale-105 transition border border-zinc-200"
          >
            <Image
              src={book.image}
              alt={book.title}
              width={300}
              height={400}
              className="rounded-t-xl"
            />
            <h3 className="text-lg font-serif font-semibold text-center p-3 text-zinc-900">
              {book.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
