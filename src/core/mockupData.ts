interface GiftData {
  giftId: number;
  imageUrl: string;
  name: string;
  cost: number;
  url: string;
}

const mockupData: GiftData[] = [
  {
    giftId: 1,
    imageUrl: '../assets/img/img.png',
    name: 'Gift 1',
    cost: 20,
    url: 'https://example.com',
  },
  {
    giftId: 2,
    imageUrl: '../assets/img/img.png',
    name: 'Gift 2',
    cost: 30,
    url: 'https://example.com',
  },
  {
    giftId: 3,
    imageUrl: '../assets/img/img.png',
    name: 'Gift 3',
    cost: 22,
    url: 'https://example.com',
  },
  {
    giftId: 4,
    imageUrl: '../assets/img/img.png',
    name: 'Gift 4',
    cost: 22,
    url: 'https://example.com',
  },
  {
    giftId: 5,
    imageUrl: '../assets/img/img.png',
    name: 'Gift 5',
    cost: 22,
    url: 'https://example.com',
  },
  {
    giftId: 6,
    imageUrl: '../assets/img/img.png',
    name: 'Gift 4',
    cost: 22,
    url: 'https://example.com',
  },
  {
    giftId: 7,
    imageUrl: '../assets/img/img.png',
    name: 'Gift 5',
    cost: 22,
    url: 'https://example.com',
  },
  {
    giftId: 8,
    imageUrl: 'https://example.com/image5.jpg',
    name: 'Gift 5',
    cost: 22,
    url: 'https://example.com',
  },
];

export default mockupData;
