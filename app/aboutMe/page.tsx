import MasonryGrid from "../components/images/masonryGrid";

export default function AboutMe() {
    return (
        <div className="py-8 px-5 lg:px-20">
            {/* Reduced space between the text box and the MasonryGrid */}
            <div className="bg-gradient-to-r from-gray-700 via-gray-900 to-black shadow-lg p-5 md:p-10 rounded-lg text-white mb-4">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">About Me</h2>
                <p className="text-md md:text-lg">
                    I&apos;m a current senior at Dartmouth College, majoring in Government and Computer Science.
                    As I approach the end of my undergraduate education in November 2024, I&apos;m actively seeking
                    new graduate positions where I can make meaningful contributions and further my growth in areas
                    that deeply interest me: technology, cybersecurity, national security, and sustainability.
                </p>
            </div>
            <MasonryGrid />
        </div>
    );
}
