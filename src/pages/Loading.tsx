import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const Loading = () => {
    const { isDarkMode } = useTheme();

    return (
        <div className={`fixed inset-0 flex items-center justify-center ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
            }`}>
            <div className="flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="relative"
                >
                    <div className="flex space-x-2">
                        <motion.div
                            className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-gray-200' : 'bg-gray-700'
                                }`}
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.6, 1]
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: 0
                            }}
                        />
                        <motion.div
                            className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-gray-200' : 'bg-gray-700'
                                }`}
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.6, 1]
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: 0.2
                            }}
                        />
                        <motion.div
                            className={`w-3 h-3 rounded-full ${isDarkMode ? 'bg-gray-200' : 'bg-gray-700'
                                }`}
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [1, 0.6, 1]
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                delay: 0.4
                            }}
                        />
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className={`mt-4 text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}
                >
                    Loading ColorSense...
                </motion.p>
            </div>
        </div>
    );
};

export default Loading;
