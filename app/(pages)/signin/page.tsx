// app/signup/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SignUpPage() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        terms: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        terms: '',
    });

    const handleChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
        
        // Clear error when user starts typing
        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {
            fullName: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: '',
            terms: '',
        };

        // Full Name validation
        if (!formData.fullName) {
            newErrors.fullName = 'نام و نام خانوادگی الزامی است';
        } else if (formData.fullName.length < 3) {
            newErrors.fullName = 'نام باید حداقل 3 کاراکتر باشد';
        }

        // Email validation
        if (!formData.email) {
            newErrors.email = 'ایمیل الزامی است';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'ایمیل معتبر نیست';
        }

        // Phone validation
        if (!formData.phone) {
            newErrors.phone = 'شماره موبایل الزامی است';
        } else if (!/^09\d{9}$/.test(formData.phone)) {
            newErrors.phone = 'شماره موبایل معتبر نیست';
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'رمز عبور الزامی است';
        } else if (formData.password.length < 8) {
            newErrors.password = 'رمز عبور باید حداقل 8 کاراکتر باشد';
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
            newErrors.password = 'رمز عبور باید شامل حروف بزرگ، کوچک و عدد باشد';
        }

        // Confirm Password validation
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'تکرار رمز عبور الزامی است';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'رمز عبور و تکرار آن یکسان نیست';
        }

        // Terms validation
        if (!formData.terms) {
            newErrors.terms = 'پذیرش قوانین الزامی است';
        }

        setErrors(newErrors);
        return Object.values(newErrors).every((error) => !error);
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        
        // Simulate API call
        setTimeout(() => {
            console.log('Sign up data:', formData);
            setIsLoading(false);
            // اینجا باید با API ارتباط برقرار شود
        }, 2000);
    };

    const handleGoogleSignUp = () => {
        console.log('Google sign up clicked');
        // اینجا باید لاجیک ثبت‌نام با گوگل پیاده‌سازی شود
    };

    const getPasswordStrength = () => {
        const password = formData.password;
        if (!password) return { strength: 0, label: '', color: '' };
        
        let strength = 0;
        if (password.length >= 8) strength++;
        if (/[a-z]/.test(password)) strength++;
        if (/[A-Z]/.test(password)) strength++;
        if (/\d/.test(password)) strength++;
        if (/[^a-zA-Z\d]/.test(password)) strength++;

        if (strength <= 2) return { strength: 33, label: 'ضعیف', color: 'bg-red-500' };
        if (strength <= 3) return { strength: 66, label: 'متوسط', color: 'bg-yellow-500' };
        return { strength: 100, label: 'قوی', color: 'bg-green-500' };
    };

    const passwordStrength = getPasswordStrength();

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50 flex items-center justify-center p-4 py-12">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
                <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            {/* Sign Up Card */}
            <div className="relative w-full max-w-md">
                {/* Logo/Brand */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl shadow-lg mb-4">
                        <i className="fas fa-graduation-cap text-white text-3xl"></i>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">کلاس‌یار</h1>
                    <p className="text-gray-600">حساب کاربری جدید ایجاد کنید</p>
                </div>

                {/* Sign Up Form Card */}
                <div className="bg-white rounded-3xl shadow-2xl border border-sky-100 p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">ثبت‌نام</h2>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Full Name Input */}
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                                نام و نام خانوادگی
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <i className="fas fa-user text-gray-400"></i>
                                </div>
                                <input
                                    type="text"
                                    id="fullName"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="علی احمدی"
                                    className={`w-full pr-10 pl-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                                        errors.fullName
                                            ? 'border-red-300 focus:ring-red-500'
                                            : 'border-gray-300 focus:ring-sky-500'
                                    }`}
                                />
                            </div>
                            {errors.fullName && (
                                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                    <i className="fas fa-exclamation-circle"></i>
                                    {errors.fullName}
                                </p>
                            )}
                        </div>

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
                                    placeholder="example@email.com"
                                    className={`w-full pr-10 pl-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                                        errors.email
                                            ? 'border-red-300 focus:ring-red-500'
                                            : 'border-gray-300 focus:ring-sky-500'
                                    }`}
                                />
                            </div>
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                    <i className="fas fa-exclamation-circle"></i>
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Phone Input */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                شماره موبایل
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <i className="fas fa-mobile-alt text-gray-400"></i>
                                </div>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="09123456789"
                                    className={`w-full pr-10 pl-4 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                                        errors.phone
                                            ? 'border-red-300 focus:ring-red-500'
                                            : 'border-gray-300 focus:ring-sky-500'
                                    }`}
                                />
                            </div>
                            {errors.phone && (
                                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                    <i className="fas fa-exclamation-circle"></i>
                                    {errors.phone}
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
                                    placeholder="••••••••"
                                    className={`w-full pr-10 pl-12 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                                        errors.password
                                            ? 'border-red-300 focus:ring-red-500'
                                            : 'border-gray-300 focus:ring-sky-500'
                                    }`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 left-0 pl-3 flex items-center"
                                >
                                    <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-gray-400 hover:text-gray-600`}></i>
                                </button>
                            </div>
                            
                            {/* Password Strength Indicator */}
                            {formData.password && (
                                <div className="mt-2">
                                    <div className="flex items-center justify-between mb-1">
                                        <span className="text-xs text-gray-600">قدرت رمز عبور:</span>
                                        <span className={`text-xs font-medium ${
                                            passwordStrength.strength === 33 ? 'text-red-600' :
                                            passwordStrength.strength === 66 ? 'text-yellow-600' :
                                            'text-green-600'
                                        }`}>
                                            {passwordStrength.label}
                                        </span>
                                    </div>
                                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div 
                                            className={`h-full ${passwordStrength.color} transition-all duration-300`}
                                            style={{ width: `${passwordStrength.strength}%` }}
                                        ></div>
                                    </div>
                                </div>
                            )}
                            
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                    <i className="fas fa-exclamation-circle"></i>
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        {/* Confirm Password Input */}
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                                تکرار رمز عبور
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <i className="fas fa-lock text-gray-400"></i>
                                </div>
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className={`w-full pr-10 pl-12 py-3 border rounded-xl focus:outline-none focus:ring-2 transition-all ${
                                        errors.confirmPassword
                                            ? 'border-red-300 focus:ring-red-500'
                                            : 'border-gray-300 focus:ring-sky-500'
                                    }`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 left-0 pl-3 flex items-center"
                                >
                                    <i className={`fas ${showConfirmPassword ? 'fa-eye-slash' : 'fa-eye'} text-gray-400 hover:text-gray-600`}></i>
                                </button>
                            </div>
                            {errors.confirmPassword && (
                                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                    <i className="fas fa-exclamation-circle"></i>
                                    {errors.confirmPassword}
                                </p>
                            )}
                        </div>

                        {/* Terms & Conditions */}
                        <div>
                            <label className="flex items-start gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="terms"
                                    checked={formData.terms}
                                    onChange={handleChange}
                                    className={`mt-1 w-4 h-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500 ${
                                        errors.terms ? 'border-red-300' : ''
                                    }`}
                                />
                                <span className="text-sm text-gray-700">
                                    <Link href="/terms" className="text-sky-600 hover:text-sky-700 font-medium">
                                        قوانین و مقررات
                                    </Link>
                                    {' '}و{' '}
                                    <Link href="/privacy" className="text-sky-600 hover:text-sky-700 font-medium">
                                        حریم خصوصی
                                    </Link>
                                    {' '}را مطالعه کرده و می‌پذیرم
                                </span>
                            </label>
                            {errors.terms && (
                                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                    <i className="fas fa-exclamation-circle"></i>
                                    {errors.terms}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-sky-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-6"
                        >
                            {isLoading ? (
                                <>
                                    <i className="fas fa-spinner fa-spin"></i>
                                    در حال ثبت‌نام...
                                </>
                            ) : (
                                <>
                                    <i className="fas fa-user-plus"></i>
                                    ثبت‌نام
                                </>
                            )}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-500">یا ثبت‌نام با</span>
                        </div>
                    </div>

                    {/* Social Sign Up */}
                    <div className="space-y-3">
                        <button
                            type="button"
                            onClick={handleGoogleSignUp}
                            className="w-full py-3 bg-white border-2 border-gray-200 text-gray-700 font-medium rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center gap-3"
                        >
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                            ثبت‌نام با گوگل
                        </button>
                    </div>

                    {/* Login Link */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            قبلاً ثبت‌نام کرده‌اید؟{' '}
                            <Link 
                                href="/login"
                                className="text-sky-600 hover:text-sky-700 font-bold"
                            >
                                وارد شوید
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Back to Home */}
                <div className="mt-6 text-center">
                    <Link 
                        href="/"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
                    >
                        <i className="fas fa-arrow-right"></i>
                        بازگشت به صفحه اصلی
                    </Link>
                </div>
            </div>
        </div>
    );
}