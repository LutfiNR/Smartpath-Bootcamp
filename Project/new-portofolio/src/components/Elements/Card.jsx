import {motion } from "framer-motion";
import PropTypes from "prop-types";

const Card = ({srcImg, name, delay}) =>{

    return (
        <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 , delay:delay/5, type: "spring"}}
        className="p-4 outline-dashed w-36 flex flex-col justify-center items-center shadow-primary-lg"
        >
            <img src={srcImg} alt={name} />
            <p>{name}</p>
        </motion.div>
        
      );

}

Card.propTypes = {
    srcImg: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    delay: PropTypes.number.isRequired,
  
}

export default Card;