import {FC} from 'react';
import {CareerForm} from './CareerForm';

const Career: FC = () => {
  return (
    <section id="career" className="career-section">
      <div className="padding-x max-width">
        <div className="padding-y grid grid-cols-3">
          <h2 className="header-2 col-span-3  md:col-span-2 mb-6">
            Choose <span className="font-medium">us</span>
          </h2>
          <p className="col-span-2 col-start-2 md:col-start-3 md:row-start-1 md:col-span-1">
            Your chance to join our passionate team in Carpathian
            tourism. Seeking talented professionals to share our
            common mission.
          </p>
          <h3 className="my-9 text-3xl font-extralight leading-[normal] uppercase col-span-2 col-start-2 md:col-span-1 md:col-start-1 md:mt-[12px] md: mb-[56px]">
            Why us?
          </h3>
          <ul className="col-span-2 flex flex-col text-right gap-4 md:gap-6 mb-[112px] md:col-span-1 md:col-start-1 md: mr-[20px]">
            <li>
              <h4 className="header-4 mb-[8px]">
                Professional development
              </h4>
              <p className="about-us">
                We offer growth opportunities and a creative
                environment to nurture your talents.
              </p>
            </li>
            <li>
              <h4 className="header-4 mb-[8px]">Teamwork</h4>
              <p className="about-us">
                Join our close-knit family, where support and
                inspiration abound.
              </p>
            </li>
            <li>
              <h4 className="header-4 mb-[8px]">
                Stimulating work environment
              </h4>
              <p className="about-us">
                Flexibility and remote options for a comfortable
                experience.
              </p>
            </li>
            <li>
              <h4 className="header-4 mb-[8px]">
                Exciting challenges
              </h4>
              <p className="about-us">
                Unleash your potential through unforgettable projects
                showcasing Carpathian beauty.
              </p>
            </li>
          </ul>

          <p className="col-span-2 col-start-2 md:col-span-1 md:mr-[20px]">
            Don't miss your opportunity! Fill out the form right now
            and join our team!
          </p>

          <CareerForm />
        </div>
      </div>
    </section>
  );
};

export default Career;
