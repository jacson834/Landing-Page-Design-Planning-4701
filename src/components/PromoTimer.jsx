import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const PromoTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center space-x-4">
          <span className="text-lg font-semibold">🍨 Promoção Especial!</span>
          <div className="flex items-center space-x-2">
            <div className="bg-white/20 px-3 py-1 rounded">
              {String(timeLeft.hours).padStart(2, '0')}h
            </div>
            <span>:</span>
            <div className="bg-white/20 px-3 py-1 rounded">
              {String(timeLeft.minutes).padStart(2, '0')}m
            </div>
            <span>:</span>
            <div className="bg-white/20 px-3 py-1 rounded">
              {String(timeLeft.seconds).padStart(2, '0')}s
            </div>
          </div>
          <span className="hidden md:inline">30% OFF em todos os milk-shakes!</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PromoTimer;