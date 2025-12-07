// components/home/FAQSection.tsx
'use client';

import { useState } from 'react';

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState < number | null > (0);

    const faqs = [
        {
            question: 'کلاس‌یار چیست و چه خدماتی ارائه می‌دهد؟',
            answer: 'کلاس‌یار یک پلتفرم جامع برای جستجو، مقایسه و ثبت نام در کلاس‌ها و آموزشگاه‌های مختلف است. شما می‌توانید از میان هزاران کلاس آموزشی در دسته‌بندی‌های مختلف، بهترین گزینه را انتخاب کنید.'
        },
        {
            question: 'آیا استفاده از کلاس‌یار رایگان است؟',
            answer: 'بله، استفاده از پلتفرم کلاس‌یار برای جستجو، مشاهده اطلاعات و مقایسه کلاس‌ها کاملاً رایگان است. تنها در صورت ثبت نام در کلاس‌ها، هزینه آموزشی مربوطه پرداخت می‌شود.'
        },
        {
            question: 'چگونه می‌توانم کلاس مورد نظرم را پیدا کنم؟',
            answer: 'می‌توانید از بخش جستجو با استفاده از فیلترهای مختلف مانند دسته‌بندی، موقعیت مکانی، قیمت، زمان برگزاری و... کلاس مورد نظر خود را پیدا کنید. همچنین می‌توانید از دسته‌بندی‌ها استفاده کنید.'
        },
        {
            question: 'آیا امکان ثبت نام آنلاین وجود دارد؟',
            answer: 'بله، بسیاری از آموزشگاه‌ها امکان ثبت نام و پرداخت آنلاین را فراهم کرده‌اند. شما می‌توانید بدون نیاز به مراجعه حضوری، در کلاس مورد نظر ثبت نام کنید.'
        },
        {
            question: 'نظرات و امتیازات چقدر قابل اعتماد هستند؟',
            answer: 'تمام نظرات توسط کاربران واقعی که در کلاس‌ها شرکت کرده‌اند ثبت می‌شود و توسط تیم کلاس‌یار بررسی و تأیید می‌گردد تا از صحت آن‌ها اطمینان حاصل شود.'
        },
        {
            question: 'اگر مشکلی در فرآیند ثبت نام داشتم چه کنم؟',
            answer: 'تیم پشتیبانی کلاس‌یار آماده است تا در هر مرحله از فرآیند ثبت نام به شما کمک کند. می‌توانید از طریق تلفن، ایمیل یا چت آنلاین با ما در ارتباط باشید.'
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        سوالات متداول
                    </h2>
                    <p className="text-gray-600 text-lg">
                        پاسخ سوالات رایج درباره کلاس‌یار
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-5 text-right hover:bg-gray-50 transition-colors"
                            >
                                <span className="font-bold text-gray-800 text-lg flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm flex-shrink-0">
                                        {index + 1}
                                    </span>
                                    {faq.question}
                                </span>
                                <i className={`fas fa-chevron-down text-gray-400 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}></i>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                                <div className="p-5 pt-0 pr-16 text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Support */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-4">
                        سوال دیگری دارید؟
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                    >
                        <i className="fas fa-headset"></i>
                        تماس با پشتیبانی
                    </a>
                </div>
            </div>
        </section>
    );
}