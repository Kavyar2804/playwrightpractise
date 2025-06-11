pipeline {
    agent any  // Run on any available Jenkins agent

    stages {
        stage('Install') {
            steps {
                sh 'npm ci'
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
