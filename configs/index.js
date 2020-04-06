const configVars = require('./config-vars.json')

const requiredVars = [
  'NODE_ENV',
  'API_PORT'
]

const envExportedVars = ['NODE_ENV']

const missingVars = requiredVars.filter(
  required =>
    !configVars.hasOwnProperty(required) ||
    configVars[required] === undefined ||
    configVars[required === null]
)

if (missingVars.length > 0) {
  const missingVarsText = missingVars.reduce((acc, curr) => `'${acc}, ${curr}'`, '')
  console.error(`ENV: ${configVars.NODE_ENV},  ${missingVarsText} not found in 'config-vars.json' file.`, { scope: 'startup' })
  process.exit(1)
}

envExportedVars.forEach(v => {
  process.env[v] = configVars[v]
})

const config = {
  node_env: configVars.NODE_ENV,
  api: {
    env: configVars.NODE_ENV,
    port: configVars.API_PORT,
    host: configVars.API_HOST,
    cors: {
      allowed: ['*']
    }
  }
}

module.exports = config
