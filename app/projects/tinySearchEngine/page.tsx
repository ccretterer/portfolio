import Image from 'next/image';
import Link from 'next/link';

export default function TinySearchEngine() {
    return (
        <div className="bg-black min-h-screen text-white">
            <header className="text-center p-6">
                <h1 className="text-4xl font-bold">Tiny Search Engine</h1>
                <p className="text-xl">A Deep Dive into the Subsystems</p>
            </header>
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <Image
                        src="https://res.cloudinary.com/djui88jlr/image/upload/v1708797847/Searching_the_Web_d4d7om.png"
                        alt="Tiny Search Engine Illustration"
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
                        The Tiny Search Engine (TSE) is a full-stack search engine built as an educational tool to demonstrate the basics of search engine indexing and querying. It includes three main subsystems: the crawler, the indexer, and the querier, each responsible for a distinct part of the search process.
                    </p>
                    <ul className="list-disc my-4 pl-8">
                        <li><strong>Crawler:</strong> Recursively scans web pages and collects data.</li>
                        <li><strong>Indexer:</strong> Processes the data and builds an index based on keywords.</li>
                        <li><strong>Querier:</strong> Allows users to perform search queries and retrieves relevant documents.</li>
                    </ul>
                </div>
                <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black p-6 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Technical Highlights</h2>
                    <p>
                        Here are some of the technical challenges and solutions implemented in the Tiny Search Engine project.
                    </p>
                    {/* Add more content about technical highlights */}
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
