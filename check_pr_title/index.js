const core = require('@actions/core')

const pull_request = JSON.parse(core.getInput('pullRequest', { required: true }))

const PR_TITLE = pull_request.title

// STEP 1. PR Title이 Conventional Commit에 맞는지 확인.
const regex = /^(|docs|feat|fix|refactor|style|test|chore)(\([^)]+\))?:.+/
const isValidPRTitle = regex.test(PR_TITLE)

// STEP 2. PR Title이 Conventional Commit에 맞지 않는다면 Fail 처리.
if (!isValidPRTitle) {
  core.setFailed('PR 제목이 컨벤션에 맞지 않습니다.')
}
