import React from 'react';
import BookConcertAlarm from '~/components/concert/BookConcertAlarm';
import BookConcertBanner from '~/components/concert/BookConcertBanner';
import BookConcertClipReplay from '~/components/concert/BookConcertClipReplay';

const BookConcertPage = () => {
  return (
    <>
      <BookConcertBanner />
      <BookConcertClipReplay />
      <BookConcertAlarm />
    </>
  );
};

export default BookConcertPage;
