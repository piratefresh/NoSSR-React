export default [
  {
    text: "Category",
    expanded: true,
    items: [
      {
        text: "Category 1-1",
        expanded: true,
        items: [
          { text: "Category 2-1" },
          { text: "Category 2-2" },
          {
            text: "Category 2-3",
            expanded: true,
            items: [
              { text: "Category 3-1" },
              {
                text: "Category 3-2",
                expanded: true,
                items: [{ text: "Category 4-1" }, { text: "Category 4-2" }]
              }
            ]
          }
        ]
      },
      { text: "Category 1-2" },
      { text: "Category 1-3" }
    ]
  },
  {
    text: "Category",
    items: [
      { text: "Category 1-1" },
      { text: "Category 1-2" },
      { text: "Category 1-3" }
    ]
  }
];
