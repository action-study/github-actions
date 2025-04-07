import core from '@actions/core'
import { octokit } from './octokit'
import { execSync } from 'child_process'

const pullRequest = JSON.parse(
  core.getInput('pullRequest', { required: true })
)
const baseName = JSON.parse(
  core.getInput('base_ref', { required: true })
)

const checkLint = () => {
  console.log(`Base branch is ${baseName}`)

  execSync(`git fetch origin ${baseName}:refs/remotes/origin/${baseName}`)

  

  console.log('baseRef: ', baseRef)
  console.log('pullRequest: ', pullRequest)
  console.log('github: ', github)

}

const run = () => {
  checkLint()
}

run()
