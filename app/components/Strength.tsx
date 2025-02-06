"use client";

import { motion } from "framer-motion";
import {
  ShieldCheckIcon,
  RocketLaunchIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

type CanDos = {
  [key: string]: string[];
};

interface Strength {
  icon: React.ElementType;
  title: string;
  description: string;
  canDos: CanDos;
  pricing: string;
}

const Strength = () => {
  const strengths: Strength[] = [
    {
      icon: ShieldCheckIcon,
      title: "セキュアでSEOに強いWebサイト制作",
      description:
        "情報安全確保支援士の資格を活かしたセキュアなWebサイト制作と、SEOブログ運営経験を活かしたSEO対策を提供します。" +
        "\n\n" +
        "実績としては個人で活動したYouTubeの登録者は8700人を超え、ブログも月間8万円の収益なども達成しています。",
      canDos: {
        Webサイト制作: [
          "WordPressのテーマ開発。独自のデザインで記事を投稿できるようなWebサイトを作成します。",
          "独自デザインのWebサイトの作成。WordPressを使用しないサイトも作成します。",
          "LPの作成。コンバージョンを意識したデザインでLPを作成します。",
        ],
        その他: [
          "Webサイトのトラブルシューティング。WordPressなどWebサイトで問題が起きている場合は、原因を特定して解決します。",
          "SEO対策のアドバイス。SEO対策を意識したWebサイトに修正します。",
          "ブログの運営。SEO対策を意識したブログを運営します。",
          "その他Webサイトに関することでお困りごとがありましたら、お気軽にお問い合わせください。",
        ],
      },
      pricing: "無料でお見積りしております。お気軽にお問い合わせください。",
    },
    {
      icon: RocketLaunchIcon,
      title: "業務効率化システムの開発",
      description:
        "「これを自動化できたらいいな」「こんなシステムがあったらいいな」という課題に対して、最適なソリューションを提供します。" +
        "\n\n" +
        "機能面はもちろん使いやすさを意識したデザインでシステムを提供します。",
      canDos: {
        Webシステム開発: [
          "会員管理システムなどお客様のニーズに合わせたシステムを作成します。",
        ],
        自動化ツール: [
          "日々のタスクのルーティン作業を自動化します。",
          "VBAやGASも経験があるので、ExcelやGoogle Sheetsのシステムを作成します。",
        ],
        その他: [
          "その他業務効率化に関することでお困りごとがありましたら、お気軽にお問い合わせください。",
        ],
      },
      pricing: "無料でお見積りしております。お気軽にお問い合わせください。",
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <SparklesIcon className="h-16 w-16 text-cyan-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-12">Strength</h2>
        </motion.div>

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
                <h3 className="text-xl font-semibold text-gray-800 border-b border-cyan-500 pb-2">
                  {strength.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {strength.description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 border-b border-gray-200 pb-2">
                  できること
                </h4>
                {Object.entries(strength.canDos).map(([category, techs]) => (
                  <div key={category} className="mb-4">
                    <h5 className="text-md font-bold text-cyan-500 mb-2">
                      {category}
                    </h5>
                    <ul className="list-disc pl-5">
                      {techs.map((tech) => (
                        <li
                          className="text-gray-700 font-medium pb-2"
                          key={tech}
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="flex items-center">
                <p className="text-gray-800 font-bold"> {strength.pricing}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { Strength };
