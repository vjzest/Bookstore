import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-16 text-[#fdfdfd] shadow-lg mt-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{ duration: 1.0 }}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-8"
        variants={itemVariants}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="text-4xl font-bold mb-6">
          About <span className="text-blue-600">us</span>
        </h2>
      </motion.h2>

      <motion.div className="text-lg space-y-6">
        <motion.p
          variants={itemVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Welcome to <span className="font-semibold">[Bookstore]</span>! Our
          mission is to make buying books easy and enjoyable for readers of all
          ages. Whether you're looking for the latest bestsellers, classic
          literature, or hidden gems, we have the perfect book waiting for you.
        </motion.p>

        <motion.p
          variants={itemVariants}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          We offer a wide selection of books across all genres, including
          fiction, non-fiction, children's books, and more. With our
          user-friendly interface, you can easily browse, compare, and purchase
          books from the comfort of your home.
        </motion.p>

        <motion.p
          variants={itemVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          At <span className="font-semibold">[Bookstore]</span>, we believe in
          fostering a community of book lovers. Join our newsletters for
          exclusive deals, participate in book clubs, and attend virtual author
          events to connect with fellow readers and authors.
        </motion.p>

        <motion.p
          className="font-semibold"
          variants={itemVariants}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Why Shop with Us?
        </motion.p>
        <motion.ul className="list-disc list-inside space-y-2">
          {[
            "Extensive collection of books at competitive prices",
            "Personalized recommendations based on your reading preferences",
            "Fast, reliable shipping and easy returns",
            "Customer support to help you with any inquiries",
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
