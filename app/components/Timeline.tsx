"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timelineItems: TimelineItem[] = [
  {
    year: "2020",
    title: "基本情報技術者試験 合格",
    description: "IT基礎知識の習得とプログラミングスキルの向上",
  },
  {
    year: "2021",
    title: "応用情報技術者試験 合格",
    description: "より高度なIT知識とシステム開発スキルの習得",
  },
  {
    year: "2022",
    title: "情報安全確保支援士試験 合格",
    description: "高度なセキュリティ知識とスキルの習得",
  },
  {
    year: "2023",
    title: "フリーランスとして活動開始",
    description: "Webサイト制作やシステム開発を中心に活動",
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
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Timeline
        </h2>

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
