# Timer automatic or manual

## Context and problem statement
We want to decide whether or not the timer on our website should roll over to the next time period (work, short break, long break) automatically or let the user decide when to change the work periods.

## Considered options
1. Let the user decide when to start the next timer
2. Roll over the clock to the next period automatically
3. Have both options, with a toggle in the settings menu initially set to automatic with the option of changing it to manual

## Decision outcome
Chosen option: Number 2, because:
  * The point of the pomodoro timer is so that the user is forced to complete their tasks in a timely manner. Allowing them the freedom to start the work periods at their own discretion is counter-intuitive to the nature of the product. Option 1 is not viable.
  * In the same vein, option 3 is not viable because of the aforementioned reason. Additionally, implementing this option in the settings menu is time-prohibitive, and we should work on other features instead.
