import { FC } from "react"


interface SliderDescriptionProps {
    activeIndex: number;
  }

  const SliderDescription: FC<SliderDescriptionProps> = ({ activeIndex }) => {

    return (
      <p>{activeIndex}</p>
    );
  };

export default SliderDescription