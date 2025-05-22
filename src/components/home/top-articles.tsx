'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, ClockIcon } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const TopArticles = () => {
  // Demo content inside the component
  const thumbnail = 'https://source.unsplash.com/man-walking/800x600?blog';
  const title = 'Designing with Purpose: UX Principles That Matter';
  const authorName = 'Alice Johnson';
  const authorAvatar = 'https://randomuser.me/api/portraits/women/45.jpg';
  const category = 'Design';
  const date = 'May 22, 2025';
  const readTime = '6 min read';

  return (
    <Card className="overflow-hidden rounded-2xl shadow-lg transition-shadow hover:shadow-2xl max-w-md w-full bg-white dark:bg-zinc-900">
      {/* Thumbnail Image */}
      {/* <div className="relative h-52 w-full">
        <Image
          src={thumbnail}
          alt="Blog thumbnail"
          fill
          className="object-cover"
          priority
        />
      </div> */}

      <CardContent className="p-5 space-y-4">
        {/* Author */}
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={authorAvatar} />
            <AvatarFallback>{authorName[0]}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">{authorName}</span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">{title}</h2>

        {/* Category */}
        <Badge variant="outline" className="text-xs w-fit">
          {category}
        </Badge>

        {/* Meta Info */}
        <div className="flex justify-between text-sm text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-1">
            <CalendarIcon className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <ClockIcon className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopArticles;
