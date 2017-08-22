# Enonic XP status

This is an admin tool for viewing useful server status information including
Index, Cluster state, JVM information, JVM properties and more.

## Installation

Open your XP installation's Applications tool and click the "Install" button.
Find this app in the Enonic Market tab and click "Install".

Alternatively, you can download this repo and build the app with `./gradlew build`
in your terminal. Them move the JAR file to your XP installation's "deploy" folder.

## Usage

Once this app is installed, open the XP admin menu and click on the "Status info" app.
Navigate through the different status views with the buttons at the top of the page.

## Releases and compatibility

| App Version   | XP version |
| ------------- | ---------- |
| 1.0.0 | 6.9.0  | [Download](http://repo.enonic.com/public/com/enonic/app/status/1.0.0/status-1.0.0.jar) |
| 1.0.1 | 6.11.0 | [Download](http://repo.enonic.com/public/com/enonic/app/status/1.0.1/status-1.0.1.jar) |


## Requirements

* Enonic XP must be installed and running. See the
[XP installation documentation](http://xp.readthedocs.org/en/stable/getstarted/index.html).


* Virtual host must be configured to open /status url on the host server. For example, for enonic.com/status:
```
mapping.status.host = enonic.com
mapping.status.source = /status
mapping.status.target = /status
mapping.status.userStore = system
```

### TODOS

* TODO: Add favicons
* TODO: Add index sections for relocating and initializing.
