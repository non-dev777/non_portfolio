"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface Certificate {
  name: string;
  image: string;
}

const certificates: Certificate[] = [
  {
    name: "基本情報技術者",
    image:
      process.env.NODE_ENV === "production"
        ? "/portfolio/certificates/basic.jpg"
        : "/certificates/basic.jpg",
  },
  {
    name: "応用情報技術者",
    image:
      process.env.NODE_ENV === "production"
        ? "/portfolio/certificates/applied.jpg"
        : "/certificates/applied.jpg",
  },
  {
    name: "情報処理安全確保支援士",
    image:
      process.env.NODE_ENV === "production"
        ? "/portfolio/certificates/security.jpg"
        : "/certificates/security.jpg",
  },
];

const Profile = () => {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  return (
    <section
      id="profile"
      className="py-20 bg-gradient-to-b from-cyan-50 to-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Image
            src={
              process.env.NODE_ENV === "production"
                ? "/portfolio/icons/non_profile.png"
                : "/icons/non_profile.png"
            }
            alt="Profile Icon"
            width={150}
            height={150}
            className="w-[150px] h-[150px] mx-auto rounded-full border-4 border-cyan-200 object-cover"
          />
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">ノン</h1>

        <div className="flex justify-center space-x-4 mb-6">
          <a
            href="https://official-non.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-cyan-500 transition-colors"
          >
            <i className="fas fa-home text-xl"></i>
          </a>
          <a
            href="https://x.com/non_dev777"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-cyan-500 transition-colors"
          >
            <i className="fab fa-x-twitter text-xl"></i>
          </a>
          <a
            href="https://github.com/non-dev777"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-cyan-500 transition-colors"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
        </div>

        <h2 className="text-xl text-gray-900 mb-6 md:block hidden">
          Webサイト制作 / システム開発 / ブロガー
        </h2>
        <h2 className="text-xl text-gray-900 mb-6 md:hidden flex flex-col">
          <span>Webサイト制作</span>
          <span>システム開発</span>
          <span>ブロガー</span>
        </h2>

        <p className="text-gray-600 mb-8 leading-relaxed md:text-center text-left">
          SEOを意識したWebサイトの作成や、自動化のためのシステム開発が得意です。
          <br />
          営業→SES→社内SE→2025年に独立。
          <br />
          社内SE時代には、副業でブログやYouTubeに取り組み収益も得ていました。
          <br />
          ユーザーの目線に立ち、安全で快適なWebサイト/システムを提供することを心がけています。
        </p>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">好き</h3>
          <p className="text-gray-600 mb-8 leading-relaxed">
            ガジェット/高校数学/プログラミング/ブログ
          </p>
        </div>

        <div className="">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">保有資格</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certificates.map((cert) => (
              <button
                key={cert.name}
                onClick={() => setSelectedCertificate(cert)}
                className="text-cyan-600 hover:text-cyan-700 underline cursor-pointer"
              >
                {cert.name}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {selectedCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              onClick={() => setSelectedCertificate(null)}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="bg-white p-4 rounded-lg max-w-lg mx-4 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="absolute -right-3 -top-3 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
                >
                  <XMarkIcon className="h-6 w-6 text-gray-600" />
                </button>
                <Image
                  src={selectedCertificate.image}
                  alt={selectedCertificate.name}
                  width={600}
                  height={400}
                  className="w-full max-w-[600px] rounded-lg"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export { Profile };
