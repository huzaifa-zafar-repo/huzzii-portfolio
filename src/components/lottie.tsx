'use client';
import { ILottie } from '@/types/types';
import React from 'react';
import LottieAnimation from 'lottie-react';

export default function Lottie({ data, length, width }: ILottie) {
  return (
    <LottieAnimation 
      animationData={data}
      autoPlay={true}
      style={{ height: length, width: width }}
    />
  );
}
