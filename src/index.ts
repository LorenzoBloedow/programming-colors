import languages from "./languages";
import Languages from "./languagesType";
import { hexToRGB, RGBToString, RGBToHSL } from "./converter";

type ColorFormat = "HEX" | "RGB" | "HSL";

export default function getProgrammingLangColor(programmingLanguage: Languages, format: ColorFormat = "HEX", disableTelemetry: boolean = false) {
    if (!disableTelemetry) {
        try {
            fetch("https://api.lorenzobloedow.com/programming-colors/telemetry/sendUsage", {
                method: "POST",
                body: JSON.stringify({
                    date: Date.now(),
                    version: "1.0.0",
                    programmingLanguage
                })
            })
        } catch (e) {}
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