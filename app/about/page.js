import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="bg-zinc-50 min-h-screen flex flex-col items-center py-12 px-6 gap-12">
      {/* Bookstore description */}
      <div className="max-w-3xl text-center">
        <h2 className="text-3xl font-semibold mb-3 text-zinc-900">
          About The Cozy Corner
        </h2>
        <p className="text-zinc-700 text-base md:text-lg leading-relaxed">
          The Cozy Corner is an online bookstore built for readers who enjoy calm,
          comfort, and meaningful stories. Our goal is to recommend books that
          inspire and relax.
        </p>
      </div>

      {/* Profile section */}
      <div className="max-w-3xl flex flex-col md:flex-row items-center gap-4 bg-white p-6 rounded-xl shadow">
        <Image
          src="/images/profile.png" // optional profile image
          alt="John Benedict A. Landa"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div>
          <h3 className="text-xl md:text-2xl font-serif font-semibold mb-1 text-zinc-900">
            John Benedict A. Landa
          </h3>
          <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
            Hi! I am John Benedict, a passionate reader and developer who enjoys creating cozy and engaging online spaces for book lovers. I built The Cozy Corner to share my favorite reads and make it easy for everyone to find books that inspire and delight.
          </p>
        </div>
      </div>
    </section>
  );
}
