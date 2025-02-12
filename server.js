const express = require("express");
const cors = require("cors");

const blogs = require("./data/blogs");
const items = require("./data/items");
const priceRangesData = require("./utils/price-ranges");
const app = express();
app.use(cors());

app.use("/img", express.static("public/img"));

app.get("/", (req, res) => {
  res.send("<h1>Works</h1>");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/blogs", (req, res) => {
  if (!blogs) {
    return res.status(404).json({
      success: false,
      error: "No items found",
    });
  }
  res.json({
    success: true,
    data: blogs,
  });
});

app.get("/featured", (req, res) => {
  const start = parseInt(req.query.start) || 0;
  const end = parseInt(req.query.end) || items.length;

  if (!items) {
    return res.status(404).json({
      success: false,
      error: "No items found",
    });
  }
  const featuredItems = items
    .filter((item) => item.tags.includes("featured"))
    .slice(start, end);
  res.json({
    success: true,
    data: featuredItems,
  });
});

app.get("/latest", (req, res) => {
  const option = req.query.option;

  if (!option) {
    return res.status(400).json({
      success: false,
      error: "Provide an option",
    });
  }

  if (!items) {
    return res.status(404).json({
      success: false,
      error: "No items found",
    });
  }

  const latestItems = items
    .filter((item) => item.tags.includes(option))
    .slice(0, 6);
  res.json({
    success: true,
    data: latestItems,
  });
});

app.get("/trending", (req, res) => {
  if (!items) {
    return res.status(404).json({
      success: false,
      error: "No items found",
    });
  }

  const latestItems = items
    .filter((item) => item.tags.includes("trending"))
    .slice(0, 4);
  res.json({
    success: true,
    data: latestItems,
  });
});

app.get("/filtered", (req, res) => {
  const { options } = req.query;
  const OptionObj = JSON.parse(options);

  const { stars, categories, brands, prices, perPage, page, sortBy } =
    OptionObj;

  if (!items) {
    return res.status(404).json({
      success: false,
      error: "No items found",
    });
  }

  if (perPage <= 0 || page <= 0) {
    return res.status(400).json({
      success: false,
      error: "Provide a valid options",
    });
  }

  const priceRanges = priceRangesData;

  const getPriceRange = (selectedPrice) => {
    const match = priceRanges.find((range) => range.label === selectedPrice);
    return match ? match.range : [0, Infinity];
  };

  const pricesArr = prices?.length ? getPriceRange(prices[0]) : [0, Infinity];

  let filteredItems = items;
  if (stars)
    filteredItems = filteredItems
      .filter((item) => item.stars >= Number(stars[0]))
      .sort((a, b) => b.stars - a.stars);

  if (categories)
    filteredItems = filteredItems.filter((item) =>
      categories.some((category) => item.category === category)
    );

  if (brands)
    filteredItems = filteredItems.filter((item) =>
      brands.some((brand) => item.brand === brand)
    );

  if (prices)
    filteredItems = filteredItems.filter(
      (item) => item.price >= pricesArr[0] && item.price <= pricesArr[1]
    );

  filteredItems = filteredItems.slice((page - 1) * perPage, page * perPage);

  if (sortBy === "price-low-to-high")
    filteredItems = filteredItems.sort((a, b) => a.price - b.price);

  if (sortBy === "price-high-to-low")
    filteredItems = filteredItems.sort((a, b) => b.price - a.price);

  res.json({
    success: true,
    data: filteredItems,
  });
});

app.get("/pages", (req, res) => {
  const { perPage } = req.query;
  const perPageNum = Number(perPage);

  if (isNaN(perPageNum) || perPageNum <= 0) {
    return res.status(400).json({
      success: false,
      error: "perPage must be a positive number.",
    });
  }

  const pages = Math.ceil(items.length / perPageNum);
  res.json({
    success: true,
    data: pages,
  });
});

app.get("/item/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (!items) {
    return res.status(404).json({
      success: false,
      error: "No items found",
    });
  }

  if (isNaN(id)) {
    return res.status(400).json({
      success: false,
      error: "Provide a valid id",
    });
  }

  const item = items.find((item) => item.id === id);
  if (!item) {
    return res.status(404).json({
      success: false,
      error: "No item found",
    });
  }
  res.json({
    success: true,
    data: item,
  });
});

app.get("/items", (req, res) => {
  const start = parseInt(req.query.start) || 0;
  const end = parseInt(req.query.end) || items.length;

  if (!items) {
    return res.status(404).json({
      success: false,
      error: "No items found",
    });
  }

  const sortedItems = items.slice(start, end);

  res.json({
    success: true,
    data: sortedItems,
  });
});
