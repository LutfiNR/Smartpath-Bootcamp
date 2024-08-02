import CustomCarousel from '../Elements/CustomCarousel';
import Headline from '../Elements/Headline';


const projects = [
  {
    title: 'Vecty Landing Page',
    description:
      'A modern and responsive landing page for Vecty, showcasing its features and services with a sleek design.',
    image: '/assets/vecty.png',
    link: 'https://lutfinr.github.io/DicodingProject/Vecty/',
  },
  {
    title: 'Laboratory Booking System',
    description:
      'An efficient system for managing laboratory bookings, allowing users to schedule and track their appointments seamlessly.',
    image: '/assets/labooking.png',
    link: 'https://labooking.vercel.app/',
  },
  {
    title: 'Calories Counter Application',
    description:
      'A handy application to help users keep track of their calorie intake and maintain a balanced diet effortlessly.',
    image: '/assets/calories-track.png',
    link: 'https://calorie-track-group2.vercel.app/',
  },
  {
    title: 'Bookshelf Application',
    description:
      'A virtual bookshelf app to organize and manage your book collection, providing easy access to your favorite reads.',
    image: '/assets/Bookshelf.png',
    link: 'https://lutfinr.github.io/DicodingProject/BookshelfApp/',
  },
  {
    title: 'To Do List Application',
    description:
      'A simple yet powerful to-do list application to help users manage their tasks and stay organized on a daily basis.',
    image: '/assets/todolist.png',
    link: 'https://lutfinr.github.io/DicodingProject/TodoApp/',
  },
  {
    title: "Hill's Collection",
    description:
      "An elegant online store for Hill's Collection, offering a wide range of fashionable items with a seamless shopping experience.",
    image: '/assets/bytesfest-1.png',
    link: '#',
  },
  {
    title: 'FITE Football Academy',
    description:
      'A comprehensive platform for FITE Football Academy, featuring information about training programs, schedules, and events.',
    image: '/src/assets/fite.png',
    link: '#',
  },
];

const Project = () => {
  return (
    <div className='container mx-auto p-4 h-screen md:h-auto text-primary'>
      <Headline
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: 'spring' }}
        className='text-center'>
        My Projects
      </Headline>
      <div className='carousel-container flex justify-center items-center flex-col'>
      <CustomCarousel items={projects} />
      </div>
    </div>
  );
};

export default Project;
