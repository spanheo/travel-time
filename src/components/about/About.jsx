import { useEffect } from "react";

import ImgFour from "../../assets/images/personal-gallery/imgFour.jpeg";
import ImgTwo from "../../assets/images/personal-gallery/imgTwo.jpeg";
import ImgThree from "../../assets/images/personal-gallery/imgThree.jpeg";
import ImgOne from "../../assets/images/personal-gallery/imgOne.jpeg";

const About = () => {
  useEffect(() => {
    document.title = "About | Travel with Harsha";
  });

  return (
    <article className="flex flex-col min-h-screen sm:col-span-5 md:col-span-4 items-center">
      <h2 className="text-4xl text-center uppercase text-black mt-6">About</h2>
      <section className="flex flex-col items-center mt-10 text-2xl gap-5 text-slate-600 p-2">
        <p className="text-base sm:text-lg">
          My name is Harsha Konda, and I come from historical city of Hyderabad,
          India. Programming is my passion, as a self taught programmer I love
          the challenge of creating things from scratch and playing with them
          until I am satisfied with the final product.
        </p>
        <p className="text-base sm:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laborum
          aut velit ducimus. Atque, quas soluta id fugiat quaerat unde nobis.
          Recusandae tenetur ad laudantium labore ipsum reprehenderit vitae
          aliquam.
        </p>
        <p className="text-base sm:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestias
          vel non, fuga accusamus beatae soluta veritatis ad labore molestiae,
          voluptatibus vero ipsam quia neque vitae praesentium in omnis
          repellendus.
        </p>
        <p className="text-base sm:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestias
          vel non, fuga accusamus beatae soluta veritatis ad labore molestiae,
          voluptatibus vero ipsam quia neque vitae praesentium in omnis
          repellendus.
        </p>
        <p className="text-base sm:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestias
          vel non, fuga accusamus beatae soluta veritatis ad labore molestiae,
          voluptatibus vero ipsam quia neque vitae praesentium in omnis
          repellendus.
        </p>
        <p className="text-base sm:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A molestias
          vel non, fuga accusamus beatae soluta veritatis ad labore molestiae,
          voluptatibus vero ipsam quia neque vitae praesentium in omnis
          repellendus.
        </p>
      </section>
      <section className="grid grid-cols-2 sm:flex-row gap-1 p-2">
        <section>
          <img
            className="w-full sm:h-96 md:h-64 block object-cover object-center cursor-pointer smooth-transition hover:opacity-80 smooth-transition"
            src={ImgOne}
            alt="Melbourne"
          />
          <p className="font-bold">Eureka Skydeck Melbourne</p>
        </section>
        <section>
          <img
            className="w-full sm:h-96 md:h-64 block object-cover object-center cursor-pointer smooth-transition hover:opacity-80 smooth-transition"
            src={ImgTwo}
            alt="Karnataka"
          />
          <p className="font-bold">Hoysala Temple Carvings</p>
        </section>
        <section>
          <img
            className="w-full sm:h-96 md:h-64 block object-cover object-center cursor-pointer smooth-transition hover:opacity-80 smooth-transition"
            src={ImgThree}
            alt="Mahabalipuram"
          />
          <p className="font-bold">Seashore in Tamilnadu</p>
        </section>
        <section>
          <img
            className="w-full sm:h-96 md:h-64 block object-cover object-center cursor-pointer smooth-transition hover:opacity-80 smooth-transition"
            src={ImgFour}
            alt="Mysore"
          />
          <p className="font-bold">Chamundi Hills near Mysore</p>
        </section>
      </section>
    </article>
  );
};

export default About;
