pipeline {
    agent any

    // tools {
    //     nodejs 'NodeJS' // Optional if Jenkins has NodeJS tool configured
    // }

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
                bat 'npx playwright install'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test --reporter=html,allure-playwright'
            }
        }

        stage('Generate Allure Report') {
            steps {
                bat 'npx allure generate allure-results --clean -o allure-report'
            }
        }

        stage('Publish HTML Report') {
        when { always() }
        steps {
        publishHTML(target: [
            reportDir: 'playwright-report',
            reportFiles: 'index.html',
            reportName: 'Playwright HTML Report',
            alwaysLinkToLastBuild: true,
            keepAll: true
        ])
    }
}

        stage('Publish Allure Report')  {
        when { always() }
        steps {
        allure([
            includeProperties: false,
            jdk: '',
            results: [[path: 'allure-results']]
        ])
    }
}

}
}
