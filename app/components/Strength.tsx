"use client";

import { motion } from "framer-motion";
import { ShieldCheckIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

const Strength = () => {
  const strengths = [
    {
      icon: ShieldCheckIcon,
      title: "セキュアでSEOに強いWebサイト制作",
      description:
        "情報安全確保支援士の資格を活かしたセキュアなWebサイト制作と、SEOブログ運営経験を活かしたSEO対策を提供します。" +
        "\n\n" +
        "実績としては個人で活動したYouTubeの登録者は8700人を超え、ブログも月間8万円の収益なども達成しています。",
    },
    {
      icon: RocketLaunchIcon,
      title: "業務効率化システムの開発",
      description:
        "「これを自動化できたらいいな」「こんなシステムがあったらいいな」という課題に対して、最適なソリューションを提供します。" +
        "\n\n" +
        "機能面はもちろん使いやすさを意識したデザインでシステムを提供します。",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="strength"
      className="py-20 bg-gradient-to-b from-white to-cyan-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Strength
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <strength.icon className="h-12 w-12 text-cyan-500 mr-4" />
                <h3 className="text-xl font-semibold text-gray-800">
                  {strength.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {strength.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { Strength };
