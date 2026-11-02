import { HttpAgent } from '@ag-ui/client';
import type { RunAgentInput } from '@ag-ui/core';

/**
 * HttpAgent with configurable credentials support.
 */
export class HttpAgentWithCredentials extends HttpAgent {
  // eslint-disable-next-line @tylertech-eslint/require-private-modifier
  protected override requestInit(input: RunAgentInput): RequestInit {
    const baseInit = super.requestInit(input);
    return {
      ...baseInit,
      credentials: 'include'
    };
  }
}
