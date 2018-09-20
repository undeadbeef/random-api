pipeline {
  agent any

  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm run build'
      }
    }

    stage('Test') {
      steps {
        sh 'echo UNIT TESTS GO HERE'
      }
    }

    stage('Docker Image') {
      steps {
        sh 'npm run docker'
      }
    }
  }
}