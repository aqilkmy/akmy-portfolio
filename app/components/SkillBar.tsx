'use client'
import React from 'react';

interface SkillBarProps {
  label: string;
  percent: number; // 0–100
}

export default function SkillBar({ label, percent }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm text-neutral-200 font-medium">{label}</span>
        <span className="text-sm text-gray-500 font-medium">{percent}%</span>
      </div>
      <div className="w-full bg-neutral-500 rounded-full h-2">
        <div
          className="bg-neutral-200 h-2 rounded-full transition-all duration-700"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
