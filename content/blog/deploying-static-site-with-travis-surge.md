+++
title = "Deploying a static Zola site with Travis and Surge"
description = "It's mostly a matter of reading docs and gluing stuff together."
date = 2019-01-02
+++

# Deploying a static Zola site with Travis and Surge

I recently decided to relaunch my personal website and to migrate my blog away from Medium ([reasons](https://medium.com/@nikitonsky/medium-is-a-poor-choice-for-blogging-bb0048d19133)). 

Below I've described my reasons for choosing the tools I did, and how I glued them together to serve my site.

## Tools & Motivations

### Zola
I've used [Jekyll](https://jekyllrb.com/) in the past and while it's fine, to be honest I just wanted to try something new.

[Zola](https://www.getzola.org/) (formerly known as Gutenberg) looked like a good choice. My [motivations](https://www.vincentprouillet.com/blog/announcing-gutenberg/) for choosing this framework are much the same as those the guy (Vincent Prouillet) who made the framework in the first place. In particular, it offers no-config no-config RSS, which makes it a great choice for a blog.

Furthermore, the [documentation](https://www.getzola.org/) is fairly good, and in putting the site together I found that the terminal output was informative and useful for debugging.

My site is (at the time of writing) extremely bare-bones as I come to grips with Zola. In fact, it's more or less a rip-off of [Vincent Prouillet's personal website](https://github.com/Keats/vincentprouillet), with even less styling.

### Travis CI
In the spirit of exploration, at first I was going to host my site on [GitLab pages](https://docs.gitlab.com/ee/user/project/pages/), therefore also using GitLab CI. I abandoned this because even after reading the docs, I couldn't figure out how to get the site to serve at `oscar-barlow.gitlab.io`, rather than `oscar-barlow.gitlab.io/oscar-barlow`, which it did by default. Additionally, the GitLab pages docs recommend you [set an empty string as the site's base url](https://docs.gitlab.com/ee/user/project/pages/getting_started_part_two.html#urls-and-baseurls). However, a specified base url is the only required entry in Zola's config file. If I recall correctly, I was able to circumvent this by setting a blank string (`" "`) rather than an empty string in the config. But this was a major sign that GitLab was not right for my project.

I migrated the project to GitHub with the aim of using [GitHub Pages](https://pages.github.com/) (more about this below) to host the site. The Zola documentation has a template `.travis.yml` for GitHub Pages, with annotations so you can see what it's doing. [Travis CI](https://travis-ci.com/) has a reputation as a reliable, simple, and configurable CI service, so I decided to stick with it even after rejecting GitHub Pages.

### Surge
Unfortunately, the way that the Zola docs describe of  deploying your site as a GitHub Page no longer works. The method suggested involves getting Travis to publish to a `gh-pages` branch in your repo. But GitHub pages hosted at `<your-username>.github.io` [must be published from the `master` branch](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/). For a Zola site, we actually only want to publish the contents of `public`, the folder produced after building the site.

As the GitHub Pages docs state, if your `master` branch contains a `docs` folder, the contents of that folder will be served as the page. It is possible to output a Zola site to this folder (with `zola build --output-dir docs`), but I chose not to do this for a few reasons. 

Firstly, I just want to `git push` and know my changes are deployed - I don't want to have to remember to how to build the site, as CI should do that. Secondly, I find it inelegant to have the generated HTML committed alongside the markdown it was created from. Thirdly, I was enjoying playing around with Travis!

Eventually the Travis docs led me to [surge.sh](https://surge.sh/), a way to pubish static sites with a command-line tool. [Travis supports surge](https://docs.travis-ci.com/user/deployment/surge/) too, and it's easy to configure.

## Gluing it together
Below is the `.travis.yml` file that publishes my personal website and blog, along with annotations explaining what each line is doing.

You will need to run surge through its command-line interface before doing this, in order to set up your account and obtain a deployment token - see the Travis docs about surge for more information.

```yaml
# use a minimal build environment for faster builds.
language: minimal

# silently fetch a specific Zola release, unpack it, and make it accessible
before_script:
  - curl -s -L https://github.com/getzola/zola/releases/download/v$ZOLA_VERSION/zola-v$ZOLA_VERSION-x86_64-unknown-linux-gnu.tar.gz | sudo tar xvzf - -C /usr/local/bin

# build the project - see Zola documentation for more information.
script:
  - zola build

deploy:
  # instruct Travis to deploy to surge
  provider: surge
  # specify which folder shall be deployed
  project: ./public/
  # set surge url. required by surge.
  domain: $SURGE_DOMAIN
  # must be set or the content generated in the script section will be cleaned up by travis
  skip_cleanup: true
```
To be honest, this is mostly a combination of sample Travis yaml provided in the Zola docs, with the Travis documentation about surge. The only thing I've done beyond that is to set the Zola version and surge domain as environment variables to make them easier to update.

The site takes ~35 seconds to check out, build and deploy. I'm pretty happy with that!

