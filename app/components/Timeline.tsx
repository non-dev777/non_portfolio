"use client";

import { motion } from "framer-motion";
import { ClockIcon } from "@heroicons/react/24/outline";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timelineItems: TimelineItem[] = [
  {
    year: "2017",
    title: "同志社大学理工学部卒業",
    description: "数学と情報を学び、コンピュータを使った問題解決の方法を学ぶ",
  },
  {
    year: "2017〜2019",
    title: "東証一部上場企業の人材会社にて勤務",
    description: "営業職として従事。プログラミングに興味を持ち始める",
  },
  {
    year: "2018",
    title: "プログラミングスクールにてプログラミングを学習",
    description:
      "HTML, CSS, PHP, MySQLを学び、プログラミングの基礎を身につける",
  },
  {
    year: "2019",
    title: "SES会社にて勤務",
    description: "SES会社にてよりプログラミングを学ぶ。",
  },
  {
    year: "2019~2024",
    title: "中小企業の社内SEとして勤務",
    description:
      "自社システム開発・運用を中心に従事。その他にもホームページ制作やIT機器管理やサーバー運用、システム導入支援などを行う",
  },
  {
    year: "2022",
    title: "基本情報技術者試験 合格",
    description: "IT基礎知識の習得。ITエンジニアとしての基礎知識を身につける",
  },
  {
    year: "2023",
    title: "応用情報技術者試験 合格",
    description:
      "より高度なIT知識の習得。ITエンジニアとしてのより高度な知識を身につける",
  },
  {
    year: "2024",
    title: "情報処理安全確保支援士試験 合格",
    description: "高度なセキュリティ知識とスキルの習得",
  },
  {
    year: "2025",
    title: "フリーランスとして活動開始",
    description:
      "Webサイト制作やシステム開発を中心に活動をスタート。自身の運営しているブログやYouTubeで得られた知見や情報処理安全確保支援士の資格を活かし、セキュアでSEOにも強いシステムの構築を心がけています。",
  },
];

const Timeline = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <ClockIcon className="h-16 w-16 text-cyan-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Timeline</h2>
          <p className="text-gray-600 text-lg mb-12">経歴</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-cyan-200 transform -translate-x-1/2" />

          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex md:items-center mb-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Content */}
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-2">
                    <span className="text-cyan-500 font-bold text-lg">
                      {item.year}
                    </span>
                    <div className="h-0.5 flex-grow bg-cyan-100 mx-4" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>

              {/* Timeline Point */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-cyan-500 rounded-full transform -translate-x-1/2 border-4 border-white" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export { Timeline };
