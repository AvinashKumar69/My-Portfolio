import { Image, Stack } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import Dev1 from "../assets/developer2.svg";
import Dev2 from "../assets/developer3.svg";
import Dev3 from "../assets/developer4.svg";
import Dev4 from "../assets/developer5.svg";
import Dev5 from "../assets/developer6.svg";

const images: string[] = [
  Dev1,
  // Dev2,
  // Dev3,
  // Dev4,
  // Dev5
];

const IntroImage = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex: number) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Stack
      width={["100%", "50%"]}
      height={["400px", "600px"]}
      alignItems={"center"}
      justifyContent={"center"}
      // order={[1, 2]}
    >
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={images[currentIndex]}
            fallbackSrc="https://via.placeholder.com/150"
            alt="Developer"
            objectFit={"contain"}
            height="400px"
            width="100%"
          />
        </motion.div>
      </AnimatePresence>
    </Stack>
  );
};

export default IntroImage;
