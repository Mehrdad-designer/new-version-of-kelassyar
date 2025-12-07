// components/classes/LevelFilter.tsx
'use client';

import { useState } from 'react';

interface LevelFilterProps {
    levels: string[];
}

export default function LevelFilter({ levels }: LevelFilterProps) {
    const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

    const levelIcons: Record<string, string> = {
        'مقدماتی': 'fa-seedling',
        'متوسط': 'fa-chart-line',
        'پیشرفته': 'fa-rocket',
        'همه سطوح': 'fa-layer-group',
    };

    const levelColors: Record<string, string> = {
        'مقدماتی': 'text-green-500',
        'متوسط': 'text-blue-500',
        'پیشرفته': 'text-purple-500',
        'همه سطوح': 'text-orange-500',
    };

    return (
        <div>
            <label className="block text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                <i className="fas fa-layer-group text-indigo-500"></i>
                سطح کلاس
            </label>
            <div className="space-y-2">
                {levels.map((level) => (
                    <label 
                        key={level}
                        className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
                    >
                        <input 
                            type="radio"
                            name="level"
                            checked={selectedLevel === level}
                            onChange={() => setSelectedLevel(level)}
                            className="sr-only peer"
                        />
                        <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-purple-500 peer-checked:border-[6px] transition-all"></div>
                        <div className="flex items-center gap-2 flex-1">
                            <i className={`fas ${levelIcons[level]} ${levelColors[level]}`}></i>
                            <span className="text-gray-700 text-sm font-medium">{level}</span>
                        </div>
                    </label>
                ))}
            </div>
        </div>
    );
}