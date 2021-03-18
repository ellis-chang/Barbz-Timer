# End of Estimated Pomos

## Context and problem statement
We want to decide whether or not at the end of the current task's estimated pomodoros, if we should prompt the user to add more work periods.

## Considered options
1. Rollover tasks automatically, without checking to see if the user has actually completed the task.
2. Make users check off their tasks manually.
3. Prompt the user with a pop-up notification that asks the user to input how many more estimated pomos they think the current task will take.

## Decision outcome
Chosen option: Number 3, because:
* This is the best option that fits with the code that already exists.
* The point of the app is to remind users of what they should be working on.
* This decision is a good balance between giving users too much flexibility vs. limiting their options.
