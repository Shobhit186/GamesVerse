import pubg from "../assets/freepik__the-style-is-candid-image-photography-with-natural__50656.jpeg";
import cod from "../assets/cod.jpeg";
import gta from "../assets/GTA.png";
import angry from "../assets/Angry.png";
import war from "../assets/war.png";
import saga from "../assets/saga.png";
export const navItems = [
    {label: 'Home', path: '#home'},
    {label: 'Games', path: '#games'},
    {label: 'Subscriptions', path: '#subscriptions'},
    {label: 'Contact Us', path: '#contact'},
]

export const GameCard = [
    {
        name: "Pubg Playground",
        Description: "A battle royale where players fight to be the last one standing on a shrinking map.",
        image: pubg
    },
    {
        name: "Call of Duty:WarZone",
        Description: "A first-person shooter delivering intense multiplayer battles.",
        image: cod,
    },
    {
        name: "Grand Theft Auto:V",
        Description: "An action-adventure game where you can live a life of crime.",
        image: gta,
    },
    {
        name: "Angry Birds Star Wars",
        Description: "A fun and addictive puzzle game where you launch birds to destroy defenses.",
        image: angry
    },
    {
        name: "God of War:Ragnarok",
        Description: "An epic action-adventure game set in Norse mythology.",
        image: war,
    },
    {
        name: "Candy Crush Saga",
        Description: "A popular puzzle game where you destroy candies to score points.",
        image: saga,
    },
]

export const subscriptionPlans = [
    {
      "planName": "Free",
      "price": "0",
      "billingCycle": "per month",
      "benefits": [
        "Access to basic games",
        "Limited multiplayer access",
        "Basic community features",
        "Advertisements supported"
      ]
    },
    {
      "planName": "Premium",
      "price": "10",
      "billingCycle": "per month",
      "benefits": [
        "Access to all games",
        "Ad-free experience",
        "Exclusive premium-only games",
        "Priority customer support",
        "Extended multiplayer access"
      ]
    },
    {
      "planName": "Ultimate",
      "price": "50",
      "billingCycle": "per month",
      "benefits": [
        "All Premium Plan benefits",
        "Early access to new games",
        "Exclusive in-game rewards",
        "Free monthly in-game currency",
        "VIP support with faster response times",
        "Unlimited multiplayer access"
      ]
    }
  ];


  