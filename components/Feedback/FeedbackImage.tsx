import Image from "next/image";

interface FeedbackImageProps {
  imageUrl: string;
}

export function FeedbackImage({ imageUrl }: FeedbackImageProps) {
  return (
    <div>
      <Image alt="" src={imageUrl} layout="fill" />
    </div>
  );
}
