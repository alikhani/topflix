import Loader from "../Loader";

export function ImageComponent({ image, status, title }) {
  if (status === "loading") {
    return <Loader dark />;
  }
  if (status === "failed") {
    return (
      <div className="no-poster poster-text">
        <span>{title}</span>
        <style jsx>{`
          .no-poster {
            flex: 1;
            display: flex;
            align-items: center;
            text-align: center;
            justify-content: center;
            font-size: 0.7em;
            height: inherit;
            width: inherit;
            background: #eee;
          }
        `}</style>
      </div>
    );
  }
  return <img className="thumbnail" src={image.src} loading="lazy" />;
}
