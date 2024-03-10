const Images = ({ imagestoShow, toggle, setModalImg }) => {
  return (
    <section className="image-list grid sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3  gap-2 mx-auto overflow-hidden w-full">
      {imagestoShow.map((img, index) => (
        <section className="card-zoom" key={index}>
          <img
            onClick={() => {
              toggle();
              setModalImg(index);
            }}
            src={img.src}
            alt={img.alt}
            className="card-zoom-image"
          />
        </section>
      ))}
    </section>
  );
};

export default Images;
