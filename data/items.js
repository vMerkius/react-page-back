const URL = "http://localhost:3000";

const items = [
  {
    id: 1,
    name: "Watches",
    img: `${URL}/img/featured-1.png`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",

    descriptionLong:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam. Integer feugiat odio ut dictum viverra. Donec vehicula nisi placerat cursus mollis. Nunc aliquam tempor justo, ut sagittis nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas quam risus, congue quis accumsan at, imperdiet sed lectus. Aliquam in est purus",
    more: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur.",
      },
      {
        id: 2,
        text: "Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante.",
      },
      {
        id: 3,
        text: "Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor.",
      },
      {
        id: 4,
        text: "Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam.",
      },
      {
        id: 5,
        text: "Phasellus quis sodales augue. Integer feugiat odio ut dictum viverra.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "John Doe",
        date: "2025-01-11",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed",
      },
      {
        id: 2,
        author: "John Doe",
        date: "2025-01-11",
        content: "Cras ac quam dolor. In dignissim lectus sed",
      },
    ],
    video: "https://www.youtube.com/embed/l5qootmFQx0",
    stars: 3,
    code: "Y523201",
    price: 42.0,
    discount: 5,
    category: "Watches",
    brand: "Apple",
    tags: ["featured", "new", "trending"],
  },
  {
    id: 2,
    name: "Headphones",
    img: `${URL}/img/featured-2.png`,
    imgs: [
      `${URL}/img/featured-2.png`,
      `${URL}/img/headphones-2.png`,
      `${URL}/img/headphones-3.png`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    descriptionLong:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam. Integer feugiat odio ut dictum viverra. Donec vehicula nisi placerat cursus mollis. Nunc aliquam tempor justo, ut sagittis nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas quam risus, congue quis accumsan at, imperdiet sed lectus. Aliquam in est purus",
    more: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur.",
      },
      {
        id: 2,
        text: "Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante.",
      },
      {
        id: 3,
        text: "Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor.",
      },
      {
        id: 4,
        text: "Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam.",
      },
      {
        id: 5,
        text: "Phasellus quis sodales augue. Integer feugiat odio ut dictum viverra.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "John Doe",
        date: "2025-01-11",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed",
      },
      {
        id: 2,
        author: "John Doe",
        date: "2025-01-11",
        content: "Cras ac quam dolor. In dignissim lectus sed",
      },
    ],
    video: "https://www.youtube.com/embed/l5qootmFQx0",
    stars: 3,
    code: "Y523201",
    price: 90.0,
    discount: 5,
    category: "Headphones",
    brand: "Sony",
    tags: ["featured", "bestseller", "trending"],
  },
  {
    id: 3,
    name: "Laptop",
    img: `${URL}/img/featured-3.png`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    descriptionLong:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam. Integer feugiat odio ut dictum viverra. Donec vehicula nisi placerat cursus mollis. Nunc aliquam tempor justo, ut sagittis nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas quam risus, congue quis accumsan at, imperdiet sed lectus. Aliquam in est purus",
    more: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur.",
      },
      {
        id: 2,
        text: "Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante.",
      },
      {
        id: 3,
        text: "Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor.",
      },
      {
        id: 4,
        text: "Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam.",
      },
      {
        id: 5,
        text: "Phasellus quis sodales augue. Integer feugiat odio ut dictum viverra.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "John Doe",
        date: "2025-01-11",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed",
      },
      {
        id: 2,
        author: "John Doe",
        date: "2025-01-11",
        content: "Cras ac quam dolor. In dignissim lectus sed",
      },
    ],
    video: "https://www.youtube.com/embed/l5qootmFQx0",
    stars: 3,
    code: "Y523201",
    price: 3400.0,
    discount: 5,
    category: "Laptop",
    brand: "Apple",
    tags: ["featured", "trending", "special"],
  },
  {
    id: 4,
    name: "Black watches",
    img: `${URL}/img/featured-4.png`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    descriptionLong:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam. Integer feugiat odio ut dictum viverra. Donec vehicula nisi placerat cursus mollis. Nunc aliquam tempor justo, ut sagittis nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas quam risus, congue quis accumsan at, imperdiet sed lectus. Aliquam in est purus",
    more: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur.",
      },
      {
        id: 2,
        text: "Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante.",
      },
      {
        id: 3,
        text: "Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor.",
      },
      {
        id: 4,
        text: "Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam.",
      },
      {
        id: 5,
        text: "Phasellus quis sodales augue. Integer feugiat odio ut dictum viverra.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "John Doe",
        date: "2025-01-11",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed",
      },
      {
        id: 2,
        author: "John Doe",
        date: "2025-01-11",
        content: "Cras ac quam dolor. In dignissim lectus sed",
      },
    ],
    video: "https://www.youtube.com/embed/l5qootmFQx0",
    stars: 3,
    code: "Y523201",
    price: 35.0,
    discount: 5,
    category: "Watches",
    tags: ["featured", "bestseller", "trending", "special"],
  },
  {
    id: 5,
    name: "Game console",
    img: `${URL}/img/latest-1.png`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    descriptionLong:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam. Integer feugiat odio ut dictum viverra. Donec vehicula nisi placerat cursus mollis. Nunc aliquam tempor justo, ut sagittis nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas quam risus, congue quis accumsan at, imperdiet sed lectus. Aliquam in est purus",
    more: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur.",
      },
      {
        id: 2,
        text: "Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante.",
      },
      {
        id: 3,
        text: "Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor.",
      },
      {
        id: 4,
        text: "Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam.",
      },
      {
        id: 5,
        text: "Phasellus quis sodales augue. Integer feugiat odio ut dictum viverra.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "John Doe",
        date: "2025-01-11",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed",
      },
      {
        id: 2,
        author: "John Doe",
        date: "2025-01-11",
        content: "Cras ac quam dolor. In dignissim lectus sed",
      },
    ],
    video: "https://www.youtube.com/embed/l5qootmFQx0",
    stars: 3,
    code: "Y523201",
    price: 89.0,
    discount: 5,
    category: "Game console",
    tags: ["new", "special"],
  },
  {
    id: 6,
    name: "Shoes",
    img: `${URL}/img/latest-2.png`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    descriptionLong:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam. Integer feugiat odio ut dictum viverra. Donec vehicula nisi placerat cursus mollis. Nunc aliquam tempor justo, ut sagittis nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas quam risus, congue quis accumsan at, imperdiet sed lectus. Aliquam in est purus",
    more: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur.",
      },
      {
        id: 2,
        text: "Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante.",
      },
      {
        id: 3,
        text: "Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor.",
      },
      {
        id: 4,
        text: "Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam.",
      },
      {
        id: 5,
        text: "Phasellus quis sodales augue. Integer feugiat odio ut dictum viverra.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "John Doe",
        date: "2025-01-11",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed",
      },
      {
        id: 2,
        author: "John Doe",
        date: "2025-01-11",
        content: "Cras ac quam dolor. In dignissim lectus sed",
      },
    ],
    video: "https://www.youtube.com/embed/l5qootmFQx0",
    stars: 3,
    code: "Y523201",
    price: 75.0,
    discount: 30,
    category: "Shoes",
    tags: ["new"],
  },
  {
    id: 7,
    name: "Perfume",
    img: `${URL}/img/latest-3.png`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    descriptionLong:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam. Integer feugiat odio ut dictum viverra. Donec vehicula nisi placerat cursus mollis. Nunc aliquam tempor justo, ut sagittis nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas quam risus, congue quis accumsan at, imperdiet sed lectus. Aliquam in est purus",
    more: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur.",
      },
      {
        id: 2,
        text: "Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante.",
      },
      {
        id: 3,
        text: "Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor.",
      },
      {
        id: 4,
        text: "Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam.",
      },
      {
        id: 5,
        text: "Phasellus quis sodales augue. Integer feugiat odio ut dictum viverra.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "John Doe",
        date: "2025-01-11",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed",
      },
      {
        id: 2,
        author: "John Doe",
        date: "2025-01-11",
        content: "Cras ac quam dolor. In dignissim lectus sed",
      },
    ],
    video: "https://www.youtube.com/embed/l5qootmFQx0",
    stars: 3,
    code: "Y523201",
    price: 29.0,
    discount: 5,
    category: "Perfume",
    tags: ["new", "bestseller"],
  },
  {
    id: 8,
    name: "Present box",
    img: `${URL}/img/latest-4.png`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    descriptionLong:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam. Integer feugiat odio ut dictum viverra. Donec vehicula nisi placerat cursus mollis. Nunc aliquam tempor justo, ut sagittis nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas quam risus, congue quis accumsan at, imperdiet sed lectus. Aliquam in est purus",
    more: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur.",
      },
      {
        id: 2,
        text: "Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante.",
      },
      {
        id: 3,
        text: "Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor.",
      },
      {
        id: 4,
        text: "Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam.",
      },
      {
        id: 5,
        text: "Phasellus quis sodales augue. Integer feugiat odio ut dictum viverra.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "John Doe",
        date: "2025-01-11",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed",
      },
      {
        id: 2,
        author: "John Doe",
        date: "2025-01-11",
        content: "Cras ac quam dolor. In dignissim lectus sed",
      },
    ],
    video: "https://www.youtube.com/embed/l5qootmFQx0",
    stars: 3,
    code: "Y523201",
    price: 29.0,
    discount: 5,
    category: "Jewellery",
    tags: ["new", "bestseller"],
  },
  {
    id: 9,
    name: "Ring",
    img: `${URL}/img/latest-6.png`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    descriptionLong:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam. Integer feugiat odio ut dictum viverra. Donec vehicula nisi placerat cursus mollis. Nunc aliquam tempor justo, ut sagittis nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas quam risus, congue quis accumsan at, imperdiet sed lectus. Aliquam in est purus",
    more: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur.",
      },
      {
        id: 2,
        text: "Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante.",
      },
      {
        id: 3,
        text: "Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor.",
      },
      {
        id: 4,
        text: "Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam.",
      },
      {
        id: 5,
        text: "Phasellus quis sodales augue. Integer feugiat odio ut dictum viverra.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "John Doe",
        date: "2025-01-11",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed",
      },
      {
        id: 2,
        author: "John Doe",
        date: "2025-01-11",
        content: "Cras ac quam dolor. In dignissim lectus sed",
      },
    ],
    reviews: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed",
      "Cras ac quam dolor. In dignissim lectus sed",
    ],
    video: "https://www.youtube.com/embed/l5qootmFQx0",
    stars: 3,
    code: "Y523201",
    price: 65.0,
    discount: 5,
    category: "Jewellery",
    tags: ["new", "special"],
  },
  {
    id: 10,
    name: "Watches",
    img: `${URL}/img/featured-1.png`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    descriptionLong:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam. Integer feugiat odio ut dictum viverra. Donec vehicula nisi placerat cursus mollis. Nunc aliquam tempor justo, ut sagittis nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas quam risus, congue quis accumsan at, imperdiet sed lectus. Aliquam in est purus",
    more: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur.",
      },
      {
        id: 2,
        text: "Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante.",
      },
      {
        id: 3,
        text: "Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor.",
      },
      {
        id: 4,
        text: "Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam.",
      },
      {
        id: 5,
        text: "Phasellus quis sodales augue. Integer feugiat odio ut dictum viverra.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "John Doe",
        date: "2025-01-11",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed",
      },
      {
        id: 2,
        author: "John Doe",
        date: "2025-01-11",
        content: "Cras ac quam dolor. In dignissim lectus sed",
      },
    ],
    video: "https://www.youtube.com/embed/l5qootmFQx0",
    stars: 3,
    code: "Y523201",
    price: 42.0,
    discount: 5,
    category: "Watches",
    tags: ["featured", "new", "trending"],
  },
  {
    id: 11,
    name: "Watches",
    img: `${URL}/img/featured-1.png`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    descriptionLong:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam. Integer feugiat odio ut dictum viverra. Donec vehicula nisi placerat cursus mollis. Nunc aliquam tempor justo, ut sagittis nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas quam risus, congue quis accumsan at, imperdiet sed lectus. Aliquam in est purus",
    more: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur.",
      },
      {
        id: 2,
        text: "Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante.",
      },
      {
        id: 3,
        text: "Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor.",
      },
      {
        id: 4,
        text: "Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam.",
      },
      {
        id: 5,
        text: "Phasellus quis sodales augue. Integer feugiat odio ut dictum viverra.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "John Doe",
        date: "2025-01-11",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed",
      },
      {
        id: 2,
        author: "John Doe",
        date: "2025-01-11",
        content: "Cras ac quam dolor. In dignissim lectus sed",
      },
    ],
    video: "https://www.youtube.com/embed/l5qootmFQx0",
    stars: 4,
    code: "Y523201",
    price: 42.0,
    discount: 5,
    category: "Watches",
    tags: ["featured", "new", "trending"],
  },
  {
    id: 12,
    name: "Watches",
    img: `${URL}/img/featured-1.png`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    descriptionLong:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam. Integer feugiat odio ut dictum viverra. Donec vehicula nisi placerat cursus mollis. Nunc aliquam tempor justo, ut sagittis nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas quam risus, congue quis accumsan at, imperdiet sed lectus. Aliquam in est purus",
    more: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur.",
      },
      {
        id: 2,
        text: "Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante.",
      },
      {
        id: 3,
        text: "Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor.",
      },
      {
        id: 4,
        text: "Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam.",
      },
      {
        id: 5,
        text: "Phasellus quis sodales augue. Integer feugiat odio ut dictum viverra.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "John Doe",
        date: "2025-01-11",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed",
      },
      {
        id: 2,
        author: "John Doe",
        date: "2025-01-11",
        content: "Cras ac quam dolor. In dignissim lectus sed",
      },
    ],
    video: "https://www.youtube.com/embed/l5qootmFQx0",
    stars: 5,
    code: "Y523201",
    price: 42.0,
    discount: 5,
    category: "Watches",
    tags: ["featured", "new", "trending"],
  },
  {
    id: 13,
    name: "Watches",
    img: `${URL}/img/featured-1.png`,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    descriptionLong:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam. Integer feugiat odio ut dictum viverra. Donec vehicula nisi placerat cursus mollis. Nunc aliquam tempor justo, ut sagittis nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas quam risus, congue quis accumsan at, imperdiet sed lectus. Aliquam in est purus",
    more: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur.",
      },
      {
        id: 2,
        text: "Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante.",
      },
      {
        id: 3,
        text: "Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor.",
      },
      {
        id: 4,
        text: "Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam.",
      },
      {
        id: 5,
        text: "Phasellus quis sodales augue. Integer feugiat odio ut dictum viverra.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "John Doe",
        date: "2025-01-11",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed",
      },
      {
        id: 2,
        author: "John Doe",
        date: "2025-01-11",
        content: "Cras ac quam dolor. In dignissim lectus sed",
      },
    ],
    video: "https://www.youtube.com/embed/l5qootmFQx0",
    stars: 3,
    code: "Y523201",
    price: 42.0,
    discount: 5,
    category: "Watches",
    tags: ["featured", "new", "trending"],
  },

  {
    id: 14,
    name: "Headphones",
    img: `${URL}/img/featured-2.png`,
    imgs: [
      `${URL}/img/featured-2.png`,
      `${URL}/img/headphones-2.png`,
      `${URL}/img/headphones-3.png`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    descriptionLong:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam. Integer feugiat odio ut dictum viverra. Donec vehicula nisi placerat cursus mollis. Nunc aliquam tempor justo, ut sagittis nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas quam risus, congue quis accumsan at, imperdiet sed lectus. Aliquam in est purus",
    more: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur.",
      },
      {
        id: 2,
        text: "Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante.",
      },
      {
        id: 3,
        text: "Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor.",
      },
      {
        id: 4,
        text: "Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam.",
      },
      {
        id: 5,
        text: "Phasellus quis sodales augue. Integer feugiat odio ut dictum viverra.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "John Doe",
        date: "2025-01-11",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed",
      },
      {
        id: 2,
        author: "John Doe",
        date: "2025-01-11",
        content: "Cras ac quam dolor. In dignissim lectus sed",
      },
    ],
    video: "https://www.youtube.com/embed/l5qootmFQx0",
    stars: 3,
    code: "Y523201",
    price: 90.0,
    discount: 5,
    category: "Headphones",
    brand: "Sony",
    tags: ["featured", "bestseller", "trending"],
  },
  {
    id: 15,
    name: "Headphones",
    img: `${URL}/img/featured-2.png`,
    imgs: [
      `${URL}/img/featured-2.png`,
      `${URL}/img/headphones-2.png`,
      `${URL}/img/headphones-3.png`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    descriptionLong:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam. Integer feugiat odio ut dictum viverra. Donec vehicula nisi placerat cursus mollis. Nunc aliquam tempor justo, ut sagittis nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas quam risus, congue quis accumsan at, imperdiet sed lectus. Aliquam in est purus",
    more: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur.",
      },
      {
        id: 2,
        text: "Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante.",
      },
      {
        id: 3,
        text: "Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor.",
      },
      {
        id: 4,
        text: "Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam.",
      },
      {
        id: 5,
        text: "Phasellus quis sodales augue. Integer feugiat odio ut dictum viverra.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "John Doe",
        date: "2025-01-11",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed",
      },
      {
        id: 2,
        author: "John Doe",
        date: "2025-01-11",
        content: "Cras ac quam dolor. In dignissim lectus sed",
      },
    ],
    video: "https://www.youtube.com/embed/l5qootmFQx0",
    stars: 3,
    code: "Y523201",
    price: 90.0,
    discount: 5,
    category: "Headphones",
    brand: "Sony",
    tags: ["featured", "bestseller", "trending"],
  },

  {
    id: 16,
    name: "Headphones",
    img: `${URL}/img/featured-2.png`,
    imgs: [
      `${URL}/img/featured-2.png`,
      `${URL}/img/headphones-2.png`,
      `${URL}/img/headphones-3.png`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    descriptionLong:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam. Integer feugiat odio ut dictum viverra. Donec vehicula nisi placerat cursus mollis. Nunc aliquam tempor justo, ut sagittis nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas quam risus, congue quis accumsan at, imperdiet sed lectus. Aliquam in est purus",
    more: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur.",
      },
      {
        id: 2,
        text: "Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante.",
      },
      {
        id: 3,
        text: "Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor.",
      },
      {
        id: 4,
        text: "Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam.",
      },
      {
        id: 5,
        text: "Phasellus quis sodales augue. Integer feugiat odio ut dictum viverra.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "John Doe",
        date: "2025-01-11",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed",
      },
      {
        id: 2,
        author: "John Doe",
        date: "2025-01-11",
        content: "Cras ac quam dolor. In dignissim lectus sed",
      },
    ],
    video: "https://www.youtube.com/embed/l5qootmFQx0",
    stars: 3,
    code: "Y523201",
    price: 90.0,
    discount: 5,
    category: "Headphones",
    brand: "Sony",
    tags: ["featured", "bestseller", "trending"],
  },

  {
    id: 17,
    name: "Headphones",
    img: `${URL}/img/featured-2.png`,
    imgs: [
      `${URL}/img/featured-2.png`,
      `${URL}/img/headphones-2.png`,
      `${URL}/img/headphones-3.png`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    descriptionLong:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam. Integer feugiat odio ut dictum viverra. Donec vehicula nisi placerat cursus mollis. Nunc aliquam tempor justo, ut sagittis nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas quam risus, congue quis accumsan at, imperdiet sed lectus. Aliquam in est purus",
    more: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur.",
      },
      {
        id: 2,
        text: "Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante.",
      },
      {
        id: 3,
        text: "Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor.",
      },
      {
        id: 4,
        text: "Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam.",
      },
      {
        id: 5,
        text: "Phasellus quis sodales augue. Integer feugiat odio ut dictum viverra.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "John Doe",
        date: "2025-01-11",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed",
      },
      {
        id: 2,
        author: "John Doe",
        date: "2025-01-11",
        content: "Cras ac quam dolor. In dignissim lectus sed",
      },
    ],
    video: "https://www.youtube.com/embed/l5qootmFQx0",
    stars: 3,
    code: "Y523201",
    price: 90.0,
    discount: 5,
    category: "Headphones",
    brand: "Sony",
    tags: ["featured", "bestseller", "trending"],
  },

  {
    id: 18,
    name: "Headphones",
    img: `${URL}/img/featured-2.png`,
    imgs: [
      `${URL}/img/featured-2.png`,
      `${URL}/img/headphones-2.png`,
      `${URL}/img/headphones-3.png`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    descriptionLong:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam. Integer feugiat odio ut dictum viverra. Donec vehicula nisi placerat cursus mollis. Nunc aliquam tempor justo, ut sagittis nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas quam risus, congue quis accumsan at, imperdiet sed lectus. Aliquam in est purus",
    more: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur.",
      },
      {
        id: 2,
        text: "Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante.",
      },
      {
        id: 3,
        text: "Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor.",
      },
      {
        id: 4,
        text: "Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam.",
      },
      {
        id: 5,
        text: "Phasellus quis sodales augue. Integer feugiat odio ut dictum viverra.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "John Doe",
        date: "2025-01-11",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed",
      },
      {
        id: 2,
        author: "John Doe",
        date: "2025-01-11",
        content: "Cras ac quam dolor. In dignissim lectus sed",
      },
    ],
    video: "https://www.youtube.com/embed/l5qootmFQx0",
    stars: 3,
    code: "Y523201",
    price: 90.0,
    discount: 5,
    category: "Headphones",
    brand: "Sony",
    tags: ["featured", "bestseller", "trending"],
  },

  {
    id: 19,
    name: "Headphones",
    img: `${URL}/img/featured-2.png`,
    imgs: [
      `${URL}/img/featured-2.png`,
      `${URL}/img/headphones-2.png`,
      `${URL}/img/headphones-3.png`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    descriptionLong:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam. Integer feugiat odio ut dictum viverra. Donec vehicula nisi placerat cursus mollis. Nunc aliquam tempor justo, ut sagittis nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas quam risus, congue quis accumsan at, imperdiet sed lectus. Aliquam in est purus",
    more: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur.",
      },
      {
        id: 2,
        text: "Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante.",
      },
      {
        id: 3,
        text: "Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor.",
      },
      {
        id: 4,
        text: "Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam.",
      },
      {
        id: 5,
        text: "Phasellus quis sodales augue. Integer feugiat odio ut dictum viverra.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "John Doe",
        date: "2025-01-11",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed",
      },
      {
        id: 2,
        author: "John Doe",
        date: "2025-01-11",
        content: "Cras ac quam dolor. In dignissim lectus sed",
      },
    ],
    video: "https://www.youtube.com/embed/l5qootmFQx0",
    stars: 3,
    code: "Y523201",
    price: 90.0,
    discount: 5,
    category: "Headphones",
    brand: "Sony",
    tags: ["featured", "bestseller", "trending"],
  },

  {
    id: 20,
    name: "Headphones",
    img: `${URL}/img/featured-2.png`,
    imgs: [
      `${URL}/img/featured-2.png`,
      `${URL}/img/headphones-2.png`,
      `${URL}/img/headphones-3.png`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    descriptionLong:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam. Integer feugiat odio ut dictum viverra. Donec vehicula nisi placerat cursus mollis. Nunc aliquam tempor justo, ut sagittis nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas quam risus, congue quis accumsan at, imperdiet sed lectus. Aliquam in est purus",
    more: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur.",
      },
      {
        id: 2,
        text: "Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante.",
      },
      {
        id: 3,
        text: "Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor.",
      },
      {
        id: 4,
        text: "Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam.",
      },
      {
        id: 5,
        text: "Phasellus quis sodales augue. Integer feugiat odio ut dictum viverra.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "John Doe",
        date: "2025-01-11",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed",
      },
      {
        id: 2,
        author: "John Doe",
        date: "2025-01-11",
        content: "Cras ac quam dolor. In dignissim lectus sed",
      },
    ],
    video: "https://www.youtube.com/embed/l5qootmFQx0",
    stars: 3,
    code: "Y523201",
    price: 90.0,
    discount: 5,
    category: "Headphones",
    brand: "Sony",
    tags: ["featured", "bestseller", "trending"],
  },
  {
    id: 21,
    name: "Headphones",
    img: `${URL}/img/featured-2.png`,
    imgs: [
      `${URL}/img/featured-2.png`,
      `${URL}/img/headphones-2.png`,
      `${URL}/img/headphones-3.png`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    descriptionLong:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam. Integer feugiat odio ut dictum viverra. Donec vehicula nisi placerat cursus mollis. Nunc aliquam tempor justo, ut sagittis nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas quam risus, congue quis accumsan at, imperdiet sed lectus. Aliquam in est purus",
    more: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur.",
      },
      {
        id: 2,
        text: "Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante.",
      },
      {
        id: 3,
        text: "Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor.",
      },
      {
        id: 4,
        text: "Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam.",
      },
      {
        id: 5,
        text: "Phasellus quis sodales augue. Integer feugiat odio ut dictum viverra.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "John Doe",
        date: "2025-01-11",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed",
      },
      {
        id: 2,
        author: "John Doe",
        date: "2025-01-11",
        content: "Cras ac quam dolor. In dignissim lectus sed",
      },
    ],
    video: "https://www.youtube.com/embed/l5qootmFQx0",
    stars: 3,
    code: "Y523201",
    price: 90.0,
    discount: 5,
    category: "Headphones",
    brand: "Sony",
    tags: ["featured", "bestseller", "trending"],
  },

  {
    id: 22,
    name: "Headphones",
    img: `${URL}/img/featured-2.png`,
    imgs: [
      `${URL}/img/featured-2.png`,
      `${URL}/img/headphones-2.png`,
      `${URL}/img/headphones-3.png`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    descriptionLong:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam. Integer feugiat odio ut dictum viverra. Donec vehicula nisi placerat cursus mollis. Nunc aliquam tempor justo, ut sagittis nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas quam risus, congue quis accumsan at, imperdiet sed lectus. Aliquam in est purus",
    more: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur.",
      },
      {
        id: 2,
        text: "Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante.",
      },
      {
        id: 3,
        text: "Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor.",
      },
      {
        id: 4,
        text: "Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam.",
      },
      {
        id: 5,
        text: "Phasellus quis sodales augue. Integer feugiat odio ut dictum viverra.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "John Doe",
        date: "2025-01-11",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed",
      },
      {
        id: 2,
        author: "John Doe",
        date: "2025-01-11",
        content: "Cras ac quam dolor. In dignissim lectus sed",
      },
    ],
    video: "https://www.youtube.com/embed/l5qootmFQx0",
    stars: 3,
    code: "Y523201",
    price: 90.0,
    discount: 5,
    category: "Headphones",
    brand: "Sony",
    tags: ["featured", "bestseller", "trending"],
  },

  {
    id: 23,
    name: "Headphones",
    img: `${URL}/img/featured-2.png`,
    imgs: [
      `${URL}/img/featured-2.png`,
      `${URL}/img/headphones-2.png`,
      `${URL}/img/headphones-3.png`,
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.",
    descriptionLong:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor. Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam. Integer feugiat odio ut dictum viverra. Donec vehicula nisi placerat cursus mollis. Nunc aliquam tempor justo, ut sagittis nisi. Mauris ullamcorper quis nisl sed dictum. Maecenas quam risus, congue quis accumsan at, imperdiet sed lectus. Aliquam in est purus",
    more: [
      {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur.",
      },
      {
        id: 2,
        text: "Cras ac quam dolor. In dignissim lectus sed nisl tempor, ac porttitor libero consectetur. Pellentesque diam dolor, tincidunt nec ante.",
      },
      {
        id: 3,
        text: "Pellentesque diam dolor, tincidunt nec ante congue, tincidunt facilisis tortor.",
      },
      {
        id: 4,
        text: "Mauris vitae massa molestie, sagittis ligula vel, egestas massa. Phasellus quis sodales augue. Donec nec ultricies diam.",
      },
      {
        id: 5,
        text: "Phasellus quis sodales augue. Integer feugiat odio ut dictum viverra.",
      },
    ],
    reviews: [
      {
        id: 1,
        author: "John Doe",
        date: "2025-01-11",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam dolor. In dignissim lectus sed",
      },
      {
        id: 2,
        author: "John Doe",
        date: "2025-01-11",
        content: "Cras ac quam dolor. In dignissim lectus sed",
      },
    ],
    video: "https://www.youtube.com/embed/l5qootmFQx0",
    stars: 3,
    code: "Y523201",
    price: 90.0,
    discount: 5,
    category: "Headphones",
    brand: "Sony",
    tags: ["featured", "bestseller", "trending"],
  },
];

module.exports = items;
