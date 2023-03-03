import NextImage from "next/image";
import type { ImageProps } from "next/image";

const Image = ({ src, alt, width, height, style, layout, objectFit }: ImageProps) => (
  <>
    {src && (
      <NextImage
        style={style}
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout={layout || "responsive"}
        objectFit={objectFit}
        loading="lazy"
        // unoptimized
      />
    )}
  </>
);

export default Image;