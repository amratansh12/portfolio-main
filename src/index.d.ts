declare module "greeting-time" {
  export default function greetingTime(date: Date): string;
}

declare module "inspirational-quotes" {
  export default {
    getQuote(): { text: string; author: string };
  }
}
