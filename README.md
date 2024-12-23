# Expo Linking addEventListener Inconsistent Behavior on Android

This repository demonstrates a bug in Expo's `Linking` API where the `addEventListener` for deep links is not consistently triggered when the app is already open, particularly on Android devices. The event listener works reliably only when the app is initially launched via a deep link.

## Bug Reproduction

1. Clone this repository.
2. Run the app on an Android emulator or device using Expo Go.
3. Open a link in a web browser that should trigger a deep link in the app (e.g., `myapp://myroute`).
4. Observe that if the app is already running, the deep link handler may not be triggered.
5. The bug is demonstrated in `bug.js` and a solution in `bugSolution.js`

## Solution

The solution involves using `Linking.getInitialURL()` along with the `addEventListener` to handle cases where the app was already running when the deep link was opened.  Refer to `bugSolution.js` for implementation details.