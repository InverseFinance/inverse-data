export const INV_ABI = [
  "event DelegateChanged(address indexed delegator, address indexed fromDelegate, address indexed toDelegate)",
  "event DelegateVotesChanged(address indexed delegate, uint previousBalance, uint newBalance)",
];

export const GOVERNANCE_ABI = [
  "function proposalCount() public view returns (uint256)",
  "function proposals(uint256) public view returns (uint256 id, address proposer, uint256 eta, uint256 startBlock, uint256 endBlock, uint256 forVotes, uint256 againstVotes, bool canceled, bool executed)",
  "function quorumVotes() public view returns (uint256)",
  "event ProposalCreated (uint256 id, address proposer, address[] targets, uint256[] values, string[] signatures, bytes[] calldatas, uint256 startBlock, uint256 endBlock, string description)",
  "event VoteCast (address voter, uint256 proposalId, bool support, uint256 votes)",
];
