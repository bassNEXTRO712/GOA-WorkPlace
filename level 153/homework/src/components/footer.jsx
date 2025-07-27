const Footer = () => {
  return (
    <footer className="bg-white py-6">
    
      <div className="flex flex-wrap justify-center gap-4 text-gray-600 text-sm mb-4 px-4">
        <p>English (US)</p>
        <p>Français (France)</p>
        <p>Italiano</p>
        <p>Română</p>
        <p>Sardu</p>
        <p>Furlan</p>
        <p>Deutsch</p>
        <p>Español</p>
        <p>Shqip</p>
        <p>Português (Brasil)</p>
        <p>العربية</p>
      </div>

      <hr className="border-gray-300 mx-auto w-full max-w-5xl" />

      <div className="flex flex-wrap justify-center gap-4 text-gray-500 text-xs mt-4 px-4 max-w-5xl mx-auto">
        {[
          "Sign Up",
          "Log In",
          "Messenger",
          "Facebook Lite",
          "Video",
          "Meta Pay",
          "Meta Store",
          "Meta Quest",
          "Ray-Ban Meta",
          "Meta AI",
          "Instagram",
          "Threads",
          "Voting Information Center",
          "Privacy Policy",
          "Privacy Center",
          "Cookie Settings",
          "About",
          "Create ad",
          "Create Page",
          "Developers",
          "Careers",
          "Cookies",
          "Ad choices",
          "Terms",
          "Help",
          "Contact",
          "Uploading & Non-Users",
          "Settings",
          "Activity log",
        ].map((item) => (
          <p key={item} className="hover:underline cursor-pointer whitespace-nowrap">
            {item}
          </p>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
