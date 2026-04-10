import { motion } from "motion/react";

export function TermsOfServicePage() {
    return (
        <div className="pt-28 pb-16 container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00F5FF] to-[#6A5BFF] mb-8">
                    Terms of Service
                </h1>
                <div className="space-y-6 text-gray-300">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
                        <p>
                            By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations.
                            If you do not agree with these terms, you are prohibited from using or accessing this site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Intellectual Property</h2>
                        <p>
                            The materials contained in this website are protected by applicable copyright and trademark law.
                            Permission is granted to temporarily download one copy of the materials (information or software) on ZenworoX's website for personal,
                            non-commercial transitory viewing only.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. Disclaimer</h2>
                        <p>
                            The materials on ZenworoX's website are provided on an 'as is' basis. ZenworoX makes no warranties, expressed or implied,
                            and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability,
                            fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">4. Limitations</h2>
                        <p>
                            In no event shall ZenworoX or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit,
                            or due to business interruption) arising out of the use or inability to use the materials on ZenworoX's website.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-white mb-4">5. Governing Law</h2>
                        <p>
                            These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive
                            jurisdiction of the courts in that State or location.
                        </p>
                    </section>
                </div>
            </motion.div>
        </div>
    );
}
