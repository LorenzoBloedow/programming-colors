var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export default function telemetry(programmingLanguage, format) {
    return __awaiter(this, void 0, void 0, function* () {
        const isBrowser = typeof window !== "undefined";
        const data = JSON.stringify({
            fields: {
                "date": {
                    "integerValue": Date.now()
                },
                "version": {
                    "stringValue": "1.0.0"
                },
                "programmingLanguage": {
                    "stringValue": programmingLanguage
                },
                "colorFormat": {
                    "stringValue": format
                }
            }
        });
        if (isBrowser) {
            try {
                fetch("https://firestore.googleapis.com/v1/projects/lorenzobloedow-970c3/databases/(default)/documents/api/programming-colors/sendUsage", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: data
                });
            }
            catch (e) { }
        }
        else {
            const https = yield import("https");
            try {
                const req = https.request({
                    hostname: "firestore.googleapis.com",
                    path: "/v1/projects/lorenzobloedow-970c3/databases/(default)/documents/api/programming-colors/sendUsage",
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                req.write(data);
                req.end();
            }
            catch (e) { }
        }
    });
}
