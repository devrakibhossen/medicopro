import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t bg-[#b8431c] pt-10 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-[1150px] mx-auto px-4 mb-8">
        
        {/* Brand */}
        <div>
          <h3 className="text-3xl text-white font-semibold mb-4">
            medicopro
          </h3>
          <p className="text-gray-100 text-sm leading-relaxed">
            Medicopro analyzes your symptoms, suggests the right tests, and
            recommends medicines — all in seconds. Expert health guidance is
            now just one message away.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xl text-white font-poppins mb-4">
            Company
          </h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Tools</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl text-white font-poppins mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Features</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Support</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-3">
          <h3 className="text-xl text-white font-poppins mb-4">
            Social Media
          </h3>

          {[
            { name: "Facebook", icon: "/facebook.png" },
            { name: "Instagram", icon: "/facebook.png" },
            { name: "YouTube", icon: "/facebook.png" },
            { name: "LinkedIn", icon: "/facebook.png" },
          ].map((item, index) => (
            <button
              key={index}
              className="flex items-center gap-2 bg-black p-2 pr-4 text-white rounded-full hover:bg-[#922f12] transition w-full"
            >
              <Image
                src={item.icon}
                alt={item.name}
                width={28}
                height={28}
                className="bg-[#b8431c] p-1 rounded-full"
              />
              <span className="text-sm font-poppins">
                Follow on {item.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <p className="text-center text-gray-200 border-t border-white/20 py-4 font-poppins text-sm">
        © {new Date().getFullYear()} Medicopro. All rights reserved by Rakib Hossen.
      </p>
    </footer>
  );
};

export default Footer;