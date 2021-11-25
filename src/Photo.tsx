type imgType = {
  address: string;
  description: string;
};

const Photo = (src: imgType) => {
  const { address, description } = src;
  return (
    <>
      <img src={address} />
      <article> {description}</article>
    </>
  );
};

export default Photo;
