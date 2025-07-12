import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiIceCream } = FiIcons;

const Logo = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center space-x-2"
    >
      <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
        <SafeIcon icon={FiIceCream} className="w-6 h-6 text-white" />
      </div>
      <span className="text-white font-bold text-xl">Sorveteria Pessoa</span>
    </motion.div>
  );
};

export default Logo;