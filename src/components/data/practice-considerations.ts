export interface ConsiderationSection {
    id: string
    title: string
    imagePath: string
    imageAlt: string
    points: {
      id: string
      content: string
      isHighlighted?: boolean
    }[]
  }
  
  export const practiceConsiderations: ConsiderationSection[] = [
    {
      id: "drawbacks",
      title: "Are there Drawbacks to Owning a Practice?",
      imagePath: "/assets/ent-inner-1.png",
      imageAlt: "Doctor examining a baby",
      points: [
        {
          id: "drawback-1",
          content:
            "The drawbacks to owning an pediatric practice are slightly different depending on whether the practice is a new or existing practice.",
          isHighlighted: true,
        },
        {
          id: "drawback-2",
          content:
            "Buying a new practice means that more infrastructure must be established to find a client base and create a cash flow. Hiring new employees, buying new equipment, and marketing the business from the ground up are all costly expenditures.",
        },
        {
          id: "drawback-3",
          content:
            "These drawbacks may be reduced by buying an existing practice, where much of the infrastructure is already in place. However, the expenses would still apply.",
        },
      ],
    },
    {
      id: "decision",
      title: "Making the Right Decision",
      imagePath: "/assets/ent-inner-2.png",
      imageAlt: "Doctors discussing practice options",
      points: [
        {
          id: "decision-1",
          content:
            "Owning an pediatric practice allows you to control your business's procedures and use its success to build personal equity. This is impossible as an employee of someone else's business.",
          isHighlighted: true,
        },
        {
          id: "decision-2",
          content:
            "By purchasing an existing practice, you can have a level of certainty concerning the success of the brand and the devotion of your employees. Starting your own practice requires more overhead in money and time but gives you greater control.",
        },
        {
          id: "decision-3",
          content:
            "Either way, the benefits in freedom and profitability should make owning your own pediatric practice a serious consideration for those that want to increase the value of their degree, their personal equity, and their business.",
        },
      ],
    },
    {
      id: "takeaway",
      title: "The Takeaway",
      imagePath: "/assets/ent-inner-3.png",
      imageAlt: "Doctor examining a child with toys",
      points: [
        {
          id: "takeaway-1",
          content:
            "While owning your own pediatric practice may come with some drawbacks mostly related to high overhead costs, the independence and increased profitability prove that it may be the right move for many pediatric specialists.",
          isHighlighted: true,
        },
        {
          id: "takeaway-2",
          content:
            "The decision to buy an existing practice or to start a new one could change its value, but the process has every reason to be profitable either way.",
        },
      ],
    },
  ]
  