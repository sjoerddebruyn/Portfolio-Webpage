export type AboutSection = {
  id: string;
  title: string;
  content: string[];
};

export type AboutData = {
  introduction: string[];
  sections: AboutSection[];
  conclusion: string;
};

export const aboutData: AboutData = {
  introduction: [
    "Hi, you may be wondering who I am, you're on my website after all.",
    "If you're mostly interested in seeing my academic and professional career, check out the experience or project pages",
    "…but, if you're also interested in who I am outside of my technical ability, then feel free to read all about my life, or at least the significant parts I've chosen to compile.",
  ],
  sections: [
    {
      id: "early-life",
      title: "Early life",
      content: [
        "Like anyone else, I don't remember much of the first few years of life. I remember watching Dora the explorer with my childhood crush, having lightsaber battles, standing outside a speech therapy center for my refusal to speak (don't worry, I can't shut up now), and getting shot in the eye with one of those massive nerf bullets. If you can't guess by name though, I didn't grow up just in the states, I traveled between the Netherlands and Oregon every few years until I was nine. From there on, I was raised the good old American way. Corndogs and fireworks on Fourth of July, wallball and monkey bars at recess, Kings day with bitterballen and stroopwaffels, snowball fights on days off, being yelled at by parents in a language my friends couldn't understand, the 3 three years of continuous awkwardness of middle school. Okay maybe there was some Dutchness sprinkled in through the years as I grew up in the States, but overall it was a typical childhood made up of all the laughter, acne, crushes, and heartbreak anyone goes through.",
      ],
    },
    {
      id: "significant-moments",
      title: "Some Significant moments",
      content: [
        "Not all of life was typical though, I like to think of myself as a risk-taker, bold, and somewhat unhinged at times.",
      ],
    },
    {
      id: "travels",
      title: "My travels",
      content: [
        // This section can be expanded with travel content when available
      ],
    },
    {
      id: "me-now",
      title: "Me now",
      content: [
        "So all of those wonderful experiences (if you took the time to read them) have shaped me, but you may now wonder, into what? I could tell you that all of these moments have made me reflective and insightful into my actions and the choices I make daily. I could tell you that it made me appreciate of life and want the most out of everything, or that it has fueled a drive in me to discover and explore all I can.",
        "And while all of that would be true, it's not what I believe to be the most crucial lesson that I received.",
        "I think that all of these moments in life have taught me that I will always make mistakes, that'll say the wrong thing sometimes, disappoint someone or myself, that I'll have my breakdowns and crash outs.",
        "But it's also taught me that I am passionate, that I'm curious, that all these negative parts of life are exactly that, a part of life. We can pretend we're perfect (and maybe on a promotional website, that's what I ought to say I am) but we're not, and I'm not. I'm a reflection of my actions, and some of those actions are negative, but they also have taught me so much more than some of the positive things I have done. And it's made me grow, pushed me and motivated me to be better, and knowing that that's all I can ever do has brought me peace.",
      ],
    },
  ],
  conclusion:
    "Longwinded? Overly-sentimental? Maybe, but that's my story and who I am, hope you enjoyed.",
};

