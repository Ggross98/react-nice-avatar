import React from "react";

import Normal from "./normal";
import Thick from "./thick";
import Mohawk from "./mohawk";
import WomanLong from "./womanLong";
import WomanShort from "./womanShort";
import Bald from "./bald";

export default function hair(props: { style: string, color: string, colorRandom: boolean }): SVGElement {
  const { style, color, colorRandom } = props;
  switch (style) {
    case "thick": return <Thick color={color} colorRandom={colorRandom} />;
    case "mohawk": return <Mohawk color={color} colorRandom={colorRandom} />;
    case "womanLong": return <WomanLong color={color} />;
    case "womanShort": return <WomanShort color={color} />;
    case "bald": return <Bald color={color} />;
    default:
      return <Normal color={color} />;
  }
}
