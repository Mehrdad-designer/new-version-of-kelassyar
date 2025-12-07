// components/institutes/InstitutesGrid.tsx
import InstituteCard from "./InstituteCard";
import EmptyState from "./EmptyState";

interface Institute {
  id: number;
  name: string;
  slug: string;
  image: string;
  logo: string;
  coverColor: string;
  description: string;
  address: string;
  city: string;
  phone: string;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  classesCount: number;
  coursesCount: number;
  viewsCount: number;
  isVerified: boolean;
  isOpen: boolean;
  hasOnlineClasses: boolean;
  establishedYear: number;
  categories: string[];
  features: string[];
  workingHours: string;
  priceRange: { min: number; max: number };
}

interface InstitutesGridProps {
  institutes: Institute[];
}

export default function InstitutesGrid({ institutes }: InstitutesGridProps) {
  if (institutes.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {institutes.map((institute) => (
        <InstituteCard key={institute.id} data={institute} />
      ))}
    </div>
  );
}
