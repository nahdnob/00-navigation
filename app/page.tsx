import Navbar from "@/src/components/navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <section className="pt-32 px-6 md:px-20 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome'</h2>
                <p className="text-gray-600 leading-relaxed">
                    Ini adalah website atau profil perusahaan kami.
                </p>
            </section>
        </>
    );
}