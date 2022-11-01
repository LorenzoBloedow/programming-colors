import getProgrammingLangColor from "../dist/index.js";

it("Will return the programming language's color (according to GitHub) in the chosen CSS format.", () => {
    // HEX
    expect(getProgrammingLangColor("1C Enterprise", "HEX")).toBe("#814CCC");

    // RGB
    expect(getProgrammingLangColor("1C Enterprise", "RGB")).toBe("rgb(129, 76, 204)");

    // HSL
    expect(getProgrammingLangColor("1C Enterprise", "HSL")).toBe("hsl(265, 56%, 55%)");

    // HEX
    expect(getProgrammingLangColor("Odin", "HEX")).toBe("#60AFFE");

    // RGB
    expect(getProgrammingLangColor("Odin", "RGB")).toBe("rgb(96, 175, 254)");

    // HSL
    expect(getProgrammingLangColor("Odin", "HSL")).toBe("hsl(210, 99%, 69%)");
});