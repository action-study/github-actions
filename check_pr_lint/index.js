import core from '@actions/core'
import { octokit } from './octokit'

const pullRequest = JSON.parse(
  core.getInput('pullRequest', { required: true })
)
const baseRef = JSON.parse(
  core.getInput('base_ref', { required: true })
)

const checkLint = () => {
  const github = octokit.rest

  console.log('baseRef: ', baseRef)
  console.log('pullRequest: ', pullRequest)
  console.log('github: ', github)

}

const run = () => {
  checkLint()
}

run()
