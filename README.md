# Enonic XP status

This is an admin tool for viewing useful server status information including Index, Cluster state, JVM information, JVM properties and more.

# Security Warning

This app fetches data from `<host>:2609`, which means that port `2609` must be exposed in order to work on a server. 
This is potentially a security hole, because there's a lot of information in `<host>:2609` that may be used to hack the system. 
Because of this, the Status App should only be used in controlled environments, where the network makes certain that port `2609` can not be accessed from the outside.

## Installation

Open your XP installation's Applications tool and click the "Install" button.
Find this app in the Enonic Market tab and click "Install".

Alternatively, you can download this repo and build the app with `./gradlew build deploy` in your terminal.

## Usage

Once this app is installed, you will see "Status info" admin tool on the Launcher panel inside the XP admin.
Navigate through the different status views with the buttons at the top of the page.

## Releases and compatibility

| App Version   | XP version | Download |
| ------------- | ---------- | -------- |
| 1.0.0 | 6.9.0  | [Download](http://repo.enonic.com/public/com/enonic/app/status/1.0.0/status-1.0.0.jar) |
| 1.0.1 | 6.11.0 | [Download](http://repo.enonic.com/public/com/enonic/app/status/1.0.1/status-1.0.1.jar) |
| 2.0.0 | 7.0.0  | [Download](http://repo.enonic.com/public/com/enonic/app/status/2.0.0/status-2.0.0.jar) |


## Requirements

* Enonic XP must be installed and running. See the
[XP installation documentation](http://xp.readthedocs.org/en/stable/getstarted/index.html).
