// components/class-detail/ClassHeader.tsx
export default function ClassHeader({ title, subtitle }: any) {
    return (
        <div className="bg-white rounded-2xl shadow-lg border border-sky-100 p-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-2">
                {title}
            </h1>
            {subtitle && (
                <p className="text-lg text-gray-600">{subtitle}</p>
            )}
        </div>
    );
}