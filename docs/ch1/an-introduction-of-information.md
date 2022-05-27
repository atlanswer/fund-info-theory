---
title: An Introduction of Information
id: 1
sidebar_position: 1
---

- The measure of information:
   $$
   -\sum_{i=1}^{N}P_i\log_2P_i
   $$
   - $P_i$: probability of the $i$th possible event
   - $N$: total number of possible events
- Entropy: measure the amount of information carried by each messsage:
   $$
   I(M_i)=\log_xP_i^{-1}\quad\begin{cases}
   x=2 & I(M_i) \text{ in bits} \\
   x=e & I(M_i) \text{ in nats} \\
   x=10 & I(M_i) \text{ in Hartley}
   \end{cases}
   $$
   - Observations:
      - $I(M_i)\to 0$ if $P_i=1$
      - $I(M_i)\geqslant 0$ when $0\leqslant P_i\leqslant 1$
      - $I(M_i)>I(M_i)$ if $P_i<P_j$
      - Given $M_i$ and $M_j$ are statistically independent,
         $I(M_i\&M_j)=I(M_i)+I(M_j)$
