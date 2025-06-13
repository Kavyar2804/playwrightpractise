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
                bat 'npx playwright test --reporter=html,allure-playwright'  // Run Playwright tests with HTML and Allure reporters
                bat 'npx allure generate allure-results --clean -o allure-report'  // Generate Allure report
            }
        }

        stage('Report') {
            steps {
                    publishHTML(target: [
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright HTML Report',
                    alwaysLinkToLastBuild: true,
                    keepAll: true
                ]
            }
        }
        stage('Publish Allure Report') {
            steps {
                allure([
                    includeProperties: false,
                    jdk: '',
                    results: [[path: 'allure-results']]
                ])
    }
}
