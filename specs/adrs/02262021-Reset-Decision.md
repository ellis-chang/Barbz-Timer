# STOP Button Functionality

## Context and problem statement
We want to decide how the STOP button should act.

## Considered options
1. STOP button simply pauses the timer, without changing any other values.
2. STOP button does a soft reset, which resets the timer back to the initial work period, but not the estimated pomos of the current task.
3. STOP button does a hard reset, which resets the timer back to the initial work period AND deletes the current task.
4. STOP button does an extra hard reset and resets everything in the app, including all timers and tasks.

## Decision outcome
Chosen option: Option 4
* Ensures that the STOP button is NOT a PAUSE button.
* Forces the user to be consistent with the timer, so that they are focused.
