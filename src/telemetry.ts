export default async function telemetry(programmingLanguage: string, format: string) {
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
            })
        } catch (e) {}

    } else {
        const https = await import("https");
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
        } catch (e) {}
    }
}