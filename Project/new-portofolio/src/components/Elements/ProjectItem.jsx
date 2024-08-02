import PropTypes from 'prop-types';

const ProjectItem = ({ title, description, image, link }) => {
  return (
    <div className=''>
      <img
        src={image}
        alt={title}
        className='w-screen md:w-full h-screen object-cover'
      />
      <div className='absolute w-full h-1/3 bottom-0 opacity-75 bg-slate-950'/>
      <div className='absolute w-full h-1/3 bottom-0 text-secondary px-12 py-4 flex flex-col gap-2'>
        <h1 className='text-2xl'>{title}</h1>
        <p>{description}</p>
        <a href={link} className='underline' target='_blank'>Visit Site</a>
      </div>
    </div>
  );
};

ProjectItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectItem;
