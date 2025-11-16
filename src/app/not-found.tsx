import { Metadata } from 'next';
import Link from 'next/link';
import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  return (
    <main className='min-h-screen bg-[#0e1a40] text-white flex items-center justify-center px-6'>
      <section className='max-w-lg text-center'>
        <div className='inline-flex h-16 w-16 items-center justify-center rounded-full border border-[#946b2d] bg-[#222f5b]/40 mx-auto'>
          <RiAlarmWarningFill
            size={32}
            className='text-[#f5d08b]'
          />
        </div>

        <h1 className='mt-6 text-3xl md:text-5xl font-extrabold tracking-wide'>
          Page Not Found
        </h1>
        <p className='mt-4 text-sm md:text-base text-[#d3d3d3]'>
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>

        <div className='mt-8'>
          <Link
            href='/'
            className='inline-flex items-center rounded-full border border-[#946b2d] px-6 py-2 text-sm font-semibold hover:bg-[#946b2d] hover:text-[#0e1a40] transition-colors'
          >
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
