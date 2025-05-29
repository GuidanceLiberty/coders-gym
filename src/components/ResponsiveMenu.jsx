import { motion, AnimatePresence } from "framer-motion";
import { NavbarMenu } from "../mockdata/data";

const ResponsiveMenu = ({ open, setOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full z-20"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-white py-10 mx-6 rounded-3xl shadow-lg">
            <ul className="flex flex-col justify-center items-center gap-10">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    onClick={() => setOpen(false)}
                    className="hover:text-gray-200 transition"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  onClick={() => setOpen(false)}
                  className="hover:text-gray-200 transition"
                >
                  Login
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
