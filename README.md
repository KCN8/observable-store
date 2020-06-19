Setting Up Observable Store:

 * Install the package!
  - npm install @codewithdan/observable-store
  - If you're not already using rxjs you'll want that too

 * Create a class that extends ObservableStore
  - I used angular CLI to generate a service and then added in the necessary shtuff!

 * Set the initial state
  - Usually you'll fetch from an API (pressed for time I'm just using some static data and setting state in the constructor)
  - Subscribe to the store changes subscribing stateChanged. You get access to this from the class you created.

 * Settings
  - Use super() to pass in settings you want to add
  - trackStateHistory
    - gives you access to stateHistory property
  - logStateChanges
    - logs any state changes to the console
  - stateSliceSelector
    - Allows you to return a specific slice of the state instead of the whole thing

 * Extensions 
  - Redux DevTools
    - npm install @codewithdan/observable-store-extensions
    - add some code to main.ts
      * ObservableStore.addExtension(new ReduxDevToolsExtension())
      * ObservableStore.globalSettings = {}
