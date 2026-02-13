function Footer() {
  return (
    <footer className="bg-secondary text-primary text-center py-8 mt-8">
      <div className="max-w-[90%] lg:max-w-5xl mx-auto flex  flex-col  lg:flex-row  justify-between items-center ">
        <h4>&copy; 2024 My E-commerce Site. </h4>
        <ul className="flex items-center gap-4">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
