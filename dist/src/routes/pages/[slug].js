import { getSanityClient } from "../../lib/cms/sanityClient.js";
export default async function handler(req, res) {
    const { slug } = req.params;
    try {
        const client = getSanityClient();
        const page = await client.fetch('*[_type == "page" && slug.current == ][0]', { slug });
        if (!page)
            return res.status(404).json({ error: "Page not found" });
        res.json(page);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
}
