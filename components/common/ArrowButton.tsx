import type { CustomArrowProps, Settings } from 'react-slick';

export const PrevArrowButton = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => {
  return (
    <svg {...props} width="40" height="40" viewBox="0 0 40 40" fill="#f7f7f7" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2450_17212)">
        <path
          d="M39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20Z"
          stroke="#444444"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.0899 26.8394C22.7645 27.1649 22.2368 27.1649 21.9114 26.8394L15.6614 20.5894C15.336 20.264 15.336 19.7363 15.6614 19.4109L21.9114 13.1609C22.2368 12.8355 22.7645 12.8355 23.0899 13.1609C23.4153 13.4863 23.4153 14.014 23.0899 14.3394L17.4292 20.0002L23.0899 25.6609C23.4153 25.9863 23.4153 26.514 23.0899 26.8394Z"
          fill="#444444"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2450_17212">
          <rect width="40" height="40" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export const NextArrowButton = ({ currentSlide, slideCount, ...props }: CustomArrowProps) => {
  return (
    <svg {...props} width="40" height="40" viewBox="0 0 40 40" fill="#f7f7f7" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_2450_17215)">
        <path
          d="M39.5 20C39.5 30.7696 30.7696 39.5 20 39.5C9.23045 39.5 0.5 30.7696 0.5 20C0.5 9.23045 9.23045 0.5 20 0.5C30.7696 0.5 39.5 9.23045 39.5 20Z"
          stroke="#444444"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.9111 13.1608C17.2365 12.8354 17.7641 12.8354 18.0896 13.1608L24.3396 19.4108C24.665 19.7363 24.665 20.2639 24.3396 20.5893L18.0896 26.8393C17.7641 27.1648 17.2365 27.1648 16.9111 26.8393C16.5856 26.5139 16.5856 25.9863 16.9111 25.6608L22.5718 20.0001L16.9111 14.3393C16.5856 14.0139 16.5856 13.4863 16.9111 13.1608Z"
          fill="#444444"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_2450_17215">
          <rect width="40" height="40" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};
