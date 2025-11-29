"use client";

import Link from "next/link";
import { FiArrowLeft, FiAlertTriangle } from "react-icons/fi";

export default function NotFound() {
  return (
    <div className="min-h-screen gradient-purple text-white py-12 px-4 flex items-center">
      <div className="w-full max-w-md mx-auto flex flex-col items-center space-y-6 sm:space-y-8">
        {/* Иконка ошибки */}
        <div className="bg-white/10 backdrop-blur-xl rounded-full p-5 sm:p-6 border border-white/20 mb-1.5 shadow-lg shadow-purple-500/10">
          <FiAlertTriangle className="text-purple-400 text-5xl sm:text-6xl" />
        </div>
        {/* Заголовок */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2">404 — Не найдено</h1>
        <p className="text-base sm:text-lg text-gray-200 text-center max-w-xs sm:max-w-md">
          Такой страницы нет.
        </p>
        {/* Кнопка "Назад на главную" */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-purple-500/20 hover:bg-purple-500/40 border border-purple-400 rounded-xl px-5 sm:px-6 py-2.5 sm:py-3 text-purple-200 hover:text-white font-medium text-base sm:text-lg transition-colors"
        >
          <FiArrowLeft className="text-lg sm:text-xl" />
          На главную
        </Link>
      </div>
    </div>
  );
}
