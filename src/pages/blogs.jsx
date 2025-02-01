import Footer from "../components/footer";
import ScrollToTop from "../components/scrolltotop";

const Blog = () => {
  return (
    <>
     <div className="max-w-4xl mx-auto my-8 bg-light-cream p-8 rounded-2xl shadow-lg text-charcoal-gray">
      <header className="mb-8 border-b pb-4">
        <h1 className="text-teal-700 font-extrabold text-4xl leading-snug">
          Welcome to Magnis: Redefining Luxury Fashion
        </h1>
        <div className="mt-2 text-sm text-gray-500">Magnis Fashion Team · May 15, 2023</div>
        <p className="mt-4 text-lg">
          In a world where fashion is not just about clothes but about expressing identity, we introduce Magnis, a clothing brand born to redefine luxury and style. Magnis stands at the intersection of elegance, innovation, and authenticity, offering a unique experience for fashion enthusiasts who desire sophistication with a personal touch.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-teal-700 font-bold text-3xl mb-4">Our Vision: The Essence of Magnis</h2>
        <p className="text-lg">
          Magnis derives its name from the Latin word meaning great or magnificent. This reflects our commitment to excellence and our belief in crafting designs that empower individuals to feel confident and extraordinary. Every piece in the Magnis collection is more than just fabric; it’s a story, a vision, and a statement.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-teal-700 font-bold text-3xl mb-4">Our Philosophy: Luxury Meets Simplicity</h2>
        <p className="text-lg">
          At Magnis, we believe that luxury doesn’t have to be over-the-top. It’s about the fine details, the perfect fit, and the ability to elevate everyday wear into something exceptional.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-teal-700 font-bold text-3xl mb-4">What Makes Magnis Unique?</h2>
        <ul className="list-decimal ml-8 space-y-2">
          <li>Craftsmanship: Skilled artisans ensure high-quality garments.</li>
          <li>Premium Fabrics: Finest materials sourced globally.</li>
          <li>Versatile Designs: Perfect for both casual and formal settings.</li>
          <li>Sustainability: Ethical and eco-friendly practices.</li>
          <li>Personalized Experience: Exceptional service for every customer.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-teal-700 font-bold text-3xl mb-4">Our Collections</h2>
        <ul className="list-disc ml-8 space-y-2">
          <li>Magnis Luxe: High-end formal wear for unforgettable moments.</li>
          <li>Magnis Casual: Effortlessly chic clothing for daily adventures.</li>
          <li>Magnis Street: Bold pieces that express your unique personality.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-teal-700 font-bold text-3xl mb-4">The Magnis Experience</h2>
        <p className="text-lg">
          Shopping with Magnis is more than a transaction; it’s an experience. Our flagship stores provide a luxurious ambiance, while our intuitive website offers seamless online browsing with virtual styling assistance.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-teal-700 font-bold text-3xl mb-4">Join the Magnis Movement</h2>
        <p className="text-lg">
          Magnis is not just a brand; it’s a lifestyle. Embrace elegance, confidence, and individuality with us. Follow our social media for updates and behind-the-scenes content. Together, let’s make every moment magnificent.
        </p>
      </section>
    </div>
      <ScrollToTop/>
      <Footer/>
    </>
  );
};

export default Blog;
