const { Toolkit } = require("actions-toolkit");

const tools = new Toolkit();
const { payload } = tools.context;
const commits = payload.commits.filter(c => c.distinct);

const FILES = [];
const FILES_MODIFIED = [];
const FILES_ADDED = [];
const FILES_DELETED = [];

commits.forEach(commit => {
  FILES.push(...commit.modified, ...commit.added);
  FILES_MODIFIED.push(...commit.modified);
  FILES_ADDED.push(...commit.added);
  FILES_DELETED.push(...commit.removed);
});
