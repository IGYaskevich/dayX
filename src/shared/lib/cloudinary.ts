import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";

export type CloudinaryImageRef = {
  id: string;
  alt: string;
};

type Size = {
  width: number;
  height: number;
};

export const createCloudinary = (cloudName: string) =>
  new Cloudinary({ cloud: { cloudName } });

export const buildCldImages = (
  cld: Cloudinary,
  items: CloudinaryImageRef[],
  size: Size,
) => {
  return items.map((item) => ({
    url: cld
      .image(item.id)
      .format("auto")
      .quality("auto")
      .resize(
        fill().gravity(autoGravity()).width(size.width).height(size.height),
      )
      .toURL(),
    alt: item.alt,
  }));
};

export const buildCldImagesNoCrop = (
  cld: Cloudinary,
  items: CloudinaryImageRef[],
) => {
  return items.map((item) => ({
    url: cld.image(item.id).format("auto").quality("auto").toURL(),
    alt: item.alt,
  }));
};
