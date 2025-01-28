"use client";

import { useState } from "react";
import Slider from "react-slick";
import { motion, AnimatePresence } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Work {
  id: string;
  title: string;
  description: string;
  image: string;
  category: "media" | "website" | "system";
  details: {
    technologies?: string[];
    link?: string;
    points?: string[];
    [key: string]: any;
  };
}

const works: Work[] = [
  {
    id: "media1",
    title: "OFFICIAL NON BLOG",
    description: "セキュリティ・プログラミング情報を発信するブログメディア",
    image: "/works/blog.jpg",
    category: "media",
    details: {
      technologies: ["WordPress", "PHP", "MySQL"],
      link: "https://example.com",
      points: [
        "SEO対策による月間10万PV達成",
        "セキュリティ対策の実装",
        "パフォーマンス最適化",
      ],
    },
  },
  // 他の作品も同様に追加
];

const categories = [
  { id: "media", name: "運営メディア" },
  { id: "website", name: "Webサイト" },
  { id: "system", name: "システム開発" },
];

const Works = () => {
  const [selectedCategory, setSelectedCategory] = useState("media");
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const filteredWorks = works.filter(
    (work) => work.category === selectedCategory
  );

  return (
    <section id="works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Works
        </h2>

        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                selectedCategory === category.id
                  ? "bg-cyan-500 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="mb-12">
          <Slider {...sliderSettings}>
            {filteredWorks.map((work) => (
              <div key={work.id} className="px-2">
                <div
                  className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105"
                  onClick={() => setSelectedWork(work)}
                >
                  <div className="relative h-48">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {work.title}
                    </h3>
                    <p className="text-gray-600">{work.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <AnimatePresence>
          {selectedWork && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedWork(null)}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-64">
                  <img
                    src={selectedWork.image}
                    alt={selectedWork.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {selectedWork.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {selectedWork.description}
                  </p>

                  {selectedWork.details.technologies && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-700 mb-2">
                        使用技術
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedWork.details.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedWork.details.points && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-700 mb-2">
                        工夫した点
                      </h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        {selectedWork.details.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedWork.details.link && (
                    <div>
                      <a
                        href={selectedWork.details.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-cyan-600 transition-colors"
                      >
                        サイトを見る
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Works;
