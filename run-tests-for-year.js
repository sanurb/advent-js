const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Parse command line arguments
 * @returns {{ year: string, isWatchMode: boolean }}
 */
const parseArguments = () => {
  const args = process.argv.slice(2);
  return {
    year: args[0] || '2024',
    isWatchMode: args.includes('--watch')
  };
};

/**
 * Run tests with proper pattern matching
 */
const main = () => {
  const { year, isWatchMode } = parseArguments();
  const yearPath = path.join(process.cwd(), year);

  // Validate year directory exists
  if (!fs.existsSync(yearPath)) {
    console.error(`Error: No tests found for year ${year}. Directory "./${year}" does not exist.`);
    process.exit(1);
  }

  // Use Jest's testMatch pattern format with forward slashes
  const testPattern = `./${year}/**/*.spec.js`.replace(/\\/g, '/');
  const command = `jest --testMatch="<rootDir>/${testPattern}" ${isWatchMode ? '--watch' : ''}`;

  try {
    console.log(`Running tests for year: ${year}`);
    console.log(`Command: ${command}`);
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error('Failed to run tests:', error.message);
    process.exit(1);
  }
};

main();
