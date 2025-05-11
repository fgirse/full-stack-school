import Image from "next/image";
import { Cloudinary } from "@cloudinary/url-gen";

// Import required actions.

import { byAngle } from "@cloudinary/url-gen/actions/rotate";

// Import the required actions and qualifiers.
import { fill } from "@cloudinary/url-gen/actions/resize";
import { source } from "@cloudinary/url-gen/actions/overlay";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";

// Import required values.
import { text } from "@cloudinary/url-gen/qualifiers/source";
import { Position } from "@cloudinary/url-gen/qualifiers/position";
import { useTranslations } from "next-intl";
import { TextStyle } from "@cloudinary/url-gen/qualifiers/textStyle";
import { autoGravity, compass } from "@cloudinary/url-gen/qualifiers/gravity";
import { TextAlignment } from "@cloudinary/url-gen/qualifiers";
// Create and configure your Cloudinary instance.

export default function HeroImage() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "Carlo2024",
    },
  });7

  const t = useTranslations("Hero");

  // Use the image with public ID, 'sample'.
  const myImage = cld.image(
    "/Strategic-Planning-for-Mid-Sized-Healthcare-Organizations-Turning-Vision-into-Daily-Impact-1400x788_zq6ftu_Banner_916_2_fjfvew",
  );

  // Transform the image.
  myImage
    .resize(fill(3040,4900))
    .roundCorners(byRadius(0))

    .overlay(
      source(
        text(t("präTitle"), new TextStyle("bowlby one sc", 96)).textColor(
          "orange",
        ),
      ).position(
        new Position().gravity(compass("west")).offsetY(90).offsetX(110),
      ),
    )

    .overlay(
      source(
        text("digitale", new TextStyle("bowlby one sc", 320)).textColor(
          "white",
        ),
      ).position(
        new Position().gravity(compass("west")).offsetY(268).offsetX(110),
      ),
    )

    .overlay(
      source(
        text("online", new TextStyle("bowlby one sc", 320)).textColor("white"),
      ).position(
        new Position().gravity(compass("west")).offsetY(520).offsetX(110),
      ),
    )

    .overlay(
      source(
        text("school", new TextStyle("bowlby one sc", 320)).textColor("white"),
      ).position(
        new Position().gravity(compass("west")).offsetY(770).offsetX(110),
      ),
    )

    .overlay(
      source(
        text(
          t("postTitle"),
          new TextStyle("raleway", 36)
            .textAlignment("justify")
            .fontWeight("black"),
        ) // Apply 'bold' using .fontWeight()
          .textColor("white"),
      ).position(
        new Position().gravity(compass("north_west")).offsetY(690).offsetX(119),
      ),
    )

    .rotate(byAngle(0))
    .format("png");

  // Return the delivery URL
  const myUrl = myImage.toURL();
  return (
    <div className="flex flex-col items-center">
      <Image
        src={myUrl}
        width={580}
        height={2200}
        alt="Transformed Image"
        className="text-white text-left"
      />
    </div>
  );
}
