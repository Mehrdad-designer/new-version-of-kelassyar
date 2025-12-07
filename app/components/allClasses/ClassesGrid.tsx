// components/classes/ClassesGrid.tsx
import ClassCard from "./ClassCard";
import ClassesEmptyState from "./ClassesEmptyState";

interface ClassData {
  id: number;
  title: string;
  slug: string;
  image: string;
  institute: {
    id: number;
    name: string;
    slug: string;
    logo: string;
    isVerified: boolean;
  };
  instructor: {
    name: string;
    avatar: string;
    rating: number;
  };
  category: string;
  subcategory: string;
  level: string;
  price: number;
  discount: number;
  duration: string;
  sessionsCount: number;
  startDate: string;
  schedule: {
    days: string[];
    time: string;
  };
  capacity: number;
  enrolled: number;
  rating: number;
  reviewsCount: number;
  viewsCount: number;
  isOnline: boolean;
  hasVideo: boolean;
  hasCertificate: boolean;
  description: string;
  features: string[];
}

interface ClassesGridProps {
  classes: ClassData[];
}

export default function ClassesGrid({ classes }: ClassesGridProps) {
  if (classes.length === 0) {
    return <ClassesEmptyState />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {classes.map((classItem) => (
        <ClassCard key={classItem.id} data={classItem} />
      ))}
    </div>
  );
}
