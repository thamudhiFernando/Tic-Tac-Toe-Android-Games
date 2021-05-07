cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open"
      ]
    },
    {
      "id": "es6-promise-plugin.Promise",
      "file": "plugins/es6-promise-plugin/www/promise.js",
      "pluginId": "es6-promise-plugin",
      "runs": true
    },
    {
      "id": "cordova-plugin-androidx-socialsharing.SocialSharing",
      "file": "plugins/cordova-plugin-androidx-socialsharing/www/SocialSharing.js",
      "pluginId": "cordova-plugin-androidx-socialsharing",
      "clobbers": [
        "window.plugins.socialsharing"
      ]
    },
    {
      "id": "construct-plugin-file.DirectoryEntry",
      "file": "plugins/construct-plugin-file/www/DirectoryEntry.js",
      "pluginId": "construct-plugin-file",
      "clobbers": [
        "window.DirectoryEntry"
      ]
    },
    {
      "id": "construct-plugin-file.DirectoryReader",
      "file": "plugins/construct-plugin-file/www/DirectoryReader.js",
      "pluginId": "construct-plugin-file",
      "clobbers": [
        "window.DirectoryReader"
      ]
    },
    {
      "id": "construct-plugin-file.Entry",
      "file": "plugins/construct-plugin-file/www/Entry.js",
      "pluginId": "construct-plugin-file",
      "clobbers": [
        "window.Entry"
      ]
    },
    {
      "id": "construct-plugin-file.File",
      "file": "plugins/construct-plugin-file/www/File.js",
      "pluginId": "construct-plugin-file",
      "clobbers": [
        "window.File"
      ]
    },
    {
      "id": "construct-plugin-file.FileEntry",
      "file": "plugins/construct-plugin-file/www/FileEntry.js",
      "pluginId": "construct-plugin-file",
      "clobbers": [
        "window.FileEntry"
      ]
    },
    {
      "id": "construct-plugin-file.FileError",
      "file": "plugins/construct-plugin-file/www/FileError.js",
      "pluginId": "construct-plugin-file",
      "clobbers": [
        "window.FileError"
      ]
    },
    {
      "id": "construct-plugin-file.FileReader",
      "file": "plugins/construct-plugin-file/www/FileReader.js",
      "pluginId": "construct-plugin-file",
      "clobbers": [
        "window.FileReader"
      ]
    },
    {
      "id": "construct-plugin-file.FileSystem",
      "file": "plugins/construct-plugin-file/www/FileSystem.js",
      "pluginId": "construct-plugin-file",
      "clobbers": [
        "window.FileSystem"
      ]
    },
    {
      "id": "construct-plugin-file.FileUploadOptions",
      "file": "plugins/construct-plugin-file/www/FileUploadOptions.js",
      "pluginId": "construct-plugin-file",
      "clobbers": [
        "window.FileUploadOptions"
      ]
    },
    {
      "id": "construct-plugin-file.FileUploadResult",
      "file": "plugins/construct-plugin-file/www/FileUploadResult.js",
      "pluginId": "construct-plugin-file",
      "clobbers": [
        "window.FileUploadResult"
      ]
    },
    {
      "id": "construct-plugin-file.FileWriter",
      "file": "plugins/construct-plugin-file/www/FileWriter.js",
      "pluginId": "construct-plugin-file",
      "clobbers": [
        "window.FileWriter"
      ]
    },
    {
      "id": "construct-plugin-file.Flags",
      "file": "plugins/construct-plugin-file/www/Flags.js",
      "pluginId": "construct-plugin-file",
      "clobbers": [
        "window.Flags"
      ]
    },
    {
      "id": "construct-plugin-file.LocalFileSystem",
      "file": "plugins/construct-plugin-file/www/LocalFileSystem.js",
      "pluginId": "construct-plugin-file",
      "clobbers": [
        "window.LocalFileSystem"
      ],
      "merges": [
        "window"
      ]
    },
    {
      "id": "construct-plugin-file.Metadata",
      "file": "plugins/construct-plugin-file/www/Metadata.js",
      "pluginId": "construct-plugin-file",
      "clobbers": [
        "window.Metadata"
      ]
    },
    {
      "id": "construct-plugin-file.ProgressEvent",
      "file": "plugins/construct-plugin-file/www/ProgressEvent.js",
      "pluginId": "construct-plugin-file",
      "clobbers": [
        "window.ProgressEvent"
      ]
    },
    {
      "id": "construct-plugin-file.fileSystems",
      "file": "plugins/construct-plugin-file/www/fileSystems.js",
      "pluginId": "construct-plugin-file"
    },
    {
      "id": "construct-plugin-file.requestFileSystem",
      "file": "plugins/construct-plugin-file/www/requestFileSystem.js",
      "pluginId": "construct-plugin-file",
      "clobbers": [
        "window.requestFileSystem"
      ]
    },
    {
      "id": "construct-plugin-file.resolveLocalFileSystemURI",
      "file": "plugins/construct-plugin-file/www/resolveLocalFileSystemURI.js",
      "pluginId": "construct-plugin-file",
      "merges": [
        "window"
      ]
    },
    {
      "id": "construct-plugin-file.isChrome",
      "file": "plugins/construct-plugin-file/www/browser/isChrome.js",
      "pluginId": "construct-plugin-file",
      "runs": true
    },
    {
      "id": "construct-plugin-file.androidFileSystem",
      "file": "plugins/construct-plugin-file/www/android/FileSystem.js",
      "pluginId": "construct-plugin-file",
      "merges": [
        "FileSystem"
      ]
    },
    {
      "id": "construct-plugin-file.fileSystems-roots",
      "file": "plugins/construct-plugin-file/www/fileSystems-roots.js",
      "pluginId": "construct-plugin-file",
      "runs": true
    },
    {
      "id": "construct-plugin-file.fileSystemPaths",
      "file": "plugins/construct-plugin-file/www/fileSystemPaths.js",
      "pluginId": "construct-plugin-file",
      "merges": [
        "cordova"
      ],
      "runs": true
    },
    {
      "id": "construct-mobile-rate.RateApp",
      "file": "plugins/construct-mobile-rate/www/RateApp.js",
      "pluginId": "construct-mobile-rate",
      "clobbers": [
        "cordova.plugins.RateApp"
      ]
    },
    {
      "id": "construct-mobile-advert.ConstructAd",
      "file": "plugins/construct-mobile-advert/www/ConstructAd.js",
      "pluginId": "construct-mobile-advert",
      "clobbers": [
        "cordova.plugins.ConstructAd"
      ]
    },
    {
      "id": "cordova-plugin-purchase.InAppBillingPlugin",
      "file": "plugins/cordova-plugin-purchase/www/store-android.js",
      "pluginId": "cordova-plugin-purchase",
      "clobbers": [
        "store"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-inappbrowser": "4.0.0",
    "es6-promise-plugin": "4.2.2",
    "cordova-plugin-androidx-socialsharing": "1.0.0",
    "construct-plugin-file": "1.0.0",
    "construct-mobile-rate": "1.0.0",
    "construct-mobile-advert": "1.7.3",
    "cordova-plugin-purchase": "10.5.0",
    "cordova-plugin-whitelist": "1.3.2",
    "cordova-plugin-splashscreen": "6.0.0",
    "cordova-plugin-vibration": "3.1.1"
  };
});