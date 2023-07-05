# Loss Versus Rebalancing (LVR) on AMMs

Loss Versus Rebalancing (LVR) is a metric designed to quantify the impact of adverse selection on AMM LPs. LVR is calculated as the difference between the value of a liquidity pool and a rebalancing portfolio. LVR can be thought of as the best case scenario for arbitrageurs.

It arises from the fact that AMMs always trade at off-market prices, leaving money to arbitrageurs trading against the AMM using a CEX. LVR is greater when prices are more volatile, and when the AMM's marginal liquidity is greater (i.e. the AMM trades more aggressivley in response to price movements)

Key Assumptions in Calculation:
1. There are LPs (uninformed) and Arbitrageurs who can trade without fees
2. There is a CEX or alternate venue with deep liqudity for price discovery
