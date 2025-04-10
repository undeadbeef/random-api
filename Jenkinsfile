pipeline {
  agent {
    docker {
      image 'node:22'
    }
  }

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
        sh 'apt-get update'
        sh 'apt-get install -y apt-transport-https ca-certificates'
        sh 'apt-get install -y curl gnupg2 software-properties-common'
        sh 'curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -'
        sh 'add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"'
        sh 'apt-get update'
        sh 'apt-get install -y docker-ce'
        sh 'npm run docker'
      }
    }
  }
}
