import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { generateWhatsAppLink } from '../utils/whatsappLink';

const { FiShoppingCart, FiTrash2, FiPlus, FiMinus } = FiIcons;

const Cart = ({ selectedProducts, setSelectedProducts }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = selectedProducts.reduce((sum, product) => 
      sum + (product.price * product.quantity), 0
    );
    setTotal(newTotal);
  }, [selectedProducts]);

  const updateQuantity = (productId, change) => {
    setSelectedProducts(prev => prev.map(product => {
      if (product.id === productId) {
        const newQuantity = Math.max(0, product.quantity + change);
        return newQuantity === 0 
          ? null 
          : { ...product, quantity: newQuantity };
      }
      return product;
    }).filter(Boolean));
  };

  const hasFreeDelivery = total >= 50; // Frete grátis acima de R$ 50

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <button
          onClick={() => setIsOpen(true)}
          className="bg-pink-500 text-white p-4 rounded-full shadow-lg"
        >
          <SafeIcon icon={FiShoppingCart} className="w-6 h-6" />
          {selectedProducts.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
              {selectedProducts.length}
            </span>
          )}
        </button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl"
            >
              <div className="p-4 flex flex-col h-full">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Seu Carrinho</h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ×
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto">
                  {selectedProducts.map(product => (
                    <motion.div
                      key={product.id}
                      layout
                      className="flex items-center justify-between p-4 border-b"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1 mx-4">
                        <h3 className="font-semibold">{product.name}</h3>
                        <p className="text-gray-600">
                          R$ {(product.price * product.quantity).toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(product.id, -1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <SafeIcon icon={FiMinus} className="w-4 h-4" />
                        </button>
                        <span>{product.quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.id, 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <SafeIcon icon={FiPlus} className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="border-t pt-4">
                  {hasFreeDelivery && (
                    <div className="text-green-500 text-sm mb-2">
                      🎉 Você ganhou frete grátis!
                    </div>
                  )}
                  <div className="flex justify-between text-lg font-bold mb-4">
                    <span>Total:</span>
                    <span>R$ {total.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => window.location.href = generateWhatsAppLink(selectedProducts)}
                    className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                  >
                    Finalizar no WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Cart;