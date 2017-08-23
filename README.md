# Enonic XP status

This is an admin tool for viewing useful server status information including
Index, Cluster state, JVM information, JVM properties and more.

# Security Warning

Version 1 of this app fetches data from /status, which means that this page must be exposed in vhost in order to work on a server.  This is potentially a security hole, because there are a lot of information on the /status pages that may be used to hack the system.
Because of this, the Status App should only be used in controlled environments, where the network makes certain that the /status page can not be accessed from the outside.
Enonic is working on a version 2 of the app, with a very different archtecture that fetches the data in a secure way.

## Installation

Open your XP installation's Applications tool and click the "Install" button.
Find this app in the Enonic Market tab and click "Install".

Alternatively, you can download this repo and build the app with `./gradlew build`
in your terminal. Them move the JAR file to your XP installation's "deploy" folder.

* Virtual host must be configured to open /status url on the host server. For example, for enonic.com/status:
```
mapping.status.host = enonic.com
mapping.status.source = /status
mapping.status.target = /status
mapping.status.userStore = system
```

## Usage

Once this app is installed, open the XP admin menu and click on the "Status info" app.
Navigate through the different status views with the buttons at the top of the page.

## Releases and compatibility

| App Version   | XP version | Download |
| ------------- | ---------- | -------- |
| 1.0.0 | 6.9.0  | [Download](http://repo.enonic.com/public/com/enonic/app/status/1.0.0/status-1.0.0.jar) |
| 1.0.1 | 6.11.0 | [Download](http://repo.enonic.com/public/com/enonic/app/status/1.0.1/status-1.0.1.jar) |


## Requirements

* Enonic XP must be installed and running. See the
[XP installation documentation](http://xp.readthedocs.org/en/stable/getstarted/index.html).

### TODOS

* TODO: Add favicons
* TODO: Add index sections for relocating and initializing.
