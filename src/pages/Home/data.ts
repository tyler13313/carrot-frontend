import axios from "axios";
import { useEffect, useState } from "react";

type TradeItem = {
  id: string;
  imageUrl: string;
  title: string;
  location: string;
  createdAt: Date;
  updatedAt?: Date;
  price: number;
  chat?: number;
  interest?: number;
};

export const tradeItems: TradeItem[] = [
  {
    id: "1",
    imageUrl: "https://t1.daumcdn.net/cfile/tistory/9964504D5D07495A09",
    title: "title1",
    location: "location1",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 1,
  },
  {
    id: "2",
    imageUrl: "https://t1.daumcdn.net/cfile/tistory/9964504D5D07495A09",
    title: "title2",
    location: "location2",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 2,
    chat: 1,
    interest: 1,
  },
  {
    id: "3",
    imageUrl: "https://t1.daumcdn.net/cfile/tistory/9964504D5D07495A09",
    title: "title3",
    location: "location3",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 3,
    chat: 2,
    interest: 2,
  },
  {
    id: "4",
    imageUrl: "https://t1.daumcdn.net/cfile/tistory/9964504D5D07495A09",
    title: "title4",
    location: "location4",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 4,
    chat: 3,
    interest: 3,
  },
  {
    id: "5",
    imageUrl: "https://t1.daumcdn.net/cfile/tistory/9964504D5D07495A09",
    title: "title5",
    location: "location5",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 5,
  },
  {
    id: "6",
    imageUrl: "https://t1.daumcdn.net/cfile/tistory/9964504D5D07495A09",
    title: "title6",
    location: "location6",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 6,
  },
  {
    id: "7",
    imageUrl: "https://t1.daumcdn.net/cfile/tistory/9964504D5D07495A09",
    title: "title7",
    location: "location7",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 7,
  },
  {
    id: "8",
    imageUrl: "https://t1.daumcdn.net/cfile/tistory/9964504D5D07495A09",
    title: "title8",
    location: "location8",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 8,
  },
  {
    id: "9",
    imageUrl: "https://t1.daumcdn.net/cfile/tistory/9964504D5D07495A09",
    title: "title9",
    location: "location9",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 9,
  },
  {
    id: "10",
    imageUrl: "https://t1.daumcdn.net/cfile/tistory/9964504D5D07495A09",
    title: "title10",
    location: "location10",
    createdAt: new Date(),
    updatedAt: new Date(),
    price: 10,
  },
];
