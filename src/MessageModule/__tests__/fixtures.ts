export const defaultModule: any = {
  _type: "MessageModule",
  messageType: "INFO",
  displayIcon: false,
  title: {
    _type: "TextualDisplay",
    textSpans: [
      {
        _type: "TextSpan",
        text: "Full functionality of Digital Collections is available only in eBay app now",
        styles: ["BOLD"],
      },
    ],
  },
  additionalText: [
    {
      _type: "TextualDisplay",
      textSpans: [
        {
          _type: "TextSpan",
          text: "To download it, open your phone’s camera and scan this code.",
        },
      ],
    },
    {
      _type: "TextualDisplay",
      textSpans: [
        {
          _type: "TextSpan",
          text: "Don't show me again",
          styles: ["PSEUDOLINK"],
        },
      ],
      action: {
        type: "OPERATION",
        name: "HIDE_COLLECTION_NOTIFICATION_1",
      },
    },
  ],
};
