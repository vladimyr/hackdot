'use strict';

const { URLSearchParams } = require('url');
const slashdot = require('slashdot-api-client');
const Turndown = new (require('turndown'))({ headingStyle: 'atx' });

const getSearchParams = url => new URLSearchParams(url.split('?')[1]);
const toMarkdown = html => Turndown.turndown(html);

module.exports = async (req, res) => {
  const searchParams = getSearchParams(req.url);
  try {
    const story = await slashdot.fetchStory(searchParams.get('story'));
    res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
    res.end(renderStory(story));
  } catch (err) {
    res.statusCode = 500;
    res.end();
  }
};

function renderStory(story) {
  const html = [
    `<h1>${story.title}</h1>`,
    story.introtext.replace(/<(\/?)i>/g, '<$1blockquote>')
  ].join('\n');
  return toMarkdown(html);
}
