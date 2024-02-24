import Link from 'next/link';

export default function Projects() {
    return (
        <div className="px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <Link key={index} href={`/projects/${project.id}`} passHref legacyBehavior>
                        <a className="group rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500 ease-in-out">
                            <div className="flex flex-col h-full p-6 bg-gradient-to-r from-gray-700 via-gray-900 to-black">
                                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                                <time className="block mb-2 text-lg text-gray-300">{project.date}</time>
                                <p className="text-gray-300 text-lg flex-1">{project.description}</p>
                            </div>
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
}


const projects = [
    {
        title: "Tiny Search Engine",
        date: "Released in Spring 2023",
        description: "Designed with subsystems: crawler, indexer, and querier.",
        id: "/tinySearchEngine",
        image: "https://res.cloudinary.com/djui88jlr/image/upload/v1708792417/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector_zz97ig.jpg" // Placeholder image URL
    },
    {
        title: "A Cost-Benefit Analysis of Securing Build Environments",
        date: "Started in Fall 2023",
        description: "Comparing isolated, hermetic, reproducible, and bootstrappable builds in achieving desired levels of build environment security.",
        id: "/buildEnvironments",
        image: "https://res.cloudinary.com/djui88jlr/image/upload/v1708634190/IMG_1059_meixom.jpg" // Placeholder image URL
    },
    {
        title: "PowerPoint Data Extraction and LLMs",
        date: "Released in November 2023",
        description: "Developed a RAG that extracted data from a PowerPoint, summarized data chunks using GPT-4, stored using ChromaDB, and designed a querying process where a user can ask questions about the extracted data using GPT-4.",
        id: "/ragPPT",
        image: "https://res.cloudinary.com/djui88jlr/image/upload/v1708793205/EXTRACT_DATA_FROM_agilyi.png" // Placeholder image URL
    },
    // ... more projects
];
