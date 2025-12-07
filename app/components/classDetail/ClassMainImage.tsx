// components/class-detail/ClassMainImage.tsx
import Image from 'next/image';

export default function ClassMainImage({ image, title }: any) {
    return (
        <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            {/* <Image 
                src={image}
                alt={title}
                fill
                className="object-cover"
                priority
            /> */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
        </div>
    );
}