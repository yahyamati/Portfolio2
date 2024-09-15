import { DATA } from '../assets/assets'; // Adjust the path to the actual location of your DATA file

const Navbar = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-30 mx-auto flex justify-center items-center mb-4 transition-transform transform hover:scale-105">
      <div className="relative flex items-center justify-center rounded-full px-4 py-2 bg-white shadow-lg dark:bg-background dark:border dark:border-opacity-10 dark:box-shadow-inset">
        {DATA.navbar.map((item) => (
          <a key={item.href} href={item.href} className="flex items-center mx-2">
            <item.icon className="size-6" />
          </a>
        ))}
        
        <div className="hidden md:block mx-2 h-8 w-[1px] bg-black dark:bg-black-700"></div>
        
        {Object.entries(DATA.contact.social).map(([name, social]) => (
          <a key={name} href={social.url} className="flex items-center mx-2">
            <social.icon className="size-6" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
