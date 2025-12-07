// components/classes/PageTitle.tsx
export default function PageTitle() {
  return (
    <section className="bg-gradient-to-br from-blue-500 to-blue-700 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-black text-white mb-4">
            کلاس‌ها
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            از میان صدها کلاس آموزشی، کلاس مناسب خود را پیدا کنید
          </p>
        </div>
      </div>
    </section>
  );
}
