export const fadeInLeft = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
    transition: { ease: [0.5, 0.20, 0.50, 1.5] }

};

export const scalein = {
    initial: { opacity: 0, scale: 0 },
    whileInView: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 },
    transition: { ease: [0.5, 0.20, 0.50, 1.5] }

};

export const opacidade = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5, delay: 0.2 }
};