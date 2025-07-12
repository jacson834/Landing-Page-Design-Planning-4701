import React from 'react';
import { motion } from 'framer-motion';

const LocationMap = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Onde Estamos
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Venha nos visitar! Estamos em um local de fácil acesso.
          </p>
        </motion.div>

        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1598455669217!2d-46.653387!3d-23.564251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzUxLjMiUyA0NsKwMzknMTIuMiJX!5e0!3m2!1spt-BR!2sbr!4v1647891234567!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl"
          ></iframe>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <div className="text-white">
              <h3 className="text-xl font-semibold mb-2">Sorveteria Pessoa</h3>
              <p className="mb-1">Av. Paulista, 1000 - Bela Vista</p>
              <p className="mb-1">São Paulo - SP, 01310-100</p>
              <p>Tel: (11) 99999-9999</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;