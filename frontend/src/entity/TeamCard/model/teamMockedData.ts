import type { Team } from "./types";

export const teamMockedData: Team = {
  team: {
    id: "1",
    name: "Real Madrid",
    logo: "/mockImages/RealMadridLogo.svg",
    founded: 1902,
  },
  league: {
    id: "1",
    name: "UEFA Champions League",
    logo: "/mockImages/UEFA.svg",
    country: {
      name: "Spain",
      code: "sdsdsd",
      flag: "/mockImages/Country.svg",
    },
  },
  venue: {
    name: "Emirates Stadium",
    image: "/mockImages/StadiumImage.svg",
    capacity: 60,
    address: "Hornsey Rd, London N7 7AJ, United Kingdom",
  },
  stats: {
    played: 100,
    wins: 43,
    draws: 4,
    loses: 53,
    goals: 156,
  },
};
