import { Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';

import { me } from '@/constant/me';

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-[#0e1a40] text-white flex flex-col'>
      <Navbar />

      <main className='flex-1 flex flex-col md:flex-row items-center md:items-center justify-center gap-10 md:gap-16 px-6 md:px-10 pb-16 pt-10 md:pt-16'>
        <section className='max-w-md text-center md:text-left mb-6 md:mb-0'>
          <div className='inline-flex items-center rounded-full border border-[#946b2d] px-4 md:px-5 py-2 mb-6 bg-transparent'>
            <span className='text-[0.65rem] md:text-xs font-semibold tracking-[0.25em]'>
              ABOUT ME
            </span>
          </div>

          <h2 className='text-3xl md:text-5xl font-bold leading-tight'>
            <span className='block'>Hello,</span>
            <span className='block mt-1'>
              I&apos;m <span className='text-[#946b2d]'>{me.firstName}!</span>
            </span>
          </h2>
        </section>

        <section className='max-w-xl text-sm md:text-base leading-relaxed text-[#f2f2f2] text-center md:text-left'>
          <p className='mb-4'>
            I&apos;m a{' '}
            <span className='font-semibold text-[#946b2d]'>
              Business &amp; Data Analyst
            </span>{' '}
            with 4+ years of experience turning complex data and business needs
            into clear, actionable solutions. I enjoy working with tools like{' '}
            <span className='font-semibold text-[#946b2d]'>Python</span>,{' '}
            <span className='font-semibold text-[#946b2d]'>SQL</span>, and{' '}
            <span className='font-semibold text-[#946b2d]'>BI platforms</span>{' '}
            to explore data, uncover insights, and build dashboards that
            actually help teams make better decisions.
          </p>
          <p className='mb-8'>
            Recently, I&apos;ve been growing into{' '}
            <span className='font-semibold text-[#946b2d]'>
              business process
            </span>{' '}
            and{' '}
            <span className='font-semibold text-[#946b2d]'>
              product development
            </span>
            , getting hands-on with requirement gathering, user flows, and{' '}
            <span className='font-semibold text-[#946b2d]'>Agile</span> ways of
            working. I like being the{' '}
            <span className='font-semibold text-[#946b2d]'>bridge</span> between
            business and tech, helping ideas become real products while
            improving user experience and{' '}
            <span className='font-semibold text-[#946b2d]'>
              driving meaningful results
            </span>
            .
          </p>

          <div className='flex flex-col gap-6 md:gap-4 md:flex-row md:items-center md:justify-between'>
            <div className='flex justify-center md:justify-start gap-4'>
              <a
                href={me.linkedinUrl}
                target='_blank'
                rel='noreferrer'
                className='w-11 h-11 md:w-12 md:h-12 rounded-full border border-white flex items-center justify-center text-sm font-semibold hover:bg-white hover:text-[#0e1a40] transition-colors'
                aria-label='LinkedIn'
              >
                <Linkedin className='w-5 h-5 md:w-6 md:h-6' />
              </a>

              <a
                href={`mailto:${me.email}`}
                className='w-11 h-11 md:w-12 md:h-12 rounded-full border border-white flex items-center justify-center text-sm font-semibold hover:bg-white hover:text-[#0e1a40] transition-colors'
                aria-label='Email'
              >
                <Mail className='w-5 h-5 md:w-6 md:h-6' />
              </a>
            </div>

            <div className='flex flex-col sm:flex-row justify-center md:justify-end gap-3 sm:gap-4'>
              <Link
                href='/projects'
                className='px-7 py-2.5 rounded-full border border-white text-sm font-semibold hover:bg-white hover:text-[#0e1a40] transition-colors text-center'
              >
                Projects
              </Link>
              <Link
                href={me.cvPath}
                target='_blank'
                rel='noopener noreferrer'
                className='px-7 py-2.5 rounded-full border border-[#946b2d] bg-[#946b2d] text-sm font-semibold hover:bg-transparent hover:text-[#946b2d] transition-colors text-center'
              >
                Download CV
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
