# Loss Versus Rebalancing (LVR) on AMMs

Loss Versus Rebalancing (LVR) is a metric designed to quantify the impact of adverse selection on AMM LPs. LVR is calculated as the difference between the value of a liquidity pool and a rebalancing portfolio. LVR can be thought of as the best case scenario for arbitrageurs.

It arises from the fact that AMMs always trade at off-market prices, leaving money to arbitrageurs trading against the AMM using a CEX. LVR is greater when prices are more volatile, and when the AMM's marginal liquidity is greater (i.e. the AMM trades more aggressivley in response to price movements)

### Empirical formula for Total LVR accumulated after n trades on an AMM

$$
Total \  LVR =  \sum_{i=1}^{n} a_i \cdot (p_i - q_i)
$$

$a_i$ : Amount of Token Sold

$p_i$ : Market Price

$q_i$ : AMM Price

### Theoretical Daily LVR as a function of Pool Value (for Uniswap V3)

$$
\frac{l(\sigma^2,P)}{V(P)} = \frac{\sigma^2\sqrt{P}}{4(2\sqrt{P} \  - \ P/\sqrt{P_b} \ - \ \sqrt{P_a})}
$$

$l(\sigma^2,P)$ : Instantaneous LVR

$V(P)$ : Pool State

$\sigma^2$ : Daily Volatility 

$P_b$ : Upper Price Bound

$P_a$ : Lower Price Bound

$P$ : Current Price

### Key Assumptions in the model:
1. There are LPs (uninformed) and Arbitrageurs who can trade without fees
2. There is a CEX or alternate venue with deep liqudity for price discovery

# Files

| File      | Remarks |
| ----------- | ----------- |
| [Theoretical LVR](https://github.com/crustyapples/LVR/blob/master/notebooks/Theoretical_LVR.ipynb)     | Fetching On-Chain and External Pricing Data for Uniswap V3 Vaults       |
| [LQTY/ETH 0.3%](https://github.com/crustyapples/LVR/blob/master/notebooks/LVR_Comparison_LQTYETH.ipynb)   | Visualising Data for LQTY/ETH 0.3% Pair        |
| [USDC/ETH 0.05%](https://github.com/crustyapples/LVR/blob/master/notebooks/LVR_Comparison_USDCETH.ipynb)   | Visualising Data for USDC/ETH 0.05% Pair        |
| [USDC/ETH 0.05%](https://htmlpreview.github.io/?https://github.com/crustyapples/LVR/blob/master/notebooks/LQTYETH.html)   | Interactive Chart LQTY/ETH 0.3% Pair        |
| [USDC/ETH 0.05%](https://htmlpreview.github.io/?https://github.com/crustyapples/LVR/blob/master/notebooks/USDCETH.html)   | Interactive Chart USDC/ETH 0.05% Pair        |
