import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const InstagramFeed = () => {
  // Simulando posts do Instagram (em produção, use a API real do Instagram)
  const posts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb',
      likes: 234,
      caption: 'Nosso delicioso sundae de chocolate! 🍫'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e',
      likes: 189,
      caption: 'Açaí na tigela, perfeito para o verão! 🍇'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699',
      likes: 321,
      caption: 'Milk shake que é sucesso! 🥤'
    }
  ];

  return (
    <section className="py-20 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            @sorveteriapessoa
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Siga-nos no Instagram e fique por dentro das novidades!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full aspect-square object-cover"
              />
              <div className="p-4">
                <p className="text-white/80 text-sm mb-2">❤️ {post.likes} curtidas</p>
                <p className="text-white">{post.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com/sorveteriapessoa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            <span>Seguir no Instagram</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramFeed;