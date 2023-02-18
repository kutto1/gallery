pipeline {
      agent any
      tools {nodejs "node"}
  stages {
    stage('Build') {
        steps {
        git 'https://github.com/kutto1/gallery.git'
        sh 'npm install'
      }
      stage('Test') {
                    steps {
                        sh './jenkins/scripts/test.sh'
                    }
                }
      }
      }
      }