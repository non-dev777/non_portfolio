"use client";

import { motion } from "framer-motion";
import { ShieldCheckIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

const Strength = () => {
  const strengths = [
    {
      icon: ShieldCheckIcon,
      title: "セキュリティとSEOに強い",
      description:
        "情報安全確保支援士の資格を活かしたセキュアなWebサイト制作と、SEOブログ運営経験を活かしたSEO対策を提供します。",
      points: [
        "セキュリティ診断と対策",
        "SEOを意識したコーディング",
        "パフォーマンス最適化",
      ],
    },
    {
      icon: RocketLaunchIcon,
      title: "業務効率化システムの開発",
      description:
        "「これを自動化できたらいいな」「こんなシステムがあったらいいな」という課題に対して、最適なソリューションを提供します。",
      points: [
        "業務分析と要件定義",
        "カスタマイズ可能なシステム設計",
        "使いやすいUI/UX設計",
      ],
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

              <ul className="space-y-3">
                {strength.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="flex items-center text-gray-600"
                  >
                    <span className="h-2 w-2 bg-cyan-500 rounded-full mr-3" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Strength;
