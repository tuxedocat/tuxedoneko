# tuxedoneko

tuxedoneko is a minimal blog theme for [hugo](http://gohugo.io).
The theme is based on [Hemingway2](https://github.com/beli3ver/hemingway2.git).

## Getting Started

Clone this repository to your hugo theme directory.

```
mkdir themes
cd themes
git clone https://github.com/tuxedocat/tuxedoneko.git
```

## Configuration

Take a look in the exampleSite dir.

This directory contains an example config file and the content for the demo.
It serves as an example setup for your documentation.

Copy the `config.toml` in the root directory of your website. Overwrite the existing config file if necessary.


```toml
baseurl = "https://example.com"
languageCode = "en"
title = "miaulog"
theme = "tuxedoneko"
copyright = "&copy; tuxedocat"
disqusShortname = "shortname"
googleAnalytics = "trackingcode"

[taxonomies]
tag = "tags"
category = "categories"

[params]
description = "Your description here"
keywords = ["keyword 1", "keyword 2", "keyword 3"]
author = "tuxedocat"
sharingicons = true

[params.highlight]
style = "github"
languages = ["scala", "sh", "python", "r", "go", "dockerfile"]

[[params.social]]
url = "https://github.com/tuxedocat"
fa_icon = "fa-github"

[[params.social]]
url = "https://gitlab.com/tuxedocat"
fa_icon = "fa-gitlab"

[[params.social]]
url = "https://twitter.com/tuxedocat"
fa_icon = "fa-twitter"

[[params.social]]
url = "https://linkedin.com/in/tuxedocat"
fa_icon = "fa-linkedin-square"

[[params.social]]
url = "/index.xml"
fa_icon = "fa-rss"

[[params.socialshare]]
url = "https://linkedin.com/in/tuxedocat"
fa_icon = "fa-linkedin-square"
```

## Build

```
hugo server
```

You can go to localhost:1313 and this theme should be visible.

## License

tuxedoneko is licensed under the [MIT License](LICENSE.md).


## Credits
tuxedoneko is based on Hucore and Hemingway (1 and 2).
