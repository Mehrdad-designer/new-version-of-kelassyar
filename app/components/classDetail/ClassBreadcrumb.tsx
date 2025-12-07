// components/class-detail/ClassBreadcrumb.tsx
import Link from 'next/link';

export default function ClassBreadcrumb({ items }: any) {
    return (
        <nav className="flex items-center gap-2 text-sm">
            {items.map((item: any, index: number) => (
                <div key={index} className="flex items-center gap-2">
                    {item.current ? (
                        <span className="text-gray-600 line-clamp-1">{item.label}</span>
                    ) : (
                        <>
                            <Link 
                                href={item.href || '#'}
                                className="text-sky-600 hover:text-sky-700 transition-colors flex items-center gap-1"
                            >
                                {index === 0 && <i className="fas fa-home text-xs"></i>}
                                <span>{item.label}</span>
                            </Link>
                            <i className="fas fa-chevron-left text-gray-400 text-xs"></i>
                        </>
                    )}
                </div>
            ))}
        </nav>
    );
}