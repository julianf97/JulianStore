import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Server running");
});

router.get("/api/items", async (req, res) => {
    try {
        // Paso 1: Obtener el parámetro  de búsqueda de la consulta
        const query = req.query.q;

        // Paso 2: Realizar una solicitud a la API de MercadoLibre utilizando fetch
        const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;
        const apiResponse = await fetch(apiUrl);
        const data = await apiResponse.json();

        // Paso 3: Formatear la respuesta según las especificaciones del desafío
        const response = {
            author: {
                name: "Julian",
                lastname: "Finelli"
            },
            categories: [], 
            items: data.results.slice(0, 4).map(item => ({
                id: item.id,
                title: item.title,
                price: {
                    currency: item.currency_id,
                    amount: item.price,
                    decimals: 0 
                },
                picture: item.thumbnail,
                condition: item.condition,
                free_shipping: item.shipping.free_shipping,
                category_id: item.category_id,
                available_quantity: item.available_quantity
            }))
        };

        // Paso 4: Enviar la respuesta formateada como JSON
        res.json(response);
    } catch (error) {
        // Manejar errores
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get("/api/items/:itemId", async (req, res) => {
    try {
        // Obtener el ID del producto de los parámetros de la URL
        const itemId = req.params.itemId;

        // Realizar una solicitud a la API de MercadoLibre para obtener detalles del producto específico
        const itemDetailsUrl = `https://api.mercadolibre.com/items/${itemId}`;
        const itemDetailsResponse = await fetch(itemDetailsUrl);
        const itemDetailsData = await itemDetailsResponse.json();

        // Realizar una solicitud a la API de MercadoLibre para obtener la información completa de la búsqueda
        const searchUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${itemDetailsData.title}`;
        const searchResponse = await fetch(searchUrl);
        const searchData = await searchResponse.json();

        // Buscar el producto específico en los resultados de búsqueda
        const matchedItem = searchData.results.find(item => item.id === itemId);

        // Formatear la respuesta según las especificaciones del desafío
        const response = {
            author: {
                name: "Julian",
                lastname: "Finelli"
            },
            item: {
                id: itemDetailsData.id,
                title: itemDetailsData.title,
                price: {
                    currency: itemDetailsData.currency_id,
                    amount: itemDetailsData.price,
                    decimals: 0 
                },
                picture: itemDetailsData.thumbnail,
                img: itemDetailsData.pictures,
                condition: itemDetailsData.condition,
                free_shipping: itemDetailsData.shipping.free_shipping,
                category_id: itemDetailsData.category_id,
                sold_quantity: itemDetailsData.sold_quantity,
                description: itemDetailsData.descriptions,
                available_quantity: matchedItem ? matchedItem.available_quantity : 0
            }
        };

        // Enviar la respuesta formateada como JSON
        res.json(response);
    } catch (error) {
        // Manejar errores
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});





export default router;