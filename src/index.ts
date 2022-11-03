import languages from "./languages.js";
import Languages from "./languagesType.js";
import { hexToRGB, RGBToString, RGBToHSL } from "./converter.js";
import telemetry from "./telemetry.js";

type ColorFormat = "HEX" | "RGB" | "HSL";

export default function getProgrammingLangColor(programmingLanguage: Languages, format: ColorFormat = "HEX", disableTelemetry: boolean = false) {
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