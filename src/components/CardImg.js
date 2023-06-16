export default function CardImg({ src, alt }) {
    return (
      <div className="cardImg-container">
        <img
          className="cardImg-content"
          onError={(event) => event.target.style.left = '-15px'}
          src={src}
          alt={alt}
        />
      </div>
    );
  }