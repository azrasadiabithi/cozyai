export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { prompt } = req.body;

    try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`, 
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "google/gemma-3n-e2b-it:free", 
                messages: [{ role: "user", content: prompt }]
            })
        });

        const data = await response.json();
        res.status(200).json({ result: data.choices[0].message.content });
    } catch (error) {
        res.status(500).json({ error: "Failed to connect to OpenRouter" });
    }
}