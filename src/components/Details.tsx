export interface IDetails {
  image: string;
  altText: string;
  description: string;
  breakLine?: string;
}

function Details({ image, altText, description, breakLine }: IDetails) {
  return (
    <article className="mb-8 md:grid md:grid-cols-[3fr_2fr] md:gap-x-15 lg:block z-1">
      <img
        src={image}
        alt={altText}
        className='mb-8'
      />
      <p className='font-apercu-mono text-sm leading-5.5'>
        {description}
        {
          breakLine &&
          <>
            <br />
            {breakLine}
          </>
        }
      </p>
    </article>
  );
}
export default Details;
