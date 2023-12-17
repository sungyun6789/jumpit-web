import Head from 'next/head';
import React from 'react';
import BookConcertAlarm from '~/components/concert/BookConcertAlarm';
import BookConcertBanner from '~/components/concert/BookConcertBanner';
import BookConcertClipReplay from '~/components/concert/BookConcertClipReplay';

const BookConcertPage = () => {
  return (
    <>
      <Head>
        <title>점핏 | 개발자 취업 콘서트</title>
      </Head>
      <BookConcertBanner />
      <BookConcertClipReplay />
      <BookConcertAlarm />
    </>
  );
};

export default BookConcertPage;
