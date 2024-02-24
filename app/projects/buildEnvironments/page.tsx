import Image from 'next/image';
import Link from 'next/link';

export default function BuildEnvironments() {
    return (
        <div className="bg-black min-h-screen text-white">
            <header className="text-center p-6">
                <h1 className="text-4xl font-bold">Build Environments</h1>
                <p className="text-xl">Securing Software Supply Chains</p>
            </header>
            <section className="py-8">
                <div className="container mx-auto px-4">
                    <Image
                        src="https://res.cloudinary.com/djui88jlr/image/upload/v1708797735/fj_gfmhdregshrdmfdhtyrsdf_jm_ryjm_kj_q5oyqe.png"
                        alt="Build Environments Illustration"
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
                        The "Build Environments" project explores various strategies to enhance the security of software build environments as part of securing software supply chains.
                    </p>
                    <ul className="list-disc my-4 pl-8">
                        <li>Analysis of isolated, hermetic, reproducible, and bootstrappable build environments.</li>
                        <li>Evaluation of their effectiveness in mitigating supply chain attacks.</li>
                        <li>Recommendations for implementing secure build practices.</li>
                    </ul>
                </div>
                <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black p-6 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold mb-4">Challenges and Solutions</h2>
                    <p className="text-lg">
                        Addressing the complexities of build environment security presents numerous challenges, including configuration management, dependency tracking, and provenance verification.
                    </p>
                    {/* Add more content about challenges and solutions */}
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
