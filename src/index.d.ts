declare module "greeting-time" {
  export default function greetingTime(date: Date): string;
}

declare module "inspirational-quotes" {
  interface Quote {
    text: string;
    author: string;
  }

  interface InspirationalQuotes {
    getQuote(): Quote;
  }

  const inspirationalQuotes: InspirationalQuotes;
  export default inspirationalQuotes;
}
