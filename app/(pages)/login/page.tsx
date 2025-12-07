// app/login/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false,
    });
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev: any) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors((prev: any) => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors: any = {};
        
        // Email validation
        if (!formData.email) {
            newErrors.email = 'ایمیل الزامی است';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'فرمت ایمیل صحیح نیست';
        }
        
        // Password validation
        if (!formData.password) {
            newErrors.password = 'رمز عبور الزامی است';
        } else if (formData.password.length < 6) {
            newErrors.password = 'رمز عبور باید حداقل 6 کاراکتر باشد';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        
        if (!validateForm()) return;
        
        setIsLoading(true);
        
        // Simulate API call
        setTimeout(() => {
            console.log('Login data:', formData);
            setIsLoading(false);
            // router.push('/dashboard');
            alert('ورود موفقیت‌آمیز بود!');
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 flex items-center justify-center p-4">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            {/* Login Container */}
            <div className="relative w-full max-w-md">
                {/* Logo/Brand */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl shadow-lg mb-4">
                        <i className="fas fa-graduation-cap text-white text-3xl"></i>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">خوش آمدید</h1>
                    <p className="text-gray-600">به پنل کاربری کلاس‌یار وارد شوید</p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-3xl shadow-2xl border border-sky-100 p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                ایمیل
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <i className="fas fa-envelope text-gray-400"></i>
                                </div>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className={`block w-full pr-10 pl-4 py-3 border ${
                                        errors.email ? 'border-red-300' : 'border-gray-300'
                                    } rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all`}
                                    placeholder="example@email.com"
                                />
                            </div>
                            {errors.email && (
                                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                    <i className="fas fa-exclamation-circle"></i>
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Password Input */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                رمز عبور
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <i className="fas fa-lock text-gray-400"></i>
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`block w-full pr-10 pl-12 py-3 border ${
                                        errors.password ? 'border-red-300' : 'border-gray-300'
                                    } rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all`}
                                    placeholder="رمز عبور خود را وارد کنید"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 left-0 pl-3 flex items-center"
                                >
                                    <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-gray-400 hover:text-gray-600 transition-colors`}></i>
                                </button>
                            </div>
                            {errors.password && (
                                <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                    <i className="fas fa-exclamation-circle"></i>
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember"
                                    name="remember"
                                    type="checkbox"
                                    checked={formData.remember}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember" className="mr-2 block text-sm text-gray-700">
                                    مرا به خاطر بسپار
                                </label>
                            </div>
                            <Link 
                                href="/forgot-password"
                                className="text-sm text-sky-600 hover:text-sky-700 font-medium transition-colors"
                            >
                                فراموشی رمز عبور؟
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 px-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-sky-500/30 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <i className="fas fa-spinner fa-spin"></i>
                                    در حال ورود...
                                </span>
                            ) : (
                                <span className="flex items-center justify-center gap-2">
                                    <i className="fas fa-sign-in-alt"></i>
                                    ورود به حساب کاربری
                                </span>
                            )}
                        </button>

                        {/* Divider */}
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500">یا ورود با</span>
                            </div>
                        </div>

                        {/* Social Login */}
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all"
                            >
                                <i className="fab fa-google text-red-500"></i>
                                <span className="text-gray-700 font-medium">Google</span>
                            </button>
                            <button
                                type="button"
                                className="flex items-center justify-center gap-2 py-3 px-4 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all"
                            >
                                <i className="fab fa-github text-gray-800"></i>
                                <span className="text-gray-700 font-medium">GitHub</span>
                            </button>
                        </div>
                    </form>

                    {/* Sign Up Link */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            حساب کاربری ندارید؟{' '}
                            <Link 
                                href="/signup"
                                className="text-sky-600 hover:text-sky-700 font-bold transition-colors"
                            >
                                ثبت‌نام کنید
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="mt-8 text-center space-y-2">
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                        <Link href="/terms" className="hover:text-sky-600 transition-colors">
                            قوانین و مقررات
                        </Link>
                        <span>•</span>
                        <Link href="/privacy" className="hover:text-sky-600 transition-colors">
                            حریم خصوصی
                        </Link>
                        <span>•</span>
                        <Link href="/help" className="hover:text-sky-600 transition-colors">
                            راهنما
                        </Link>
                    </div>
                    <p className="text-xs text-gray-500">
                        © 2024 کلاس‌یار. تمامی حقوق محفوظ است.
                    </p>
                </div>
            </div>
        </div>
    );
}