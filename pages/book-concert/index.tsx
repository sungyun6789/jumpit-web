import React from 'react';
import BookConcertAlarm from '~/components/concert/BookConcertAlarm';
import BookConcertBanner from '~/components/concert/BookConcertBanner';

const BookConcertPage = () => {
  return (
    <>
      <BookConcertBanner />
      <BookConcertAlarm />
    </>
  );
};

export default BookConcertPage;
