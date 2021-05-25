import * as XS from "digital-collections-types";

export const defaultModule: XS.StepsModule = {
  _type: "BulletPointModule",
  title: {
    _type: "TextualDisplay",
    textSpans: [
      {
        _type: "TextSpan",
        text: "Here’s what you can get",
        styles: ["BOLD"],
      },
    ],
  },
  steps: [
    {
      heading: {
        _type: "TextualDisplay",
        textSpans: [
          {
            _type: "TextSpan",
            text: "All-in-one management",
            styles: ["BOLD"],
          },
        ],
      },
      body: {
        _type: "TextualDisplay",
        textSpans: [
          {
            _type: "TextSpan",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend arcu tincidunt gravida auctor. Vivamus nec velit sed mi ultrices bibendum.",
            styles: ["SECONDARY"],
          },
        ],
      },
    },
    {
      heading: {
        _type: "TextualDisplay",
        textSpans: [
          {
            _type: "TextSpan",
            text: "Price guidance and sales history",
            styles: ["BOLD"],
          },
        ],
      },
      body: {
        _type: "TextualDisplay",
        textSpans: [
          {
            _type: "TextSpan",
            text: "Sed vel lacus ut ante lacinia vehicula. Cras hendrerit posuere sapien eget pulvinar. Nam dictum velit sed augue elementum venenatis.",
            styles: ["SECONDARY"],
          },
        ],
      },
    },
    {
      heading: {
        _type: "TextualDisplay",
        textSpans: [
          {
            _type: "TextSpan",
            text: "Instant listing",
            styles: ["BOLD"],
          },
        ],
      },
      body: {
        _type: "TextualDisplay",
        textSpans: [
          {
            _type: "TextSpan",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend arcu tincidunt gravida auctor. Vivamus nec velit sed mi ultrices bibendum.",
            styles: ["SECONDARY"],
          },
        ],
      },
    },
  ],
};
