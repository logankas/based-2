export const agentUpdatePrompt =
  "Refresh my Based MCP connection in this AI client, then list my Based projects.";

export function getAgentSetupPrompt(origin: string) {
  return `Help me connect this AI client to my Based account. Use a custom remote MCP connector named Based at ${origin}/mcp. Guide me through signing in and approving access. Once connected, list my projects so I can verify the account.`;
}
