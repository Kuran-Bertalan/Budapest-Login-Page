import Image from 'next/image';

export default function ImageComponent() {
  return (
    <div className="absolute bottom-0 right-0">
      <Image
        src="/images/Background-image.png"
        alt="Background image component"
        className="max-w-full max-h-full w-full lg:w-[30rem]"
        width={800}
        height={1000}
      />
    </div>
  );
}
