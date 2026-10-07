import Image from "next/image";

export default function Gallery({ images, name }: { images: string[]; name: string }) {
  const [main, ...rest] = images;
  return (
    <div className="grid h-[280px] gap-2 overflow-hidden rounded-3xl sm:h-[440px] sm:grid-cols-4 sm:grid-rows-2">
      <div className="relative sm:col-span-2 sm:row-span-2">
        <Image src={main} alt={name} fill priority sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
      </div>
      {rest.slice(0, 4).map((src, i) => (
        <div
          key={src}
          className={`relative hidden sm:block ${rest.length === 3 && i === 2 ? "sm:col-span-2" : ""} ${rest.length < 3 && i === rest.length - 1 ? "sm:col-span-2 sm:row-span-2" : ""}`}
        >
          <Image src={src} alt={`${name} photo ${i + 2}`} fill sizes="25vw" className="object-cover transition duration-500 hover:scale-105" />
        </div>
      ))}
    </div>
  );
}
