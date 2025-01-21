import Image from 'next/image';

export default function EcosystemPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <h1 className="text-xl font-semibold text-gray-900">re:learn</h1>
                    <nav className="space-x-4">
                        <a href="#" className="text-gray-700 hover:text-orange-500">About</a>
                        <a href="#" className="text-gray-700 hover:text-orange-500">Projects</a>
                        <a href="#" className="text-gray-700 hover:text-orange-500">News & Updates</a>
                        <a href="#" className="text-gray-700 hover:text-orange-500">Get Involved</a>
                        <a href="#" className="text-gray-700 hover:text-orange-500">Certificate Portal</a>
                    </nav>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-4xl font-extrabold text-gray-900">The <span className="text-orange-500">dynamic world</span> of education</h2>
                        <p className="mt-4 text-gray-600">
                            Seated in a 4-storey building, our EdTech Ecosystem houses 4 EdTech organisations focusing on unique pathways to incorporating technology use for Education.
                        </p>
                        <div className="mt-6 space-x-4">
                            <a href="#" className="px-4 py-2 bg-orange-500 text-white rounded shadow hover:bg-orange-600">Book a Tour</a>
                            <a href="#" className="px-4 py-2 border border-orange-500 text-orange-500 rounded shadow hover:bg-orange-50">Learn More</a>
                        </div>
                    </div>
                    <div>
                        <Image
                            src="/dynamic-education.png"
                            alt="Dynamic education"
                            width={500}
                            height={300}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* EdTech Organizations Section */}
            <section className="bg-black text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-3xl font-bold">Housing Four EdTech Organizations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <div>
                            <Image
                                src="/images/edtech-organization.jpg"
                                alt="EdTech organizations"
                                width={500}
                                height={300}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div>
                            <div className="space-y-4">
                                <details className="bg-white text-black p-4 rounded">
                                    <summary className="cursor-pointer font-semibold">re:learn</summary>
                                    <p className="mt-2 text-gray-600">The education practice of Co-Creation Hub Nigeria focused on using technology to improve STEM education.</p>
                                </details>
                                <details className="bg-white text-black p-4 rounded">
                                    <summary className="cursor-pointer font-semibold">eLimu</summary>
                                </details>
                                <details className="bg-white text-black p-4 rounded">
                                    <summary className="cursor-pointer font-semibold">STEM Café</summary>
                                </details>
                                <details className="bg-white text-black p-4 rounded">
                                    <summary className="cursor-pointer font-semibold">Imisi 3D</summary>
                                </details>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Explore Ecosystem Section */}
            <section className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-3xl font-bold">Explore the re:learn ecosystem</h3>
                    <p className="mt-2 text-gray-600">
                        In addition to these organisations, the EdTech Ecosystem houses a micro-teaching lab, EdTech Product Testbed, and an ultra-modern event space.
                    </p>
                    <form className="mt-8 max-w-lg mx-auto grid grid-cols-1 gap-4">
                        <input type="text" placeholder="Full Name" className="border-gray-300 rounded px-4 py-2" />
                        <input type="email" placeholder="Email" className="border-gray-300 rounded px-4 py-2" />
                        <input type="text" placeholder="Organization" className="border-gray-300 rounded px-4 py-2" />
                        <div className="grid grid-cols-2 gap-4">
                            <input type="date" className="border-gray-300 rounded px-4 py-2" />
                            <input type="time" className="border-gray-300 rounded px-4 py-2" />
                        </div>
                        <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded shadow hover:bg-orange-600">Submit</button>
                    </form>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h4 className="font-semibold">Contact</h4>
                        <p className="mt-2">info@relearn.ng</p>
                        <p>+2347064020742</p>
                        <p>8, Montgomery road, Yaba, Lagos</p>
                        <p>JahaZ Building, 154 James Gichuru Road, Nairobi, Kenya</p>
                    </div>
                    <div>
                        <h4 className="font-semibold">Quick Links</h4>
                        <ul className="mt-2 space-y-1">
                            <li><a href="#" className="hover:underline">About re:learn</a></li>
                            <li><a href="#" className="hover:underline">Projects</a></li>
                            <li><a href="#" className="hover:underline">Our Ecosystem</a></li>
                            <li><a href="#" className="hover:underline">News & Update</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold">Get Involved</h4>
                        <ul className="mt-2 space-y-1">
                            <li><a href="#" className="hover:underline">Teachers&apos; Lounge</a></li>
                            <li><a href="#" className="hover:underline">Viable</a></li>
                            <li><a href="#" className="hover:underline">Digital Literacy Community of Practice</a></li>
                            <li><a href="#" className="hover:underline">Schools EdTech Clinic</a></li>
                            <li><a href="#" className="hover:underline">EdTech Festival</a></li>
                            <li><a href="#" className="hover:underline">Educator Network</a></li>
                            <li><a href="#" className="hover:underline">Become a Partner</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}
