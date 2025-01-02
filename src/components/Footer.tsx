import { GithubIcon, LinkedinIcon } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="w-full px-4 py-6 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                    © ColorSense by <a
                        href="https://www.linkedin.com/in/muhammed-nabeel-b71279254"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='underline hover:text-white'
                        aria-label="Muhammed Nabeel LinkedIn"
                    >Muhammed Nabeel</a> • Crafting beautiful color experiences
                </div>
                <div className="flex items-center space-x-4">
                    <a
                        href="https://github.com/nabeel-ncz"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                        aria-label="GitHub"
                    >
                        <GithubIcon className="h-5 w-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/muhammed-nabeel-b71279254"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                        aria-label="Twitter"
                    >
                        <LinkedinIcon className="h-5 w-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 