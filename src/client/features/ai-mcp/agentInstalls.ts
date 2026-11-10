import { ClaudeIcon, OpenAIIcon } from "./AgentIcons";

// newChatUrl opens a new chat with the prompt filled in. Neither link is
// documented by its chat app.
export const ONE_CLICK_INSTALLS = [
  {
    agent: "chatgpt",
    name: "ChatGPT",
    href: "/start/connect.html#chatgpt",
    newChatUrl: (prompt: string) =>
      `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`,
    Icon: OpenAIIcon,
  },
  {
    agent: "claude",
    name: "Claude",
    href: "/start/connect.html#claude",
    newChatUrl: (prompt: string) =>
      `https://claude.ai/new?q=${encodeURIComponent(prompt)}`,
    Icon: ClaudeIcon,
  },
];
