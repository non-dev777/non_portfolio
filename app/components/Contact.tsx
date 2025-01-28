"use client";

import { motion } from "framer-motion";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-cyan-50 to-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ChatBubbleLeftRightIcon className="h-16 w-16 text-cyan-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact</h2>

          <p className="text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Webサイト制作やシステム開発について、どんな些細なことでもお気軽にご相談ください。
            あなたの課題に最適なソリューションを一緒に見つけていきましょう。
          </p>

          <motion.a
            href="https://example.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-500 text-white px-8 py-3 rounded-full hover:bg-cyan-600 transition-colors shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            お問い合わせはこちら
          </motion.a>

          <p className="text-gray-500 mt-6 text-sm">
            運営しておりますブログ「OFFICIAL NON
            BLOG」のお問い合わせページよりご連絡ください
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
