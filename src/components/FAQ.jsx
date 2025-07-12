import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiChevronDown } = FiIcons;

const FAQ = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const faqs = [
    {
      question: 'Quais são os métodos de pagamento aceitos?',
      answer: 'Aceitamos dinheiro, PIX, cartões de débito e crédito das principais bandeiras.'
    },
    {
      question: 'Qual é o prazo de entrega?',
      answer: 'O prazo médio de entrega é de 30 a 45 minutos, dependendo da sua localização.'
    },
    {
      question: 'Vocês têm opções sem lactose?',
      answer: 'Sim! Temos uma linha completa de sorvetes sem lactose e também opções veganas.'
    },
    {
      question: 'Como funciona o delivery?',
      answer: 'Fazemos entregas próprias num raio de 5km. Para pedidos acima de R$ 50, o frete é grátis!'
    },
    {
      question: 'Os sorvetes são artesanais?',
      answer: 'Sim, todos os nossos sorvetes são produzidos artesanalmente com ingredientes naturais.'
    }
  ];

  return (
    <section className="py-20 bg-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-white/80">
            Tire suas dúvidas sobre nossos produtos e serviços
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between text-white"
              >
                <span className="font-medium">{faq.question}</span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <SafeIcon icon={FiChevronDown} className="w-5 h-5" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-white/80">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;