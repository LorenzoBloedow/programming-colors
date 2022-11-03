import languages from "./languages.js";
import { hexToRGB, RGBToString, RGBToHSL } from "./converter.js";
import telemetry from "./telemetry.js";
export default function getProgrammingLangColor(programmingLanguage, format = "HEX", disableTelemetry = false) {
    if (!disableTelemetry) {
        telemetry(programmingLanguage, format);
    }
    const language = languages[programmingLanguage];
    if (!language || language.type !== "programming") {
        return null;
    }
    const color = language.color;
    const RGB = hexToRGB(color);
    switch (format) {
        case "HEX":
            return color;
        case "RGB":
            return RGBToString(RGB);
        case "HSL":
            return RGBToHSL(RGB.r, RGB.g, RGB.b);
    }
}
