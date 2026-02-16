export default function ContactPage() {
    return (
        <section className="pt-32 px-6 md:px-20 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
                Jika kamu memiliki pertanyaan, saran, atau ingin bekerja sama dengan kami, 
                silakan hubungi kami melalui formulir di bawah ini.
            </p>

            <form className="bg-white p-6 rounded-lg shadow-lg space-y-4">
                {/* Nama */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Nama</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-blue-500"
                        placeholder="Masukkan nama Anda"
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Email</label>
                    <input
                        type="email"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-blue-500"
                        placeholder="Masukkan email Anda"
                        required
                    />
                </div>

                {/* Pesan */}
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Pesan</label>
                    <textarea
                        className="w-full border border-gray-300 rounded-lg px-3 py-2 h-32 focus:outline-blue-500"
                        placeholder="Tulis pesan Anda di sini..."
                        required
                    ></textarea>
                </div>

                {/* Tombol */}
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Kirim Pesan
                </button>
            </form>
        </section>
    );
}