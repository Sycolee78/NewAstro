import { Resvg } from "@resvg/resvg-js";
import siteOgImage from "./og-templates/site";

function svgBufferToPngBuffer(svg: string) {
  const resvg = new Resvg(svg);
  return resvg.render().asPng();
}

export async function generateOgImageForSite() {
  return svgBufferToPngBuffer(await siteOgImage());
}
