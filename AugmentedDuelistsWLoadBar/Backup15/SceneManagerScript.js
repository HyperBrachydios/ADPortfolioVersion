// -----JS CODE-----
// Load a scene synchronously
global.sceneManager.loadSceneSync("Scene", {
    // Optional parameters
    additive: true,  // Default value
    enabled: true,   // Default value
    parent: undefined // Default value
});


// Load a scene asynchronously
global.sceneManager.loadSceneAsync("Scene", {
    // Optional parameters
    additive: true,  // Default value
    enabled: true,   // Default value
    parent: undefined,   // Default value
    onProgress: (percentage) => {
        Studio.log(`Loading progress: ${percentage * 100}%`);
    },  // Default value is null
    loadingScene: "Scene",  // You can specify a loading scene name here
    onComplete: (loadedScene) => {
        Studio.log('Scene has been loaded successfully');
    },  // Default value is null
    onFailure: (errorMsg) => {        
        Studio.error('Scene loading failed: ' + errorMsg);
    }   // Default value is null
});