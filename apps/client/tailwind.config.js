const { join } = require("path");

module.exports = {
  presets: [require("../../tailwind.config.js")],
  content: [
    join(__dirname, "index.html"),
    join(__dirname, "{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}"),
  ]
}