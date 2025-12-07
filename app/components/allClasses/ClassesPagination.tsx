// components/classes/ClassesPagination.tsx
'use client';

interface ClassesPaginationProps {
    currentPage: number;
    totalPages: number;
    totalItems: number;
}

export default function ClassesPagination({ currentPage, totalPages, totalItems }: ClassesPaginationProps) {
    const renderPageNumbers = () => {
        const pages = [];
        const showEllipsisStart = currentPage > 3;
        const showEllipsisEnd = currentPage < totalPages - 2;

        // First page
        pages.push(
            <button 
                key={1}
                className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all ${
                    currentPage === 1
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/30'
                        : 'border border-gray-200 text-gray-600 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200'
                }`}
            >
                ۱
            </button>
        );

        // Ellipsis start
        if (showEllipsisStart) {
            pages.push(
                <span key="ellipsis-start" className="text-gray-400 px-2">...</span>
            );
        }

        // Middle pages
        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);

        for (let i = start; i <= end; i++) {
            pages.push(
                <button 
                    key={i}
                    className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all ${
                        currentPage === i
                            ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/30'
                            : 'border border-gray-200 text-gray-600 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200'
                    }`}
                >
                    {i.toLocaleString('fa-IR')}
                </button>
            );
        }

        // Ellipsis end
        if (showEllipsisEnd) {
            pages.push(
                <span key="ellipsis-end" className="text-gray-400 px-2">...</span>
            );
        }

        // Last page
        if (totalPages > 1) {
            pages.push(
                <button 
                    key={totalPages}
                    className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold transition-all ${
                        currentPage === totalPages
                            ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg shadow-purple-500/30'
                            : 'border border-gray-200 text-gray-600 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200'
                    }`}
                >
                    {totalPages.toLocaleString('fa-IR')}
                </button>
            );
        }

        return pages;
    };

    return (
        <div className="mt-12">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6">
                {/* Info */}
                <div className="text-center mb-6">
                    <p className="text-gray-600">
                        نمایش صفحه <span className="font-bold text-gray-800">{currentPage.toLocaleString('fa-IR')}</span> از <span className="font-bold text-gray-800">{totalPages.toLocaleString('fa-IR')}</span>
                        <span className="mx-2">•</span>
                        مجموع <span className="font-bold text-purple-600">{totalItems.toLocaleString('fa-IR')}</span> کلاس
                    </p>
                </div>
                
                {/* Pagination Controls */}
                <div className="flex items-center justify-center gap-2">
                    {/* Previous Button */}
                    <button 
                        disabled={currentPage === 1}
                        className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 text-gray-500 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-500 disabled:hover:border-gray-200"
                    >
                        <i className="fas fa-chevron-right"></i>
                    </button>
                    
                    {/* Page Numbers */}
                    {renderPageNumbers()}
                    
                    {/* Next Button */}
                    <button 
                        disabled={currentPage === totalPages}
                        className="w-10 h-10 flex items-center justify-center rounded-xl border border-gray-200 text-gray-500 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-gray-500 disabled:hover:border-gray-200"
                    >
                        <i className="fas fa-chevron-left"></i>
                    </button>
                </div>
                
                {/* Quick Jump */}
                <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-center gap-3">
                    <span className="text-sm text-gray-600">رفتن به صفحه:</span>
                    <input 
                        type="number"
                        min="1"
                        max={totalPages}
                        placeholder="۱"
                        className="w-20 px-3 py-2 text-center border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                    <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                        برو
                    </button>
                </div>
            </div>
        </div>
    );
}