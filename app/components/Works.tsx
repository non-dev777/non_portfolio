"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// メディアコンテンツの型定義
// type: 表示するメディアの種類（画像/GIF/YouTube）
// url: メディアのURL
// youtubeId: YouTubeの場合の動画ID（オプション）
interface MediaContent {
  type: "image" | "gif" | "youtube";
  url: string;
  youtubeId?: string;
}

// 作品データの型定義
interface Work {
  id: string;
  title: string;
  description: string;
  image: string; // 一覧表示用のサムネイル画像
  category: "media" | "website" | "system";
  details: {
    technologies?: string[]; // 使用技術一覧
    link?: string; // 作品のURL
    points?: string[]; // 工夫した点
    media?: MediaContent[]; // 詳細表示用のメディア（画像/GIF/動画）
    when?: string; // 制作時期
    howlong?: string; // 制作期間
    other?: string[]; // その他
    [key: string]: any;
  };
}

// 作品データ
const works: Work[] = [
  // 運営メディアOFFICIAL NON BLOG
  {
    id: "media1",
    title: "OFFICIAL NON BLOG",
    description: "セキュリティ・プログラミング情報を発信するブログメディア",
    image: "/works/blog.jpg", // サムネイル用の画像
    category: "media",
    details: {
      technologies: ["WordPress", "PHP", "MySQL"],
      link: "https://example.com",
      points: [
        "SEO対策による月間10万PV達成",
        "セキュリティ対策の実装",
        "パフォーマンス最適化",
      ],
      // 詳細表示用のメディア
      media: [
        {
          type: "image",
          url: "/works/blog-detail.jpg", // 詳細な画像
        },
        {
          type: "gif",
          url: "/works/blog-demo.gif", // 機能のデモGIF
        },
        {
          type: "youtube",
          url: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
        },
      ],
    },
  },
  // ポートフォリオサイト
  {
    id: "website1",
    title: "ノンのぽーとふぉりお",
    description:
      "このポートフォリオサイトです。自分の制作実績をまとめています。Next.jsで作成し、静的サイトとしてデプロイしています。",
    image: "/works/website/portfolio/1.jpg",
    category: "website",
    details: {
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      points: [
        "モダンな UI/UX デザイン",
        "レスポンシブ対応",
        "アニメーションの実装",
      ],
      media: [
        {
          type: "image",
          url: "works/website/portfolio/1.jpg",
        },
      ],
      howlong: "5日程度（随時更新中）",
    },
  },
  // 工務店のデモサイト
  {
    id: "website2",
    title: "WordPress自作テーマによる工務店のサイト",
    description:
      "WordPressのテーマを自作し作成しました。工務店のサイトですが、多くの企業にも利用できるようなデザインです。",
    image: "/works/website/demosite1/demo1.jpg",
    category: "website",
    details: {
      technologies: ["WordPress", "PHP", "MySQL", "Bootstrap"],
      link: "https://demosite1.official-non.com/",
      points: [
        "セキュリティ対策の実装",
        "カスタム投稿タイプの実装",
        "SEO対策の実装",
        "モダンなデザイン",
        "レスポンシブ対応",
      ],
      media: [
        {
          type: "image",
          url: "/works/website/demosite1/demo1.jpg",
        },
        {
          type: "image",
          url: "/works/website/demosite1/demo2.jpg",
        },
        {
          type: "image",
          url: "/works/website/demosite1/demo3.jpg",
        },
      ],
      howlong: "1週間",
    },
  },
  // サンプル株式会社の求人サイト
  {
    id: "website3",
    title: "企業の求人サイト",
    description:
      "企業の求人サイトで作成したものをデモサイト用に置き換えたものです。HTMLとCSSのみで静的な読み込みが早いサイトです。",
    image: "/works/website/demosite2/demo1.jpg",
    category: "website",
    details: {
      technologies: ["Bootstrap", "一部PHP"],
      link: "https://demosite2.official-non.com/",
      points: ["静的で早い", "SEO対策の実装", "レスポンシブ対応"],
      media: [
        {
          type: "image",
          url: "/works/website/demosite2/demo1.jpg",
        },
        {
          type: "image",
          url: "/works/website/demosite2/demo2.jpg",
        },
        {
          type: "image",
          url: "/works/website/demosite2/demo3.jpg",
        },
      ],
      howlong: "3週間〜1ヶ月",
    },
  },
  // BLAIP
  {
    id: "system3",
    title: "BLAIP",
    description:
      "ブログの記事生成を手助けするツールです。競合サイト調査とAIで記事を生成するためのプロンプトを作成することができます。",
    image: "/works/system/blaip/blaip1.jpg",
    category: "system",
    details: {
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://blaip.vercel.app/",
      points: [
        "競合記事の見出しや文字数、使用画像枚数などを簡単に調査することができます。",
        "キーワードを入力すだけでおすすめのタイトルも生成することができます。",
        "プロンプトを作成するだけなので、無料で何度でも利用できます。できあがったプロンプトをAIツールに投げるだけで記事が作成できます。",
        "マニュアルページも作成し、ユーザーがより使いやすいように工夫しています。",
        "利用ページで各ボタンにtipsなども配置し、ユーザーがより使いやすいように工夫しています。",
        "モダンなデザイン",
      ],
      media: [
        {
          type: "image",
          url: "/works/system/blaip/blaip1.jpg",
        },
      ],
      other: [
        "需要があればログイン機能をつけて、できあがるプロンプトを自由にカスタマイズできるようにしたいと考えています。",
      ],
    },
  },
  // 楽天ROOM自動削除システム
  {
    id: "system1",
    title: "楽天ROOM投稿自動削除システム",
    description:
      "楽天ROOMで商品を投稿したものを自動削除システムです。楽天ROOMで投稿できる数は2万件までで、2万件に到達すると手動で1つずつ削除しなければいけませんが、このシステムを使用することで自動で削除することができます。",
    image: "/works/system/delRakutenRoom/delRakutenRoom1.gif",
    category: "system",
    details: {
      technologies: ["Python", "Selenium"],
      points: [
        "ネットにいろいろな自動で削除するツールの説明がありますが、どうしても途中で止まったりするので自作しました。",
        "止まることのないように細かな工夫をしています",
        "envファイルに楽天IDとパスワードを設定することで、手軽に使うことができます。",
      ],
      media: [
        {
          type: "gif",
          url: "/works/system/delRakutenRoom/delRakutenRoom1.gif",
        },
      ],
      howlong: "3日程度",
    },
  },
  // 成績表示システム
  {
    id: "system4",
    title: "成績表示システム",
    description:
      "データベースから必要なデータを抜き出し、項目に応じた営業成績が表示できるシステムです。",
    image: "/works/noimg.jpg",
    category: "system",
    details: {
      technologies: ["PHP", "MySQL", "JS", "Chart.js"],
      points: [
        "営業社員の所属する支店に応じてグラフの色が変わり、視覚的にわかりやすいようにしました。",
        "目標値を横ラインで表示し、達成しているかわかりやすくしました。",
        "個人をクリックすることで個人の詳細の成績を確認することができるようにしました。",
      ],
      media: [
        {
          type: "image",
          url: "/works/noimg.jpg",
        },
      ],
    },
  },
  // YouTubeMP3ダウンローダー
  {
    id: "system2",
    title: "YouTubeMP3ダウンローダー",
    description:
      "YouTubeの動画をMP3に変換してダウンロードするシステムです。複数まとめてダウンロードすることができ、音質も選択することができます。",
    category: "system",
    image: "/works/system/youtube_dl_mp3/youtube_dl_mp3.gif",
    details: {
      technologies: ["Python", "yt-dlp", "ffmpeg", "tkinter"],
      points: [
        "複数まとめてダウンロードすることができ、音質も選択することができます。",
        "tkinterを使用してGUIを作成しています。",
      ],
      other: [
        "YouTubeの利用規約に抵触する可能性があるため、配布もしていなければ、すでにシステムを削除しました。",
      ],
      media: [
        { type: "gif", url: "/works/system/youtube_dl_mp3/youtube_dl_mp3.gif" },
      ],
    },
  },
];

// カテゴリー一覧
const categories = [
  { id: "website", name: "Webサイト" },
  { id: "system", name: "システム開発" },
  { id: "media", name: "運営メディア" },
];

// メディア表示用コンポーネント
// content: 表示するメディアの情報
const MediaDisplay = ({ content }: { content: MediaContent }) => {
  switch (content.type) {
    case "youtube":
      // YouTube埋め込み
      return (
        <div className="relative w-full pt-[56.25%]">
          {" "}
          {/* 16:9のアスペクト比 */}
          <iframe
            src={content.url}
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    case "gif":
    case "image":
      // 画像またはGIFの表示
      return (
        <div className="relative w-full flex justify-center">
          <img
            src={content.url}
            alt="詳細画像"
            className="max-w-full max-h-[60vh] object-contain"
          />
        </div>
      );
    default:
      return null;
  }
};

const Works = () => {
  // 状態管理
  const [selectedCategory, setSelectedCategory] = useState("website"); // 選択中のカテゴリー
  const [selectedWork, setSelectedWork] = useState<Work | null>(null); // 選択中の作品（詳細表示用）
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0); // 現在表示中のメディアのインデックス

  // 選択されたカテゴリーの作品のみをフィルタリング
  const filteredWorks = works.filter(
    (work) => work.category === selectedCategory
  );

  // メディアの次へボタンのハンドラー
  const handleNextMedia = () => {
    if (selectedWork?.details.media) {
      setCurrentMediaIndex(
        (prev) => (prev + 1) % selectedWork.details.media!.length
      );
    }
  };

  // メディアの前へボタンのハンドラー
  const handlePrevMedia = () => {
    if (selectedWork?.details.media) {
      setCurrentMediaIndex((prev) =>
        prev === 0 ? selectedWork.details.media!.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Works
        </h2>

        {/* カテゴリー選択ボタン */}
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

        {/* 作品一覧（グリッド表示） */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredWorks.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition hover:scale-105"
              onClick={() => {
                setSelectedWork(work);
                setCurrentMediaIndex(0); // メディアのインデックスをリセット
              }}
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
            </motion.div>
          ))}
        </div>

        {/* 作品詳細のモーダル */}
        <AnimatePresence>
          {selectedWork && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-4 overflow-y-auto"
              onClick={() => setSelectedWork(null)}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                className="bg-white rounded-lg max-w-2xl w-full my-8 relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* 閉じるボタン */}
                <button
                  onClick={() => setSelectedWork(null)}
                  className="absolute right-4 top-4 z-10 bg-white rounded-full p-1 shadow-md hover:bg-gray-100 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* メディア表示部分 */}
                <div className="relative bg-gray-100 p-4">
                  {selectedWork.details.media ? (
                    <>
                      <div className="relative">
                        <MediaDisplay
                          content={
                            selectedWork.details.media[currentMediaIndex]
                          }
                        />
                        {/* 複数メディアがある場合の前後ボタン */}
                        {selectedWork.details.media.length > 1 && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePrevMedia();
                              }}
                              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white hover:shadow-lg transition-all"
                            >
                              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-r-[12px] border-r-cyan-500 border-b-[8px] border-b-transparent" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleNextMedia();
                              }}
                              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white hover:shadow-lg transition-all"
                            >
                              <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-cyan-500 border-b-[8px] border-b-transparent" />
                            </button>
                          </>
                        )}
                      </div>
                      {/* メディアのインジケーター（ドット） */}
                      {selectedWork.details.media.length > 1 && (
                        <div className="flex justify-center gap-2 mt-4">
                          {selectedWork.details.media.map((_, index) => (
                            <button
                              key={index}
                              onClick={(e) => {
                                e.stopPropagation();
                                setCurrentMediaIndex(index);
                              }}
                              className={`w-2 h-2 rounded-full ${
                                currentMediaIndex === index
                                  ? "bg-cyan-500"
                                  : "bg-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    // メディアが設定されていない場合はサムネイル画像を表示
                    <div className="relative w-full flex justify-center">
                      <img
                        src={selectedWork.image}
                        alt={selectedWork.title}
                        className="max-w-full max-h-[60vh] object-contain"
                      />
                    </div>
                  )}
                </div>

                {/* 作品詳細情報 */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    {selectedWork.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {selectedWork.description}
                  </p>

                  {/* 使用技術 */}
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

                  {/* 工夫した点 */}
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

                  {/* 制作時期 */}
                  {selectedWork.details.when && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-700 mb-2">
                        制作時期
                      </h4>
                      <p className="text-gray-600">
                        {selectedWork.details.when}
                      </p>
                    </div>
                  )}

                  {/* 制作期間 */}
                  {selectedWork.details.howlong && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-700 mb-2">
                        制作期間
                      </h4>
                      <p className="text-gray-600">
                        {selectedWork.details.howlong}
                      </p>
                    </div>
                  )}

                  {/* その他 */}
                  {selectedWork.details.other && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-700 mb-2">
                        その他
                      </h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-2">
                        {selectedWork.details.other.map((other) => (
                          <li key={other}>{other}</li>
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

export { Works };
