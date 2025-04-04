import { Octokit } from '@octokit/rest'
import { createAppAuth } from '@octokit/auth-app'
import { getInput } from '@actions/core'

const appId = getInput('appId')
const installationId = getInput('installationId')
const privateKey = getInput('privateKey')

export const octokit = new Octokit({
  authStrategy: createAppAuth,
  auth: {
    appId,
    installationId,
    privateKey,
  }
})
