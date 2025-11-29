"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useLanguage } from "@/contexts/language-context"

import {
  FiChevronDown,
  FiArrowLeft,
  FiLock,
  FiDatabase,
  FiUser,
  FiShield,
  FiShare2,
  FiEdit3,
} from "react-icons/fi";
import Link from "next/link";

export default function PrivacyPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useLanguage();

  const items = [
    {
      icon: <FiUser className="text-purple-400 text-xl" />,
      title: t("privacy.item1.title"),
      details: (
        <>
          <p>
            {t("privacy.item1.details")}
          </p>
        </>
      ),
    },
    {
      icon: <FiDatabase className="text-purple-400 text-xl" />,
      title: t("privacy.item2.title"),
      details: (
        <>
          <p>
            {t("privacy.item2.details")}
          </p>
        </>
      ),
    },
    {
      icon: <FiLock className="text-purple-400 text-xl" />,
      title: t("privacy.item3.title"),
      details: (
        <>
          <p>
            {t("privacy.item3.details")}
          </p>
        </>
      ),
    },
    {
      icon: <FiShare2 className="text-purple-400 text-xl" />,
      title: t("privacy.item4.title"),
      details: (
        <>
          <p>
            {t("privacy.item4.details")}
          </p>
        </>
      ),
    },
    {
      icon: <FiShield className="text-purple-400 text-xl" />,
      title: t("privacy.item5.title"),
      details: (
        <>
          <p>
            {t("privacy.item5.details")}
          </p>
        </>
      ),
    },
    {
      icon: <FiEdit3 className="text-purple-400 text-xl" />,
      title: t("privacy.item6.title"),
      details: (
        <>
          <p>
            {t("privacy.item6.details")}
          </p>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen gradient-purple text-white py-16 px-6">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Кнопка "Назад" */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-400 transition-colors duration-200 font-medium"
          >
            <FiArrowLeft className="text-lg" />
            {t("privacy.backToHome")}
          </Link>
        </div>

        {/* Заголовок */}
        <h1 className="text-4xl font-bold text-center mb-6">
          {t("privacy.title")}
        </h1>
        {/* @page.tsx (5-7)  весь текст под */}
        
        {/* Контент */}
        <div className="space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-purple-500/10 transition-all"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full text-left px-6 py-5 flex justify-between items-center font-medium text-lg hover:bg-white/10 transition"
              >
                <div className="flex items-center gap-3">
                  {item.icon}
                  <span>{item.title}</span>
                </div>

                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FiChevronDown className="text-purple-400 text-xl" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-6 pb-5 text-gray-200 text-base leading-relaxed"
                  >
                    <div className="mt-2 space-y-2">{item.details}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
