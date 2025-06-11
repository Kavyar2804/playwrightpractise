pipeline {
    agent any  // Run on any available Jenkins agent

    stages {
        stage('Install') {
            steps {
                bat 'npm install'  // Install dependencies using npm
                bat 'npx playwright install'  // Install Playwright browsers
            }
        }

        stage('Test') {
            steps {
                sh 'npx playwright test'
            }
        }

        stage('Report') {
            steps {
                archiveArtifacts artifacts: 'playwright-report/**/*', fingerprint: true
            }
        }
    }
}
