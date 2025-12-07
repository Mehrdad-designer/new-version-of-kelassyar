import Link from "next/link";
import classYarlogo1 from './../../../public/logo/classYarlogo1.png'
const TopNav = () => {
    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* لوگو */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-primary-500/50 transition-all duration-300 group-hover:scale-110">
                                {/* <Image
                                    src={classYarlogo1}
                                    alt="لوگو کلاس یار"
                                    width={200}
                                    height={200}
                                /> */}
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold text-primary-700">
                                    کلاس‌یار
                                </span>
                                <span className="text-xs text-gray-500">
                                    مرجع کلاس‌های آموزشی
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* جستجو */}
                    <div className="flex-1 mx-4">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="جستجو کنید..."
                                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            />
                        
                        </div>
                    </div>

                    {/* منوی موبایل */}
                    <div className="md:hidden flex items-center">
                        <button
                            className="text-gray-800 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            aria-label="Open Menu"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default TopNav;