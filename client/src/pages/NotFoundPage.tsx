import { motion } from "motion/react";
import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Home } from "lucide-react";

export function NotFoundPage() {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
            >
                <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] opacity-50">
                    404
                </h1>
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-2xl md:text-4xl font-bold text-white tracking-widest uppercase">
                        Page Not Found
                    </p>
                </div>
            </motion.div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="mt-6 text-gray-400 max-w-md"
            >
                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-8"
            >
                <Link to="/">
                    <Button className="bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] text-white border-0 hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all">
                        <Home className="mr-2 h-4 w-4" />
                        Back to Home
                    </Button>
                </Link>
            </motion.div>
        </div>
    );
}
