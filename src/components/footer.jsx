const Footer = () => {
  return (
    <footer className="bg-background py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-charcoal-gray">
        {/* Shop Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Shop</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-teal-700">
                All Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-700">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-700">
                Best Sellers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-700">
                Sale
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-teal-700">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-700">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-700">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-700">
                Size Guide
              </a>
            </li>
          </ul>
        </div>

        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-teal-700">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-700">
                Sustainability
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-700">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-700">
                Press
              </a>
            </li>
          </ul>
        </div>

        {/* Stay Connected Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
          <p className="mb-4">
            Subscribe to our newsletter for exclusive offers and updates.
          </p>
          <div className="flex space-x-2 mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 border rounded-l-md focus:outline-none"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className=" text-center  text-md  mt-9 pt-7 border-gray-300 border-t-1 text-gray-500">
        &copy; 2025 Your Magnis Store.co | All rights reserved by Pyarjan Thapa.
      </div>
    </footer>
  );
};

export default Footer;
