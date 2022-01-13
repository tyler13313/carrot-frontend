type ChatType = {
  id: string;
  sender: string;
  message: string;
  sendedAt: Date;
};

export const messages: ChatType[] = [
  {
    id: "1",
    sender: "want",
    message: "안녕하세요 아직 판매하고 계시나요?",
    sendedAt: new Date(),
  },
  {
    id: "2",
    sender: "me",
    message: "네~ 아직 판매 하고 있습니다 .",
    sendedAt: new Date(),
  },
  {
    id: "3",
    sender: "want",
    message: "다행이네요 구매 희망합니다. ",
    sendedAt: new Date(),
  },
  {
    id: "4",
    sender: "me",
    message: "어디 지역이신가요.가능하면 직거래 희망합니다",
    sendedAt: new Date(),
  },
  {
    id: "5",
    sender: "want",
    message: "아 저는 강동구에 살고 있습니다.",
    sendedAt: new Date(),
  },
  {
    id: "6",
    sender: "me",
    message: "아이코 저도 강동구에 살고 잇는데 둔촌역에서 직거래 가능하신가요?",
    sendedAt: new Date(),
  },
  {
    id: "7",
    sender: "want",
    message: "당연하죠~ 혹시 네고 아주 조금 가능한가요?",
    sendedAt: new Date(),
  },
  {
    id: "8",
    sender: "me",
    message: "안녕히계세요.",
    sendedAt: new Date(),
  },
];
