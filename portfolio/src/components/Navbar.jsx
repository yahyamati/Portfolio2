import { DATA } from '../assets/assets'; 

const Navbar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 flex justify-center items-center mb-4 mx-auto hover:scale-110">
      <div className="inline-flex items-center justify-center rounded-full px-4 py-2 bg-white dark:bg-background dark:border dark:border-opacity-10 dark:box-shadow-inset">
        
        {/* Navbar Links */}
        {DATA.navbar.map((item) => (
          <a key={item.href} href={item.href} className="flex items-center mx-2">
            {item.icon && <item.icon className="size-6" />}
          </a>
        ))}

        <div className="mx-2 h-8 w-[1px] bg-black dark:bg-black-700"></div>

        {/* Social Links */}
        {Object.entries(DATA.social).map(([name, social]) => (
          <a key={name} href={social.url} className="flex items-center mx-2">
            {social.icon && <social.icon className="size-6" />}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
