import Image from 'next/image';
import Link from 'next/link';

export default function RagPPT() {
    return (
        <div className="bg-black min-h-screen text-white">
            <header className="text-center p-6">
                <h1 className="text-4xl font-bold">PowerPoint Data Extraction and LLMs</h1>
                <p className="text-xl">Innovations in Data Analysis</p>
            </header>
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <Image
                        src="https://res.cloudinary.com/djui88jlr/image/upload/v1708793205/EXTRACT_DATA_FROM_agilyi.png"
                        alt="RagPPT Illustration"
                        width={800}
                        height={450}
                        layout="responsive"
                        objectFit="cover"
                        className="rounded-lg"
                    />
                </div>
            </section>
            <div className="container mx-auto px-4 space-y-8">
                <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black p-6 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
                    <p className="text-lg">
                        This project focuses on extracting and analyzing data from PowerPoint presentations using Large Language Models (LLMs). It showcases a novel approach to summarizing and querying information contained within slides.
                    </p>
                    <ul className="list-disc my-4 pl-8">
                        <li>Development of a tool for automatic data extraction from PowerPoint files.</li>
                        <li>Use of GPT-4 for summarizing the extracted data into actionable insights.</li>
                        <li>Creation of a user-friendly interface for querying the summarized data.</li>
                    </ul>
                </div>
                <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black p-6 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Technical Challenges</h2>
                    <p className="text-lg">
                        Implementing this project presented unique technical challenges, such as optimizing the data extraction process and ensuring the accuracy of the summarization.
                    </p>
                    {/* Add more content about technical challenges */}
                </div>
            </div>
            <footer className="text-center p-6 mt-8">
                <div className="flex justify-center space-x-4">
                    <Link href="/projects" legacyBehavior={true}>
                        <a className="hover:underline">Back to Projects</a>
                    </Link>
                    <span>|</span>
                    <Link href="/contact" legacyBehavior={true}>
                        <a className="hover:underline">Contact for More Info</a>
                    </Link>
                </div>
            </footer>
        </div>
    );
}
